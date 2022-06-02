<template>
  <v-row>
    <v-col>
      <h1 class="display-4 ma-5">
        How to use IO file formats
      </h1>
      <p
        :class="paragraph"
      >
        This page explains how to be able to use OpenGeode file formats in your code.
      </p>

      <h2 :class="section">
        What to do?
      </h2>

      <p :class="paragraph">
        You just have to add in your executable/code depending on your needs:
      </p>

      <!-- eslint-disable -->
    <code>geode::detail::initialize_mesh_io();</code>
    <!-- eslint-enable -->

      <p :class="paragraph">
        and/or
      </p>

      <!-- eslint-disable -->
    <code>geode::detail::initialize_model_io();</code>
    <!-- eslint-enable -->

      <p :class="paragraph">
        These functions are declared in the files
        <a
          href="https://github.com/Geode-solutions/OpenGeode-IO/blob/master/include/geode/io/mesh/detail/common.h"
        >include/geode/io/mesh/detail/common.h</a> and
        <a
          href="https://github.com/Geode-solutions/OpenGeode-IO/blob/master/include/geode/io/model/detail/common.h"
        >include/geode/io/model/detail/common.h</a>.
      </p>
      <p :class="paragraph">
        Do not forget to include the right file in your code.
        You have examples in the OpenGeode-IO
        <a
          href="https://github.com/Geode-solutions/OpenGeode-IO/tree/master/tests"
        >tests</a>.
      </p>

      <h2 :class="section">
        Why I have to do that?
      </h2>

      <p :class="paragraph">
        The reason is quite simple.
        Have a quick look at the file
        <a
          href="https://github.com/Geode-solutions/OpenGeode-IO/blob/master/src/geode/io/mesh/common.cpp"
        >OpenGeode-IO/src/geode/mesh/common.cpp</a>.
      </p>
      <p :class="paragraph">
        In this file you can see that supported file formats for meshes are registered
        when the
        <code>OpenGeode_IO_mesh</code> library is loaded.
        But the I/O code is not directly called in executable (see
        <a
          href="https://github.com/Geode-solutions/OpenGeode-IO/tree/master/tests"
        >tests</a> for examples),
        and as a consequence the
        <code>OpenGeode_IO_mesh</code> library is not loaded.
        This is called the lazy loading of dependencies.
        If you call the function
        <code>detail::initialize_mesh_io()</code>, the library is loaded,
        the file formats are registered and you are able to use
        <a
          href="/formats"
        >our supported file formats</a>.
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    section: 'display-2 ma-5 pa-5',
    paragraph: 'body-1 my-5',
    brep:
      "<a href='/opengeode?page=class_geode_BRep.html'><code>BRep</code></a>"
  })
}
</script>

