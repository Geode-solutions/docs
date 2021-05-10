<template>
  <v-row>
    <v-col>
      <h1 class="display-4 ma-5">
        How to use OpenGeode Python binding
      </h1>

      <h2 :class="section">
        What do you need
      </h2>

      <h3 :class="subsection">
        Python - pip
      </h3>

      <p :class="paragraph">
        OpenGeode is supported and continuously tested with several Python versions:
      </p>

      <ul :class="paragraph">
        <li>3.6 and 3.7 on Windows - Visual Studio 2017</li>
        <li>3.6, 3.7 and 3.8 on Linux</li>
        <li>3.6, 3.7 and 3.8 on macOS X Catalina (10.15)</li>
      </ul>

      <h2 :class="section">
        Using OpenGeode bindings from PyPI
      </h2>

      <p :class="paragraph">
        The use of OpenGeode bindings very is simple.
      </p>

      <h4 :class="subsubsection">
        Installation
      </h4>

      <p :class="paragraph">
        The bindings are located in <a href="https://pypi.org/project/OpenGeode-core/">PyPI</a> under the name <code>OpenGeode-core</code>.
        Install it using pip: <code>pip install OpenGeode-core</code>.
      </p>

      <h4 :class="subsubsection">
        Execution
      </h4>

      <ol :class="paragraph">
        <li>Open a Python script or a Jupyter notebook.</li>
        <li>Import OpenGeode bindings: <code>import opengeode</code>.</li>
        <li>Use any OpenGeode objects, methods and functions <code>point = opengeode.Point3D([0.1, 42, 54.9])</code></li>
      </ol>

      <p :class="paragraph">
        That's all! You are ready to work with OpenGeode bindings.
      </p>
    </v-col>
  </v-row>
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

