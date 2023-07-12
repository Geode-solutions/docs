<template>
  <v-row>
    <v-col>
      <h1 class="display-4 ma-5">Native file formats</h1>
      <format title="Using OpenGeode" :formats="formats" native />
      <format title="Using OpenGeode-Geosciences" :formats="formats_geosciences" native />
      <h1 class="display-4 ma-5">Supported file formats</h1>
      <format title="Using OpenGeode-IO" :formats="formats_io" />
      <format title="Using OpenGeode-GeosciencesIO" :formats="formats_geosciencesio" />
    </v-col>
  </v-row>
</template>

<script>
import Format from '@/components/Format'

export default {
  components: {
    Format,
  },
  data: () => ({
    formats: [
      {
        extension: '.og_vts',
        cpp: "<a href='/opengeode?page=class_geode_VertexSet.html'><code>VertexSet</code></a>",
      },
      {
        extension: '.og_grp',
        cpp: "<a href='/opengeode?page=class_geode_Graph.html'><code>Graph</code></a>",
      },
      {
        extension: '.og_pts2d',
        cpp: "<a href='/opengeode?page=class_geode_PointSet.html'><code>PointSet2D</code></a>",
      },
      {
        extension: '.og_pts3d',
        cpp: "<a href='/opengeode?page=class_geode_PointSet.html'><code>PointSet3D</code></a>",
      },
      {
        extension: '.og_edc2d',
        cpp: "<a href='/opengeode?page=class_geode_EdgedCurve.html'><code>EdgedCurve2D</code></a>",
      },
      {
        extension: '.og_edc3d',
        cpp: "<a href='/opengeode?page=class_geode_EdgedCurve.html'><code>EdgedCurve3D</code></a>",
      },
      {
        extension: '.og_tsf2d',
        cpp: "<a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface2D</code></a>",
      },
      {
        extension: '.og_tsf3d',
        cpp: "<a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface3D</code></a>",
      },
      {
        extension: '.og_psf2d',
        cpp: "<a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface2D</code></a>",
      },
      {
        extension: '.og_psf3d',
        cpp: "<a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface3D</code></a>",
      },
      {
        extension: '.og_pso3d',
        cpp: "<a href='/opengeode?page=class_geode_PolyhedralSolid.html'><code>PolyhedralSolid3D</code></a>",
      },
      {
        extension: '.og_tso3d',
        cpp: "<a href='/opengeode?page=class_geode_TetrahedralSolid.html'><code>TetrahedralSolid3D</code></a>",
      },
      {
        extension: '.og_hso3d',
        cpp: "<a href='/opengeode?page=class_geode_HybridSolid.html'><code>HybridSolid3D</code></a>",
      },
      {
        extension: '.og_rgd2d',
        cpp: "<a href='/opengeode?page=class_geode_RegularGrid.html'><code>RegularGrid2D</code></a>",
      },
      {
        extension: '.og_rgd3d',
        cpp: "<a href='/opengeode?page=class_geode_RegularGrid.html'><code>RegularGrid3D</code></a>",
      },
      {
        extension: '.og_pts2d',
        cpp: "<a href='/opengeode?page=class_geode_PointSet.html'><code>PointSet2D</code></a>",
      },
      {
        extension: '.og_sctn',
        cpp: "<a href='/opengeode?page=class_geode_Section.html'><code>Section</code></a>",
      },
      {
        extension: '.og_brep',
        cpp: "<a href='/opengeode?page=class_geode_BRep.html'><code>BRep</code></a>",
      },
    ],
    formats_geosciences: [
      {
        extension: '.og_xsctn',
        cpp: "<a href='/opengeode?page=class_geode_CrossSection.html'><code>CrossSection</code></a>",
      },
      {
        extension: '.og_strm',
        cpp: "<a href='/opengeode?page=class_geode_StructuralModel.html'><code>StructuralModel</code></a>",
      },
      {
        extension: '.og_hst2d',
        cpp: "<a href='/opengeode?page=class_geode_HorizonsStack.html'><code>HorizonsStack2D</code></a>",
      },
      {
        extension: '.og_hst3d',
        cpp: "<a href='/opengeode?page=class_geode_HorizonsStack.html'><code>HorizonsStack3D</code></a>",
      },
      {
        extension: '.og_ixsctn',
        cpp: "<a href='/opengeode?page=class_geode_ImplicitCrossSection.html'><code>ImplicitCrossSection</code></a>",
      },
      {
        extension: '.og_istrm',
        cpp: "<a href='/opengeode?page=class_geode_ImplicitStructuralModel.html'><code>ImplicitStructuralModel</code></a>",
      },
    ],
    formats_io: [
      {
        extension: '.dxf',
        cpp: "<a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface3D</code></a>",
        in: true,
        out: true,
      },
      {
        extension: '.msh (v2 and v4 supported)',
        cpp: "<a href='/opengeode?page=class_geode_BRep.html'><code>BRep</code></a>",
        in: true,
        out: true,
      },
      {
        extension: '.obj',
        cpp: "<a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface3D</code></a>",
        in: true,
        out: true,
      },
      {
        extension: '.obj',
        cpp: "<a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface3D</code></a>",
        in: false,
        out: true,
      },
      {
        extension: '.ply',
        cpp: "<a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface3D</code></a>",
        in: true,
        out: true,
      },
      {
        extension: '.smesh',
        cpp: "<a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface3D</code></a><br/><a href='/opengeode?page=class_geode_EdgedCurve.html'><code>EdgedCurve3D</code></a>",
        in: true,
        out: false,
      },
      {
        extension: '.shp',
        cpp: "<a href='/opengeode?page=class_geode_Section.html'><code>Section</code></a>",
        in: true,
        out: false,
      },
      {
        extension: '.shz',
        cpp: "<a href='/opengeode?page=class_geode_Section.html'><code>Section</code></a>",
        in: true,
        out: false,
      },
      {
        extension: '.stl',
        cpp: "<a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface3D</code></a>",
        in: true,
        out: true,
      },
      {
        extension: '.svg',
        cpp: "<a href='/opengeode?page=class_geode_Section.html'><code>Section</code></a>",
        in: true,
        out: false,
      },
      {
        extension: 'Triangle (.ele, .node, .neigh)',
        cpp: "<a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface2D</code></a>",
        in: true,
        out: true,
      },
      {
        extension: '.vti (ascii only)',
        cpp: "<a href='/opengeode?page=class_geode_RegularGrid.html'><code>RegularGrid2D</code></a><br/><a href='/opengeode?page=class_geode_RegularGrid.html'><code>RegularGrid3D</code></a><br/><a href='/opengeode?page=class_geode_RasterImage.html'><code>RasterImage2D</code></a><br/><a href='/opengeode?page=class_geode_RasterImage.html'><code>RasterImage3D</code></a>",
        in: false,
        out: true,
      },
      {
        extension: '.vtp (ascii, binary and encoded appendedData supported)',
        cpp: "<a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface3D</code></a><br/><a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface2D</code></a>",
        in: true,
        out: false,
      },
      {
        extension: '.vtp (ascii only)',
        cpp: "<a href='/opengeode?page=class_geode_PointSet.html'><code>PointSet3D</code></a><br/><a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface3D</code></a><br/><a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface3D</code></a><br/><a href='/opengeode?page=class_geode_EdgedCurve.html'><code>EdgedCurve3D</code></a><br/><a href='/opengeode?page=class_geode_PointSet.html'><code>PointSet2D</code></a><br/><a href='/opengeode?page=class_geode_PolygonalSurface.html'><code>PolygonalSurface2D</code></a><br/><a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface2D</code></a><br/><a href='/opengeode?page=class_geode_EdgedCurve.html'><code>EdgedCurve2D</code></a>",
        in: false,
        out: true,
      },
      {
        extension: '.vtu (ascii, binary and encoded appendedData supported)',
        cpp: "<a href='/opengeode?page=class_geode_PolyhedralSolid.html'><code>PolyhedralSolid3D</code></a><br/><a href='/opengeode?page=class_geode_TetrahedralSolid.html'><code>TetrahedralSolid3D</code></a>",
        in: true,
        out: false,
      },
      {
        extension: '.vtu (ascii only)',
        cpp: "<a href='/opengeode?page=class_geode_PolyhedralSolid.html'><code>PolyhedralSolid3D</code></a><br/><a href='/opengeode?page=class_geode_TetrahedralSolid.html'><code>TetrahedralSolid3D</code></a><br/><a href='/opengeode?page=class_geode_HybridSolid.html'><code>HybridSolid3D</code></a>",
        in: false,
        out: true,
      },
      {
        extension: '.vtm',
        cpp: "<a href='/opengeode?page=class_geode_Section.html'><code>Section</code></a><br/><a href='/opengeode?page=class_geode_BRep.html'><code>BRep</code></a>",
        in: false,
        out: true,
      },
      {
        extension: '.jpg',
        cpp: "<a href='/opengeode?page=class_geode_RasterImage.html'><code>RasterImage2D</code></a>",
        in: true,
        out: false,
      },
      {
        extension: '.png',
        cpp: "<a href='/opengeode?page=class_geode_RasterImage.html'><code>RasterImage2D</code></a>",
        in: true,
        out: false,
      },
    ],
    formats_geosciencesio: [
      {
        extension: '.lso',
        cpp: "<a href='/opengeode-geosciences?page=class_geode_StructuralModel.html'><code>StructuralModel</code></a>",
        in: true,
        out: true,
      },
      {
        extension: '.ml',
        cpp: "<a href='/opengeode-geosciences?page=class_geode_StructuralModel.html'><code>StructuralModel</code></a>",
        in: true,
        out: true,
      },
      {
        extension: '.ml',
        cpp: "<a href='/opengeode-geosciences?page=class_geode_BRep.html'><code>BRep</code></a>",
        in: false,
        out: true,
      },
      {
        extension: '.pl',
        cpp: "<a href='/opengeode?page=class_geode_EdgedCurve.html'><code>EdgedCurve3D</code></a>",
        in: false,
        out: true,
      },
      {
        extension: '.ts',
        cpp: "<a href='/opengeode?page=class_geode_TriangulatedSurface.html'><code>TriangulatedSurface3D</code></a>",
        in: true,
        out: false,
      },
      {
        extension: '.wl',
        cpp: "<a href='/opengeode?page=class_geode_EdgedCurve.html'><code>EdgedCurve3D</code></a>",
        in: true,
        out: false,
      },
      {
        extension: '.vo',
        cpp: "<a href='/opengeode?page=class_geode_RegularGrid.html'><code>RegularGrid3D</code></a>",
        in: true,
        out: false,
      },
      {
        extension: '.dev',
        cpp: "<a href='/opengeode?page=class_geode_EdgedCurve.html'><code>EdgedCurve3D</code></a>",
        in: true,
        out: false,
      },
      {
        extension: '.txt',
        cpp: "<a href='/opengeode?page=class_geode_EdgedCurve.html'><code>EdgedCurve3D</code></a>",
        in: true,
        out: false,
      },
      {
        extension: '.dat',
        cpp: "<a href='/opengeode?page=class_geode_EdgedCurve.html'><code>EdgedCurve3D</code></a>",
        in: true,
        out: false,
      },
    ],
  }),
}
</script>

