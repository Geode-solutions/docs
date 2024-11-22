# How to compile OpenGeode

## What do you need

### OS

OpenGeode is supported and continuously tested on several platforms:

- Windows - Visual Studio 2019
- Ubuntu 18.04
- RHEL 7 / CentOS 7

Pre-compiled binaries on these platforms are also provided. [This page](/guides/get-opengeode-code.md) describes where to download these binaries.

### Development tools

#### CMake

OpenGeode comes with a CMake configuration file. You can modify three items:

- `CMAKE_BUILD_TYPE`: choose build configuration (Release, Debug). By default Release.
- `OPENGEODE_WITH_TESTS`: switch on/off the OpenGeode test environment.
- `OPENGEODE_WITH_PYTHON`: switch on/off the OpenGeode Python binding (see [this page](/guides/use-opengeode-binding.md) for usage).

Your version of CMake should be at least 3.14.

#### Compiler

On Windows, we recommend using Visual Studio 15 2017. On Linux, you can use gcc/g++ as a compiler. You need a version equal to or higher than 4.8.

#### Git

You need git to clone OpenGeode's dependency repositories during configuration.

## OpenGeode configuration and compilation

The configuration and compilation of OpenGeode are very simple. They can be achieved in a few steps depending on your platform.

### On Windows

#### Configuration

1. Launch CMake interface.
2. Set where is the OpenGeode source code and where to build the binaries as `path/to/OpenGeode/build`.
3. Choose your configuration options. Take care to choose as the current generator `Visual Studio 15 2017`.
4. Launch the configure and generate option.

#### Compilation

1. Click on `Open Project` in the CMake interface. It opens Visual Studio 2017 and the generated solution.
2. Build the solution.

That's all! You are ready to work with OpenGeode.

### On Linux

#### Configuration

1. Open a terminal where is the OpenGeode source code.
2. Create a `build` directory: `mkdir build; cd build`.
3. Run cmake:
   - `cmake ..` for default configuration or
   - `ccmake ..` or
   - `cmake-gui ..` to modify configuration options.

#### Compilation

1. Run `make` command in the build directory.

Now you are ready to work with OpenGeode.
