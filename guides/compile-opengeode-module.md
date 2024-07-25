# How to configure and compile an OpenGeode module

This page explains how to configure and compile a module that depends on OpenGeode, whether it is a provided module (for instance OpenGeode-Geosciences) or [your own module](/guides/create-opengeode-module.md). As for [OpenGeode configuration and compilation](/guides/create-opengeode-module.md), the procedure is very simple.

## What do you need

You need exactly the same tools as for compiling OpenGeode (given [here](/guides/compile-opengeode.md)). You also need to have compiled or installed OpenGeode.

## Module configuration

As for OpenGeode configuration, this step depends on your platform. Follow the same [procedure](/guides/compile-opengeode.md) as for OpenGeode but by specifying the `CMAKE_PREFIX_PATH` to the OpenGeode install path.

For example:

`cmake -DCMAKE_PREFIX_PATH=path/to/OpenGeode/build ..`


If the module depends on several modules (for instance OpenGeode-GeosciencesIO that depends on OpenGeode and OpenGeode-Geosciences), do the following:

`cmake -DCMAKE_PREFIX_PATH="where/is/OpenGeode/build;where/is/install/OpenGeode-Geosciences" ..`
