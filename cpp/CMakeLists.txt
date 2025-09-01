cmake_minimum_required(VERSION 3.15)
project(mcp_ocr LANGUAGES CXX)

# -----------------------------
# C++ standard
# -----------------------------
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# -----------------------------
# Include CTest for testing
# -----------------------------
include(CTest)

# -----------------------------
# Fetch GoogleTest (cross-platform)
# -----------------------------
include(FetchContent)
set(FETCHCONTENT_QUIET OFF)
FetchContent_Declare(
  googletest
  URL https://github.com/google/googletest/archive/refs/tags/release-1.12.1.zip
  DOWNLOAD_EXTRACT_TIMESTAMP TRUE
)
FetchContent_MakeAvailable(googletest)

# -----------------------------
# vcpkg support (cross-platform)
# -----------------------------
if(DEFINED ENV{VCPKG_ROOT})
  set(CMAKE_TOOLCHAIN_FILE "$ENV{VCPKG_ROOT}/scripts/buildsystems/vcpkg.cmake" CACHE STRING "Vcpkg toolchain file")
endif()

# -----------------------------
# Tesseract & Leptonica paths
# -----------------------------
if(APPLE)
  set(TESSERACT_INCLUDE_DIRS "/opt/homebrew/include")
  set(TESSERACT_LIBRARIES "/opt/homebrew/lib/libtesseract.dylib")
  set(LEPTONICA_INCLUDE_DIRS "/opt/homebrew/include")
  set(LEPTONICA_LIBRARIES "/opt/homebrew/lib/libleptonica.dylib")
elseif(UNIX)
  set(TESSERACT_INCLUDE_DIRS "/usr/local/include")
  set(TESSERACT_LIBRARIES "/usr/local/lib/libtesseract.so")
  set(LEPTONICA_INCLUDE_DIRS "/usr/local/include")
  set(LEPTONICA_LIBRARIES "/usr/local/lib/libleptonica.so")
elseif(WIN32)
  find_package(Tesseract REQUIRED CONFIG)
  find_package(Leptonica REQUIRED CONFIG)
endif()

# -----------------------------
# OCR Core Library
# -----------------------------
add_library(ocr_core STATIC src/ocr.cpp)
target_include_directories(ocr_core PUBLIC
  ${CMAKE_CURRENT_SOURCE_DIR}/include
  ${TESSERACT_INCLUDE_DIRS}
  ${LEPTONICA_INCLUDE_DIRS}
)
target_link_libraries(ocr_core PRIVATE
  ${TESSERACT_LIBRARIES}
  ${LEPTONICA_LIBRARIES}
)

# -----------------------------
# CLI Executable
# -----------------------------
add_executable(ocr_cli main.cpp)
target_link_libraries(ocr_cli PRIVATE ocr_core)

# -----------------------------
# Unit Tests
# -----------------------------
if(BUILD_TESTING)
  add_executable(ocr_tests tests/test_main.cpp)
  target_link_libraries(ocr_tests PRIVATE ocr_core GTest::gtest_main)
  include(GoogleTest)
  gtest_discover_tests(ocr_tests)
endif()
