<template>
  <v-layout column>
    <h1 class="display-4 ma-5">Supporting file formats</h1>

    <h2 :class="section">IO</h2>

    <v-simple-table class="body-1">
      <template v-slot:default>
        <thead>
          <tr>
            <th>File format</th>
            <th>OpenGeode object</th>
            <th>Input</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="format in formats_io" :key="format.name">
            <td>{{ format.extension }}</td>
            <td>{{ format.cpp }}</td>
            <td>
              <v-icon color="primary" v-if="format.in">fas fa-check</v-icon>
            </td>
            <td>
              <v-icon color="primary" v-if="format.out">fas fa-check</v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <h2 :class="section">GeosciencesIO</h2>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">File format</th>
            <th class="text-left">OpenGeode object</th>
            <th class="text-left">Input</th>
            <th class="text-left">Output</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="format in formats_geosciencesio" :key="format.name">
            <td>{{ format.extension }}</td>
            <td>{{ format.cpp }}</td>
            <td>
              <v-icon color="primary" v-if="format.in">fas fa-check</v-icon>
            </td>
            <td>
              <v-icon color="primary" v-if="format.out">fas fa-check</v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    formats_io: [
      {
        extension: '.msh',
        cpp: 'BRep',
        in: true,
        out: false
      },
      {
        extension: '.stl',
        cpp: 'TriangulatedSurface3D',
        in: true,
        out: true
      },
      {
        extension: '.ply',
        cpp: 'PolygonalSurface3D',
        in: true,
        out: true
      },
      {
        extension: '.obj',
        cpp: 'PolygonalSurface3D',
        in: true,
        out: true
      }
    ],
    formats_geosciencesio: [
      {
        extension: '.ml',
        cpp: 'StructuralModel',
        in: true,
        out: false
      },
      {
        extension: '.ts',
        cpp: 'TriangulatedSurface3D',
        in: true,
        out: false
      }
    ],
    section: 'display-2 ma-5 pa-5',
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