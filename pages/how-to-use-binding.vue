<template>
  <v-layout column>
    <h1 class="display-4 ma-5">
      How to use OpenGeode Python binding
    </h1>

    <h2 :class="section">
      What do you need
    </h2>

    <h3 :class="subsection">
      Python
    </h3>

    <p :class="paragraph">
      OpenGeode is supported and continuously tested with several Python versions:
    </p>

    <ul :class="paragraph">
      <li>3.6 and 3.7 on Windows - Visual Studio 2017</li>
      <li>3.6, 3.7 and 3.8 on Ubuntu 18.04</li>
      <li>2.7 on RHEL 7 / CentOS 7</li>
      <li>3.6, 3.7 and 3.8 on macOS X Catalina (10.15)</li>
    </ul>

    <p :class="paragraph">
      Pre-compiled binaries on these platforms are also provided.
      <a
        href="/where-to-get-code"
      >This page</a> describes where to download these binaries.
    </p>

    <h2 :class="section">
      Using OpenGeode bindings from release packages
    </h2>

    <p :class="paragraph">
      The use of OpenGeode bindings is simple.
      It only need few steps depending on your platform.
    </p>

    <h3 :class="subsection">
      On Windows
    </h3>

    <h4 :class="subsubsection">
      Configuration
    </h4>

    <ol :class="paragraph">
      <li>The bindings are located in the bin directory of the package.</li>
      <li>Add this path to the <code>PYHTONPATH</code> and the <code>PATH</code> environment variables.</li>
    </ol>

    <h4 :class="subsubsection">
      Execution
    </h4>

    <ol :class="paragraph">
      <li>Open a Python script or Jupyter notebook.</li>
      <li>Import OpenGeode bindings, there is one binding for each C++ library. Example for the basic library: 
        <code>import opengeode_py_basic as basic</code>.</li>
      <li>Use any OpenGeode objects, methods and functions <code>point = basic.Point3D([0.1, 42, 54.9])</code></li>
    </ol>

    <p :class="paragraph">
      That's all! You are ready to work with OpenGeode bindings.
    </p>

    <h3 :class="subsection">
      On Linux and macOS
    </h3>

    <h4 :class="subsubsection">
      Configuration
    </h4>

    <ol :class="paragraph">
      <li>The bindings are located in the lib directory of the package.</li>
      <li>Add this path to the <code>PYHTONPATH</code> and the <code>LD_LIBRARY_PATH</code> environment variables.</li>
    </ol>

    <h4 :class="subsubsection">
      Execution
    </h4>

    <ol :class="paragraph">
      <li>Open a Python script or Jupyter notebook.</li>
      <li>Import OpenGeode bindings, there is one binding for each C++ library. Example for the basic library: 
        <code>import opengeode_py_basic as basic</code>.</li>
      <li>Use any OpenGeode objects, methods and functions <code>point = basic.Point3D([0.1, 42, 54.9])</code></li>
    </ol> 
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
