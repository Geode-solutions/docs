<script setup>
import CodeExample from '/components/CodeExample.vue'
</script>

# Native file formats

## Using OpenGeode

<!-- @include: ./links.md -->

| File format | OpenGeode object          |
| ----------- | ------------------------- |
| .og_vts     | [`VertexSet`]             |
| .og_grp     | [`Graph`]                 |
| .og_pts2d   | [`PointSet2D`]            |
| .og_pts3d   | [`PointSet3D`]            |
| .og_edc2d   | [`EdgedCurve2D`]          |
| .og_edc3d   | [`EdgedCurve3D`]          |
| .og_tsf2d   | [`TriangulatedSurface2D`] |
| .og_tsf3d   | [`TriangulatedSurface3D`] |
| .og_psf2d   | [`PolygonalSurface2D`]    |
| .og_psf3d   | [`PolygonalSurface3D`]    |
| .og_pso3d   | [`PolyhedralSolid3D`]     |
| .og_tso3d   | [`TetrahedralSolid3D`]    |
| .og_hso3d   | [`HybridSolid3D`]         |
| .og_rgd2d   | [`RegularGrid2D`]         |
| .og_rgd3d   | [`RegularGrid3D`]         |
| .og_pts2d   | [`PointSet2D`]            |
| .og_sctn    | [`Section`]               |
| .og_brep    | [`BRep` ]                 |

## Using OpenGeode-Geosciences

| File format | OpenGeode object            |
| ----------- | --------------------------- |
| .og_strm    | [`StructuralModel`]         |
| .og_xsctn   | [`CrossSection`]            |
| .og_hst2d   | [`HorizonsStack2D`]         |
| .og_hst3d   | [`HorizonsStack3D`]         |
| .og_istrm   | [`ImplicitStructuralModel`] |
| .og_ixsctn  | [`ImplicitCrossSection`]    |
| .og_stgm    | [`StratigraphicModel`]      |
| .og_stgs    | [`StratigraphicSection`]    |

# Supported file formats

## Using OpenGeode-IO

| File format | OpenGeode object                                                                                                                                                  | Input | Output | Notes                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| .dxf        | [`PolygonalSurface3D`]                                                                                                                                            | ✓     | ✓      |                                                                                                                     |
| .msh        | [`BRep`]                                                                                                                                                          | ✓     | ✓      | v2 and v4 for input, v4 only for output, requires triangulated surfaces and tetrahedral blocks (if they are meshed) |
| .obj        | [`PolygonalSurface3D`]                                                                                                                                            | ✓     | ✓      |                                                                                                                     |
| .obj        | [`TriangulatedSurface3D`]                                                                                                                                         |       | ✓      |                                                                                                                     |
| .obj        | [`PolygonalSurface3D`]                                                                                                                                            | ✓     | ✓      |                                                                                                                     |
| .smesh      | [`TriangulatedSurface3D`] [`EdgedCurve3D`]                                                                                                                        | ✓     |        |                                                                                                                     |
| .shp        | [`Section`]                                                                                                                                                       | ✓     |        |                                                                                                                     |
| .shz        | [`Section`]                                                                                                                                                       | ✓     |        |                                                                                                                     |
| .stl        | [`TriangulatedSurface3D`]                                                                                                                                         | ✓     | ✓      |                                                                                                                     |
| .svg        | [`Section`]                                                                                                                                                       | ✓     |        |                                                                                                                     |
| .triangle   | [`TriangulatedSurface2D`]                                                                                                                                         | ✓     | ✓      | output three files named: .ele, .node, .neigh                                                                       |
| .vti        | [`RegularGrid3D`] [`RegularGrid2D`]                                                                                                                               | ✓     |        | ascii, binary and encoded appendedData supported                                                                    |
| .vti        | [`RegularGrid2D`] [`RegularGrid3D`] [`RasterImage2D`] [`RasterImage3D`]                                                                                           |       | ✓      | ascii only supported                                                                                                |
| .vtp        | [`PolygonalSurface3D`] [`PolygonalSurface2D`]                                                                                                                     | ✓     |        | ascii, binary and encoded appendedData supported                                                                    |
| .vtp        | [`PointSet3D`] [`PolygonalSurface3D`] [`TriangulatedSurface3D`] [`EdgedCurve3D`] [`PointSet2D`] [`PolygonalSurface2D`] [`TriangulatedSurface2D`] [`EdgedCurve2D`] |       | ✓      | ascii only supported                                                                                                |
| .vtu        | [`PolyhedralSolid3D`] [`TetrahedralSolid3D`]                                                                                                                      | ✓     |        | ascii, binary and encoded appendedData supported                                                                    |
| .vtu        | [`PolyhedralSolid3D`] [`TetrahedralSolid3D`] [`HybridSolid3D`]                                                                                                    |       | ✓      | ascii only supported                                                                                                |
| .vtm        | [`Section`] [`BRep`]                                                                                                                                              |       | ✓      |                                                                                                                     |
| .jpg        | [`RasterImage2D`]                                                                                                                                                 | ✓     |        |                                                                                                                     |
| .png        | [`RasterImage2D`]                                                                                                                                                 | ✓     |        |                                                                                                                     |

## Using OpenGeode-GeosciencesIO

| File format | OpenGeode object          | Input | Output | Notes                          |
| ----------- | ------------------------- | ----- | ------ | ------------------------------ |
| .lso        | [`StructuralModel`]       | ✓     | ✓      | requires tetrahedral blocks    |
| .ml         | [`StructuralModel`]       | ✓     | ✓      | requires triangulated surfaces |
| .ml         | [`BRep`]                  |       | ✓      | requires triangulated surfaces |
| .pl         | [`EdgedCurve3D`]          |       | ✓      |                                |
| .ts         | [`TriangulatedSurface3D`] | ✓     | ✓      |                                |
| .wl         | [`EdgedCurve3D`]          | ✓     | ✓      |                                |
| .vo         | [`RegularGrid3D`]         | ✓     |        |                                |
| .dev        | [`EdgedCurve3D`]          | ✓     |        |                                |
| .txt        | [`EdgedCurve3D`]          | ✓     |        |                                |
| .dat        | [`EdgedCurve3D`]          | ✓     |        |                                |
