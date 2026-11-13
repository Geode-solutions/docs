# How to use IO file formats

This page explains how to use OpenGeode file formats in your code.

## What to do?

You just need to add the following lines to your executable or code, depending on your needs:

::: code-group
```cpp [C++]
  geode::OpenGeodeMeshLibrary::initialize();
```
```py [Python]
  opengeode.OpenGeodeMeshLibrary.initialize()
```
:::

and/or

::: code-group
```cpp [C++]
geode::detail::initialize_model_io();
```
```py [Python]
code in python
```
:::

These functions are declared in the files [`include/geode/io/mesh/detail/common.h`](https://github.com/Geode-solutions/OpenGeode-IO/blob/master/include/geode/io/mesh/detail/common.h) and [`include/geode/io/model/detail/common.h.`](https://github.com/Geode-solutions/OpenGeode-IO/blob/master/include/geode/io/model/detail/common.h) Make sure to include the appropriate file in your code. You can find examples in the OpenGeode-IO [`tests`](https://github.com/Geode-solutions/OpenGeode-IO/tree/master/tests).

## Why do I have to do that?

The reason is quite simple. Take a look at the file [`OpenGeode-IO/src/geode/io/mesh/common.cpp`](https://github.com/Geode-solutions/OpenGeode-IO/blob/master/src/geode/io/mesh/common.cpp). 

In this file, you can see that supported file formats for meshes are registered when the `OpenGeode_IO_mesh` library is loaded. However, the I/O code is not directly called in the executable (see [`tests`](https://github.com/Geode-solutions/OpenGeode-IO/tree/master/tests) for examples). As a consequence, the `OpenGeode_IO_mesh` library is not loaded. This is called lazy loading of dependencies. By calling the function `detail::initialize_mesh_io()`, the library is loaded, the file formats are registered, and you can use [`our supported file formats`](/guides/formats.html).

