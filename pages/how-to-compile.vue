<template>
  <v-layout column>
    <h1 class="display-4 ma-5">
      How to compile OpenGeode
    </h1>

    <h2 :class="section">
      What do you need
    </h2>

    <h3 :class="subsection">
      OS
    </h3>

    <p :class="paragraph">
      OpenGeode is supported and continuously tested on several platforms:
    </p>

    <ul :class="paragraph">
      <li>Windows - Visual Studio 2017</li>
      <li>Ubuntu 18.04</li>
      <li>macOS X Catalina (10.15)</li>
    </ul>

    <p :class="paragraph">
      Pre-compiled binaries on these three platforms are also provided.
      <a
        href="/where-to-get-code"
      >This page</a> describes where to download these binaries.
    </p>

    <h3 :class="subsection">
      CMake
    </h3>

    <p :class="paragraph">
      OpenGeode comes with a CMake configuration file.
      You can modified two items:
    </p>

    <ul :class="paragraph">
      <li>
        <code>CMAKE_BUILD_TYPE</code>: choose build configuration (Release, Debug). By default Release.
      </li>
      <li>
        <code>OPENGEODE_WITH_TESTS</code>: switch on/off the OpenGeode test environment.
      </li>
    </ul>

    <p
      :class="paragraph"
    >
      Your version of CMake should be at least 3.11.
    </p>

    <h3 :class="subsection">
      Compiler
    </h3>

    <p :class="paragraph">
      On Windows, we recommend to use Visual Studio 15 2017. On Linux and macOS, you can use gcc/g++ as compiler. You need a version equal to or higher than 4.8.
      On macOS, you can also install Mac OS "Command Line Developer Tools" and use clang.
    </p>

    <h2 :class="section">
      OpenGeode configuration and compilation
    </h2>

    <p :class="paragraph">
      The configuration and compiling of OpenGeode is very simple.
      This will be achieved in few steps depending on your platform.
    </p>

    <h3 :class="subsection">
      On Windows
    </h3>

    <h4 :class="subsubsection">
      Configuration
    </h4>

    <ol :class="paragraph">
      <li>Launch CMake interface.</li>
      <li>Set where is the OpenGeode source code and where to build the binaries as path/to/OpenGeode/build.</li>
      <li>Choose your configuration options. Take care to choose as current generator `Visual Studio 15 2017`.</li>
      <li>Launch the configure and generate option.</li>
    </ol>

    <h4 :class="subsubsection">
      Compilation
    </h4>

    <ol :class="paragraph">
      <li>Click on `Open Project` in the CMake interface. It opens Visual Studio 2017 and the generated solution.</li>
      <li>Build the solution.</li>
    </ol>

    <p :class="paragraph">
      That's all! You are ready to work with OpenGeode.
    </p>

    <h3 :class="subsection">
      On Linux
    </h3>

    <h4 :class="subsubsection">
      Configuration
    </h4>

    <ol :class="paragraph">
      <li>Open a terminal where is the OpenGeode source code.</li>
      <li>
        Create a `build` directory:
        <code>mkdir build; cd build</code>
      </li>
      <li>
        Run cmake:
        <code>cmake ..</code> for default configuration or
        <code>ccmake ..</code> or
        <code>cmake-gui ..</code> for choosing configuration options.
      </li>
    </ol>

    <h4 :class="subsubsection">
      Compilation
    </h4>

    <ol :class="paragraph">
      <li>Run `make` command in the build directory.</li>
    </ol>

    <p :class="paragraph">
      Now you are ready to work with OpenGeode.
    </p>

    <h3 :class="subsection">
      On macOS
    </h3>

    <h4 :class="subsubsection">
      Configuration
    </h4>

    <ol :class="paragraph">
      <li>Open a terminal where is the OpenGeode source code.</li>
      <li>
        Create a `build` directory:
        <code>mkdir build; cd build</code>
      </li>
      <li>
        Run cmake:
        <code>cmake ..</code> for default configuration or
        <code>ccmake ..</code> or
        <code>cmake-gui ..</code> for choosing configuration options.
      </li>
    </ol>

    <p
      :class="paragraph"
    >
      If you want to use Xcode, we suggest you to use CMake GUI interface to select Xcode as generator (or use cmake options "-G Xcode" command lines).
    </p>

    <h4 :class="subsubsection">
      Compilation without Xcode (Clang in command line)
    </h4>

    <ol :class="paragraph">
      <li>Run `make` command in the build directory.</li>
    </ol>

    <h4 :class="subsubsection">
      Compilation with Xcode
    </h4>

    <ol :class="paragraph">
      <li>Open the project "SuperBuild.xcodeproj" with Xcode: `open SuperBuild.xcodeproj`, and then compile using the graphical interface.</li>
    </ol>

    <p :class="paragraph">
      Or, you can directly compile with the terminal: `xcodebuild -project SuperBuild.xcodeproj -alltargets -configuration Release`.
      Replace "Release" by "Debug" to compile in debug mode.
    </p>

    <p :class="paragraph">
      Now you are ready to work with OpenGeode.
    </p>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    section: 'display-2 ma-5 pa-5',
    subsection: 'display-1 ma-5 pa-5',
    subsubsection: 'title ma-5 pa-5',
    paragraph: 'body-1 my-5',
    brep:
      "<a href='/opengeode?page=class_geode_BRep.html'><code>BRep</code></a>"
  })
}
</script>

<style>
.cpp {
  background-color: #ffffff !important;
}
</style> 
