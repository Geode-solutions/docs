<template>
  <v-layout column>
    <h1 class="display-4 ma-5">
      Supporting file formats
    </h1>
    <format title="IO" :formats="formats_io" />
    <format title="GeosciencesIO" :formats="formats_geosciencesio" />
  </v-layout>
</template>

<script>
import Format from "@/components/Format"

export default {
  components: {
    Format
  },
  data: () => ({
    formats_io: [
      {
        extension: '.msh (v2 and v4 supported)',
        cpp: "<a href='/opengeode?page=class_geode_BRep.html'><code>BRep</code></a>",
        in: true,
        out: true
      },
      {
        extension: '.svg',
        cpp: "<a href='/opengeode?page=class_geode_Section.html'><code>Section</code></a>",
        in: true,
        out: false
      },
      {
        extension: '.stl',
        cpp: "<a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface3D</code></a>",
        in: true,
        out: true
      },
      {
        extension: '.ply',
        cpp: "<a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface3D</code></a>",
        in: true,
        out: true
      },
      {
        extension: '.obj',
        cpp: "<a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface3D</code></a>",
        in: true,
        out: true
      },
      {
        extension: '.vtp (ascii and binary supported)',
        cpp: "<a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface3D</code></a>",
        in: true,
        out: false
      },
      {
        extension: '.vtp (ascii only)',
        cpp: "<a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface3D</code></a><br/><a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface3D</code></a>",
        in: false,
        out: true
      },
      {
        extension: '.vtu (ascii and binary supported)',
        cpp: "<a href='/opengeode?page=class_geode_PolyhedralSolid.html'><code>PolyhedralSolid3D</code></a>",
        in: true,
        out: false
      },
      {
        extension: '.vtu (ascii only)',
        cpp: "<a href='/opengeode?page=class_geode_TetrahedralSolid.html'><code>TetrahedralSolid3D</code></a>",
        in: false,
        out: true
      }
    ],
    formats_geosciencesio: [
      {
        extension: '.lso',
        cpp: "<a href='/opengeode-geosciences?page=class_geode_StructuralModel.html'><code>StructuralModel</code></a>",
        in: true,
        out: false
      },
      {
        extension: '.ml',
        cpp: "<a href='/opengeode-geosciences?page=class_geode_StructuralModel.html'><code>StructuralModel</code></a>",
        in: true,
        out: true
      },
      {
        extension: '.ts',
        cpp: "<a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface3D</code></a>",
        in: true,
        out: false
      }
    ]
  })
}
</script>

