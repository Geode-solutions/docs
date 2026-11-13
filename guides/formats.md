# Native file formats

## Using OpenGeode


| File format | OpenGeode object          |
| ----------- | ------------------------- |
| .og_vts     | `VertexSet`             |
| .og_grp     | `Graph`                 |
| .og_pts2d   | `PointSet2D`            |
| .og_pts3d   | `PointSet3D`            |
| .og_edc2d   | `EdgedCurve2D`          |
| .og_edc3d   | `EdgedCurve3D`          |
| .og_tsf2d   | `TriangulatedSurface2D` |
| .og_tsf3d   | `TriangulatedSurface3D` |
| .og_psf2d   | `PolygonalSurface2D`    |
| .og_psf3d   | `PolygonalSurface3D`    |
| .og_pso3d   | `PolyhedralSolid3D`     |
| .og_tso3d   | `TetrahedralSolid3D`    |
| .og_hso3d   | `HybridSolid3D`         |
| .og_lrgd2d   | `LightRegularGrid2D`         |
| .og_lrgd3d   | `LightRegularGrid3D`         |
| .og_rgd2d   | `RegularGrid2D`         |
| .og_rgd3d   | `RegularGrid3D`         |
| .og_pts2d   | `PointSet2D`            |
| .og_sctn    | `Section`               |
| .og_brep    | `BRep`                 |

## Using OpenGeode-Geosciences

| File format | OpenGeode object            |
| ----------- | --------------------------- |
| .og_strm    | `StructuralModel`         |
| .og_xsctn   | `CrossSection`            |
| .og_hst2d   | `HorizonsStack2D`         |
| .og_hst3d   | `HorizonsStack3D`         |
| .og_istrm   | `ImplicitStructuralModel` |
| .og_ixsctn  | `ImplicitCrossSection`    |
| .og_stgm    | `StratigraphicModel`      |
| .og_stgs    | `StratigraphicSection`    |

# Supported file formats

## Using OpenGeode-IO

| File format | OpenGeode object | Input | Output | Notes |
| ----------- | ---------------- | ----- | ------ | ----- |
| .bmp | `RasterImage2D` | ✓ | | |
| .csv | `PointSet3D` | ✓ | | requires a .json settings file with the same name (keys: firstRow, headerRow, separator, xColumn, yColumn, zColumn), other columns are read as attributes |
| .dot | `PolygonalSurface2D` `PolygonalSurface3D` `TriangulatedSurface2D` `TriangulatedSurface3D` | | ✓ | Graphviz graph of the mesh edges |
| .dxf | `PolygonalSurface3D` | ✓ | | |
| .gexf | `Graph` | | ✓ | |
| .gid_msh | `BRep` | | ✓ | GiD mesh, requires triangulated surfaces and tetrahedral blocks, both with a material_number attribute |
| .jpg | `RasterImage2D` | ✓ | | |
| .msh | `BRep` | ✓ | ✓ | Gmsh ASCII format, v2 and v4 for input (partitioned entities are loaded into their parent entities), v4.1 for output, output requires triangulated surfaces and tetrahedral blocks |
| .obj | `PolygonalSurface3D` | ✓ | ✓ | |
| .obj | `TriangulatedSurface3D` | | ✓ | |
| .ply | `PolygonalSurface3D` | ✓ | ✓ | |
| .png | `RasterImage2D` | ✓ | | |
| .pnt | `PointSet3D` | ✓ | | Map3D polylines, each point is a vertex with polyline and flag attributes, plus colour and mtype attributes when the file gives them |
| .pvd | `BRep` time series | ✓ | | ParaView collection, the attributes of each time step are read onto an existing BRep |
| .smesh | `TriangulatedSurface3D` `EdgedCurve3D` | ✓ | | |
| .stl | `TriangulatedSurface3D` | ✓ | ✓ | |
| .svg | `Section` | ✓ | | |
| .tif, .tiff | `RasterImage2D` | ✓ | | |
| .triangle | `TriangulatedSurface2D` | | ✓ | output three files named: .node, .ele, .neigh |
| .vti | `LightRegularGrid2D` `LightRegularGrid3D` `RegularGrid2D` `RegularGrid3D` | ✓ | | ascii, binary and appended data (raw or base64) supported, with optional zlib compression |
| .vti | `LightRegularGrid2D` `LightRegularGrid3D` `RegularGrid2D` `RegularGrid3D` `RasterImage2D` `RasterImage3D` | | ✓ | raw binary appended data |
| .vtm | `Section` `BRep` | | ✓ | raw binary appended data |
| .vtp | `PolygonalSurface3D` | ✓ | | ascii, binary and appended data (raw or base64) supported, with optional zlib compression |
| .vtp | `PointSet2D` `PointSet3D` `EdgedCurve2D` `EdgedCurve3D` `PolygonalSurface2D` `PolygonalSurface3D` `TriangulatedSurface2D` `TriangulatedSurface3D` | | ✓ | raw binary appended data |
| .vtu | `PolygonalSurface3D` `TriangulatedSurface3D` `PolyhedralSolid3D` `TetrahedralSolid3D` `HybridSolid3D` | ✓ | | ascii, binary and appended data (raw or base64) supported, with optional zlib compression |
| .vtu | `PolyhedralSolid3D` `TetrahedralSolid3D` `HybridSolid3D` | | ✓ | raw binary appended data |

## Using OpenGeode-GeosciencesIO

| File format | OpenGeode object | Input | Output | Notes |
| ----------- | ---------------- | ----- | ------ | ----- |
| .dat | `EdgedCurve3D` | ✓ | | well path given as X Y Z coordinates |
| .dem | `PolygonalSurface3D` | ✓ | | USGS DEM elevation grid |
| .dev | `EdgedCurve3D` | ✓ | | Petrel well trace |
| .fem | `TetrahedralSolid3D` `BRep` | | ✓ | FEFLOW format, BRep output requires tetrahedral blocks |
| .grdecl | `HybridSolid3D` | ✓ | | Eclipse corner-point grid |
| .json | `LightRegularGrid3D` | ✓ | | grid cells given as a grid_df array of records (x, y, z and attribute values) |
| .lso | `StructuralModel` | ✓ | ✓ | output requires triangulated surfaces and tetrahedral blocks |
| .ml | `StructuralModel` | ✓ | ✓ | output requires triangulated surfaces |
| .ml | `BRep` | | ✓ | requires triangulated surfaces |
| .omf | `PointSet3D` `EdgedCurve3D` `TriangulatedSurface3D` `PolygonalSurface3D` `LightRegularGrid3D` | ✓ | | Open Mining Format v1 |
| .pl | `EdgedCurve3D` | ✓ | ✓ | |
| .shp, .shz | `Section` | ✓ | | |
| .tif, .tiff | `PolygonalSurface3D` | ✓ | | elevation raster |
| .tif, .tiff | `LightRegularGrid2D` | ✓ | | GeoTIFF, each data band is read as an attribute |
| .ts | `TriangulatedSurface3D` | ✓ | ✓ | |
| .txt | `EdgedCurve3D` | ✓ | | well path given as X Y Z coordinates |
| .vo | `RegularGrid3D` | ✓ | | |
| .vs | `PointSet3D` | ✓ | ✓ | |
| .wl | `EdgedCurve3D` | ✓ | | |
| .xml | `HorizonsStack2D` `HorizonsStack3D` | ✓ | | SKUA stratigraphic column |
