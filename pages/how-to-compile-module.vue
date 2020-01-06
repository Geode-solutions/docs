<template>
  <v-layout column>
    <h1 class="display-4 ma-5">
      How to configure and compile an OpenGeode module
    </h1>

    <p :class="paragraph">
      This page explains how to configure and compile a module that depends on OpenGeode,
      either it is an provided module (for instance OpenGeode-Geosciences) or
      <a
        href="/how-to-create-module"
      >your own module</a>
      As for
      <a href="/how-to-compile">OpenGeode configuration and compilation</a>,
      the procedure is very simple.
    </p>

    <h2 :class="section">
      What do you need
    </h2>

    <p :class="paragraph">
      You need exactly the same tools than for compiling OpenGeode (given
      <a
        href="/how-to-compile"
      >here</a>).
      You also need to have compiled or installed OpenGeode.
    </p>

    <h2 :class="section">
      Module configuration
    </h2>

    <p :class="paragraph">
      As for OpenGeode configuration, this step depends on your platform.
      Follow the same
      <a
        href="/how-to-compile"
      >procedure</a> than for OpenGeode but
      by specifying the
      <code>CMAKE_PREFIX_PATH</code> to OpenGeode install path.
    </p>

    <p :class="paragraph">
      For example:
    </p>
    <code>cmake -DCMAKE_PREFIX_PATH=path/to/OpenGeode/build/opengeode/install ..</code>

    <p :class="paragraph">
      If the module depends on several modules (for instance OpenGeode-GeosciencesIO
      that depends on OpenGeode and OpenGeode-Geosciences), do the following:
    </p>
    <code>cmake -DCMAKE_PREFIX_PATH="where/is/install/OpenGeode;where/is/install/OpenGeode-Geosciences" ..</code>
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