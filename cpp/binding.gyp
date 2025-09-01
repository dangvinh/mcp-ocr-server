{
  "targets": [
    {
      "target_name": "ocr_addon",
      "sources": [ "src/ocr_addon.cpp" ],
      "include_dirs": [
        "../node_modules/node-addon-api",
        "include"
      ],
      "libraries": [
         "<!(pwd)/build-core/libocr_core.a",
        "/opt/homebrew/lib/libtesseract.dylib",
        "/opt/homebrew/lib/libleptonica.dylib"
      ],
      "cflags": [ "-fexceptions" ],
      "cflags_cc": [ "-fexceptions" ],
      "defines": [ "NAPI_DISABLE_CPP_EXCEPTIONS=0" ],
      "conditions": [
        [ "OS=='mac'", {
          "xcode_settings": {
            "GCC_ENABLE_CPP_EXCEPTIONS": "YES",
            "CONFIGURATION_BUILD_DIR": "build/Release",
            "OTHER_CPLUSPLUSFLAGS": [ "-fexceptions" ],
            "OTHER_CFLAGS": [ "-fexceptions" ],
            "OTHER_LDFLAGS": [ "-undefined dynamic_lookup" ]
          }
        }],
        [ "OS=='win'", {
          "msvs_settings": {
            "VCCLCompilerTool": {
              "ExceptionHandling": 1,
              "AdditionalOptions": [ "/EHsc" ]
            },
            "OutDir": "build\\Release"
          }
        }]
      ]
    }
  ]
}
