#include <napi.h>
#include "ocr.h"
#include <string>
#include <iostream>

// Async worker to perform OCR in a separate thread
class OcrWorker : public Napi::AsyncWorker
{
public:
  OcrWorker(Napi::Env env, const std::string &imagePath, Napi::Promise::Deferred &&deferred)
      : Napi::AsyncWorker(env), imagePath_(imagePath), deferred_(std::move(deferred)) {}

  void Execute() override
  {
    ocr::OcrEngine engine;
    result_ = engine.recognize(imagePath_);
  }

  void OnOK() override
  {
    // Use Env() here, do not store env_ separately
    deferred_.Resolve(Napi::String::New(Env(), result_));
  }

  void OnError(const Napi::Error &e) override
  {
    std::cout << "[OcrWorker] OCR failed, rejecting promise: " << e.Message() << std::endl;
    deferred_.Reject(e.Value());
  }

private:
  std::string imagePath_;
  std::string result_;
  Napi::Promise::Deferred deferred_;
};

// Exposed function to Node.js
Napi::Value RecognizeWrapped(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();

  if (info.Length() < 1 || !info[0].IsString())
  {
    Napi::TypeError::New(env, "Expected a string argument").ThrowAsJavaScriptException();
    return env.Null();
  }

  std::string imagePath = info[0].As<Napi::String>();
  Napi::Promise::Deferred deferred = Napi::Promise::Deferred::New(env);

  OcrWorker *worker = new OcrWorker(env, imagePath, std::move(deferred));
  worker->Queue();

  return deferred.Promise();
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  exports.Set("recognize", Napi::Function::New(env, RecognizeWrapped));
  return exports;
}

NODE_API_MODULE(ocr_addon, Init)
