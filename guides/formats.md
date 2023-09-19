
<script setup>
import CodeExample from '/components/CodeExample.vue'
</script>


# Native file formats
Using OpenGeode

<!-- @include: ./links.md -->


| File format | OpenGeode object |
|---|---|
| .og_vts | [`VertexSet`] |
| .og_grp | [`Graph`] | 
| .og_pts2d | [`PointSet2D`] |
| .og_pts3d | [`PointSet3D`] |
| .og_edc2d | [`EdgedCurve2D`] | 
| .og_edc3d | [`EdgedCurve3D`] |
| .og_tsf2d | [`TriangulatedSurface2D`] |
| .og_tsf3d | [`TriangulatedSurface3D`] | 
| .og_psf2d | [`PolygonalSurface2D`] |
| .og_psf3d | [`PolygonalSurface3D`] |
| .og_pso3d | [`PolyhedralSolid3D`] | 
| .og_tso3d | [`TetrahedralSolid3D`] |
| .og_hso3d | [`HybridSolid3D`] |
| .og_rgd2d | [`RegularGrid2D`] | 
| .og_rgd3d | [`RegularGrid3D`] |
| .og_pts2d | [`PointSet2D`] |
| .og_sctn  | [`Section`] |
| .og_brep  | [`BRep` ]|


## Using OpenGeode-Geosciences

| File format | OpenGeode object | Input | Output |
|---|---|---|---|
| .dxf | [`PolygonalSurface3D`] | ✓ | ✓ |
| .msh (v2 and v4 supported) | [`BRep`] | ✓ | ✓ |
| .obj | [`PolygonalSurface3D`] | ✓ | ✓ |
| .obj | [`TriangulatedSurface3D`] |  | ✓ |
| .obj | [`PolygonalSurface3D`] | ✓ | ✓ |
| .smesh | [`TriangulatedSurface3D`] [`EdgedCurve3D`] | ✓ |  |
| .shp | [`Section`] | ✓ |  |
| .shz | [`Section`] | ✓ |  |
| .stl | [`TriangulatedSurface3D`] | ✓ | ✓ |
| .svg | [`Section`] | ✓ |  |
| Triangle (.ele, .node, .neigh) | [`TriangulatedSurface2D`] | ✓ | ✓ |
| .vti (ascii, binary and encoded appendedData supported)| [`RegularGrid3D`] [`RegularGrid2D`] | ✓ |  |
| .vti (ascii only) | [`RegularGrid2D`] [`RegularGrid3D`] [`RasterImage2D`] [`RasterImage3D`] |  | ✓ |
| .vtp (ascii, binary and encoded appendedData supported) | [`PolygonalSurface3D`] [`PolygonalSurface2D`] | ✓ |  |
| .vtp (ascii only) | [`PointSet3D`] [`PolygonalSurface3D`] [`TriangulatedSurface3D`] [`EdgedCurve3D`] [`PointSet2D`] [`PolygonalSurface2D`] [`TriangulatedSurface2D`] [`EdgedCurve2D`] |  | ✓ |
| .vtu (ascii, binary and encoded appendedData supported) | [`PolyhedralSolid3D`] [`TetrahedralSolid3D`] | ✓ |  |
| .vtu (ascii only) | [`PolyhedralSolid3D`] [`TetrahedralSolid3D`] [`HybridSolid3D`] |  | ✓ |
| .vtm | [`Section`] [`BRep`] |  | ✓ |
| .jpg | [`RasterImage2D`] | ✓ |  |
| .png | [`RasterImage2D`] | ✓ |  |

## Using OpenGeode-GeosciencesIO


| File format | OpenGeode object | Input | Output |
|---|---|---|---|
| .lso | [`StructuralModel`] | ✓ | ✓ |
| .ml (v2 and v4 supported) | [`StructuralModel`] | ✓ | ✓ |
| .ml | [`BRep`] |  | ✓ |
| .pl | [`EdgedCurve3D`] |  | ✓ |
| .ts | [`TriangulatedSurface3D`] | ✓ | ✓ |
| .wl | [`EdgedCurve3D`] | ✓ | ✓ |
| .vo | [`RegularGrid3D`] | ✓ |  |
| .dev | [`EdgedCurve3D`] | ✓ |  |
| .txt | [`EdgedCurve3D`] | ✓ |  |
| .dat | [`EdgedCurve3D`] | ✓ |  |