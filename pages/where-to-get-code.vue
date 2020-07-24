<template>
  <v-layout column>
    <h1 class="display-4 ma-5">
      Where to download OpenGeode code
    </h1>

    <h2 :class="section">
      Download pre-compiled binaries
    </h2>

    <p :class="paragraph">
      We provide pre-compiled binaries for OpenGeode.
      They are automatically generated for each OpenGeode release and can be
      downloaded following
      <a
        href="https://github.com/Geode-solutions/OpenGeode/releases"
      >this link</a>:
    </p>

    <ul :class="paragraph">
      <li>
        <strong>OpenGeode-X.Y.Z-darwin.tar.gz</strong> corresponds to the package generated on macOS Catalina (10.15) for OpenGeode X.Y.Z. release;
      </li>
      <li>
        <strong>OpenGeode-X.Y.Z-rhel.tar.gz</strong> corresponds to the package generated on CentOS 7 for OpenGeode X.Y.Z. release;
      </li>
      <li>
        <strong>OpenGeode-X.Y.Z-ubuntu.tar.gz</strong> corresponds to the package generated on Ubuntu 18.04 for OpenGeode X.Y.Z. release;
      </li>
      <li>
        <strong>OpenGeode-X.Y.Z-win64.zip</strong> corresponds to the package generated on Windows Visual Studio 15 2017 for OpenGeode X.Y.Z. release.
      </li>
    </ul>

    <p :class="paragraph">
      Select the one that fits your platform and needs.
      You can now use these pre-compiled binaries for your own projects.
    </p>

    <h2 :class="section">
      Download source code
    </h2>

    <p :class="paragraph">
      On the release page, you can also download source code archives.
      Extract the archive, and then compile the source code. Let be guided
      <a href="/how-to-compile">here</a>.
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