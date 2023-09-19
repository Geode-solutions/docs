# How to create your own OpenGeode module

This page explains how you can create a module that depends on OpenGeode, to develop your own features. The procedure is very simple, and you can quickly get to work with the tools that we provide.

## What do you need

The only thing you need is OpenGeode. Make sure OpenGeode is compiled and installed.

## First step - Create an OpenGeode module architecture

The first step is to create your module architecture. We help you by providing a template for module architecture.

1. Go to our GitHub template repository for OpenGeode modules: [https://github.com/Geode-solutions/OpenGeode-ModuleTemplate](https://github.com/Geode-solutions/OpenGeode-ModuleTemplate).
2. Click on **Use this template**. It will allow you to create a repository from this template repository. Choose all the options you want, including ownership, repo name, public or private access.
3. Finalize by clicking on **Create repository from template**.

You have created a repository. You can now clone it and proceed to the second step.

## Second step - Replace templated names with your own

Take a quick look at your new repository. There are three folders: one for the headers of your libraries, one for the sources, and the last for tests. There are also a few files. If you need information on these files, you can go to the last section "What are these files in the module repository." For now, open CMakeLists.txt in your favorite text editor or IDE.

1. Define the name of your module in place of `MyModule` in `project(MyModule CXX)`.
2. Change the name of the option `MYMODULE_WITH_TESTS`, or remove this option if you do not want to make tests for your module (which is not a good idea!). Be careful; this option appears twice in the file.
3. Define the libraries in your module by adding one call to `add_geode_library` per library. Here are the basic parameters (for advanced parameters, see examples in the OpenGeode code):
   - `NAME` the name of the library
   - `FOLDER` the folder hierarchy where your files are located from MyModule/include and MyModule/src
   - `PUBLIC_HEADERS` the list of header files
   - `SOURCES` the list of source files
   - `PUBLIC_DEPENDENCIES` the list of CMake target public dependencies; they will be inherited when depending on your library
   - `PRIVATE_DEPENDENCIES` the list of CMake target private dependencies

If you want to compile the tests and enable the `MYMODULE_WITH_TESTS` option, you can add tests for each library. Here's an example with `mylib`:

1. Open tests/CMakeLists.txt and ensure there is the call `add_subdirectory(mylib)`.
2. Open tests/mylib/CMakeLists.txt and use one call `add_geode_test` per test. Here are the parameters:
   - `SOURCE` the test file (path relative to tests/mylib)
   - `DEPENDENCIES` the list of CMake target dependencies

Your CMakeLists.txt is now ready.

## Last step - Configure and build your module

As for OpenGeode [configuration and compilation](/guides/compile-opengeode), this step depends on your platform. Follow [this page](/guides/compile-opengeode-module) to learn how to configure and compile your own module.

Follow the same procedure as for OpenGeode but by specifying the `CMAKE_PREFIX_PATH` to the OpenGeode install path. For example:

`cmake -DCMAKE_PREFIX_PATH=path/to/OpenGeode/build/opengeode/install ..`


The last thing to do is to modify headers (.h) and source (.cpp) files by replacing `mylib` with the name you choose for your libraries and `mymodule` with the name of your module.

Don't forget to also do it for the tests directory if you enabled the `MYMODULE_WITH_TESTS` option!

The rest is up to you!

## Additional info - What are these files in the module repository

Template repository contains some files. Here is information on these files:

- **LICENSE** - In this file, you specify the License of your module.
- **README.md** - This file is used as an overview of your GitHub project. Add any information you consider necessary.
- **.clang-format** - Format rules file used by clang. Run it by your own or automate formatting using this file and CI tools.
- **.gitattributes** - List of attributes on files and folders (e.g., ignored by GitHub for repository languages).
- **.gitignore** - List of files and folders ignored by Git.
- **.releaserc** - Configuration file for semantic-release. Have a look at [https://github.com/semantic-release/semantic-release](https://github.com/semantic-release/semantic-release); it's great!
- **.github/workflows/{CI.yml,CD.yml}** - Configuration files for GitHub Actions ([https://github.com/features/actions](https://github.com/features/actions)) for code formatting, code testing, release generation and upload, ... Be aware that the variables used in these files are configured for `OpenGeode-ModuleTemplate` repository. They have to be modified depending on your project and your needs.
