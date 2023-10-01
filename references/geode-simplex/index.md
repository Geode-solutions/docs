# namespace geode



## Namespaces

* [detail](detail/index.md)


## Records

* [BRepElementsAfterOperation](BRepElementsAfterOperation.md)
* [BRepMetricConstraints](BRepMetricConstraints.md)
* [GeometricSurfacePath](GeometricSurfacePath.md)
* [PolygonEdge](PolygonEdge.md)
* [RemeshingData](RemeshingData.md)
* [SamplingData](SamplingData.md)
* [SectionMetricConstraints](SectionMetricConstraints.md)
* [SimplexBRepLibrary](SimplexBRepLibrary.md)
* [SimplexCoreLibrary](SimplexCoreLibrary.md)
* [SimplexCornerLibrary](SimplexCornerLibrary.md)
* [SimplexLine2dLibrary](SimplexLine2dLibrary.md)
* [SimplexLine3dLibrary](SimplexLine3dLibrary.md)
* [SimplexLineCommonLibrary](SimplexLineCommonLibrary.md)
* [SimplexMetricLibrary](SimplexMetricLibrary.md)
* [SimplexSectionLibrary](SimplexSectionLibrary.md)
* [SimplexSolidLibrary](SimplexSolidLibrary.md)
* [SimplexSurface2dLibrary](SimplexSurface2dLibrary.md)
* [SimplexSurface3dLibrary](SimplexSurface3dLibrary.md)
* [SimplexSurfaceCommonLibrary](SimplexSurfaceCommonLibrary.md)
* [SurfaceRelaxerOptions](SurfaceRelaxerOptions.md)
* [uuid](uuid.md)


## Functions

### remesh_lines

```cpp
void remesh_lines(BRepRemeshingData & data)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/line/3d/remesh.cpp#11
```

### remesh_lines

```cpp
void remesh_lines(BRepRemeshingData & data, Span lines_to_remesh)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/line/3d/remesh.cpp#16
```

### simplex_remesh

```cpp
tuple simplex_remesh(BRep & brep, const Metric3D & metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/brep/remesh.cpp#63
```

### new_simplex_remesh

```cpp
void new_simplex_remesh(BRep & brep, const Metric3D & metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/brep/remesh.cpp#69
```

### sample_corners

```cpp
void sample_corners(BRepSamplingData & data)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/corner/sample.cpp#37
```

### relax_lines

```cpp
void relax_lines(const BRep & brep, BRepGeometricModifier & modifier, const Metric3D & metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/line/3d/relax.cpp#15
```

### relax_lines

```cpp
void relax_lines(const BRep & brep, BRepGeometricModifier & modifier, const Metric3D & metric, absl::Span<const uuid> lines_to_relax)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/line/3d/relax.cpp#28
```

### sample_lines

```cpp
flat_hash_map sample_lines(BRepSamplingData & data)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/line/3d/sample.cpp#11
```

### relax_blocks

```cpp
void relax_blocks(const BRep & brep, BRepGeometricModifier & modifier)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/relax.cpp#597
```

### relax_blocks

```cpp
void relax_blocks(const BRep & brep, BRepGeometricModifier & modifier, const Metric3D & metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/relax.cpp#610
```

### sample_blocks

```cpp
flat_hash_map sample_blocks(BRepSamplingData & data)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/sample.cpp#191
```

### sample_blocks

```cpp
flat_hash_map sample_blocks(BRepSamplingData & data, BRepSamplingData::Tasks & surface_tasks)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/sample.cpp#203
```

### relax_surfaces

```cpp
void relax_surfaces(const BRep & brep, BRepGeometricModifier & modifier, const SurfaceRelaxerOptions3D & options)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/relax.cpp#13
```

### relax_surfaces

```cpp
void relax_surfaces(const BRep & brep, BRepGeometricModifier & modifier, const SurfaceRelaxerOptions3D & options, absl::Span<const uuid> surfaces_to_relax)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/relax.cpp#26
```

### sample_surfaces

```cpp
flat_hash_map sample_surfaces(BRepSamplingData & data)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/sample.cpp#243
```

### sample_surfaces

```cpp
flat_hash_map sample_surfaces(BRepSamplingData & data, BRepSamplingData::Tasks & line_tasks)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/sample.cpp#255
```

### repair_lines

```cpp
void repair_lines(BRepRemeshingData & data)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/line/3d/repair.cpp#11
```

### remesh_surfaces

```cpp
void remesh_surfaces(BRepRemeshingData & data)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/remesh.cpp#128
```

### remesh_surfaces

```cpp
void remesh_surfaces(BRepRemeshingData & data, absl::Span<const uuid> surfaces_to_remesh)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/remesh.cpp#140
```

### remesh_lines

```cpp
void remesh_lines(SectionRemeshingData & data)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/line/2d/remesh.cpp#11
```

### remesh_lines

```cpp
void remesh_lines(SectionRemeshingData & data, Span lines_to_remesh)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/line/2d/remesh.cpp#16
```

### relax_lines

```cpp
void relax_lines(const Section & section, SectionGeometricModifier & modifier, const Metric2D & metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/line/2d/relax.cpp#15
```

### relax_lines

```cpp
void relax_lines(const Section & section, SectionGeometricModifier & modifier, const Metric2D & metric, absl::Span<const uuid> lines_to_relax)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/line/2d/relax.cpp#29
```

### repair_lines

```cpp
void repair_lines(SectionRemeshingData & data)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/line/2d/repair.cpp#11
```

### relax_surfaces

```cpp
void relax_surfaces(const Section & section, SectionGeometricModifier & modifier, const SurfaceRelaxerOptions2D & options)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/2d/relax.cpp#56
```

### relax_surfaces

```cpp
void relax_surfaces(const Section & section, SectionGeometricModifier & modifier, const SurfaceRelaxerOptions2D & options, absl::Span<const uuid> surfaces_to_relax)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/2d/relax.cpp#69
```

### simplex_remesh

```cpp
tuple simplex_remesh(Section & section, const Metric2D & metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/section/remesh.cpp#13
```

### mesh_blocks

```cpp
void mesh_blocks(const BRep & output, BRepBuilder & builder, const Metric3D & metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/remesh.cpp#186
```

### mesh_blocks

```cpp
void mesh_blocks(const BRep & output, BRepBuilder & builder, const Metric3D & metric, absl::Span<const uuid> blocks_to_mesh)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/remesh.cpp#198
```

### remesh_surfaces

```cpp
void remesh_surfaces(SectionRemeshingData & data)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/2d/remesh.cpp#102
```

### remesh_surfaces

```cpp
void remesh_surfaces(SectionRemeshingData & data, absl::Span<const uuid> surfaces_to_remesh)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/2d/remesh.cpp#114
```

### remesh_corners

```cpp
void remesh_corners(SectionRemeshingData & data)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/corner/remesh.cpp#60
```

### remesh_corners

```cpp
void remesh_corners(BRepRemeshingData & data)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/corner/remesh.cpp#65
```

### simplex_mesh

```cpp
void simplex_mesh(BRep & brep, const Metric3D & metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/brep/mesh.cpp#17
```

### nb_minimum_apriori_simplex_elements

```cpp
index_t nb_minimum_apriori_simplex_elements(const ConstantMetric<Model::dim> & metric, const Model & model)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/helpers/apriori_numbers.cpp#164
```

### nb_minimum_apriori_simplex_elements

```cpp
index_t nb_minimum_apriori_simplex_elements(const GridMetric<Model::dim> & metric, const Model & model)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/helpers/apriori_numbers.cpp#175
```

### nb_minimum_apriori_simplex_elements

```cpp
index_t nb_minimum_apriori_simplex_elements(const CustomGridMetric<Model::dim> & metric, const Model & model)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/helpers/apriori_numbers.cpp#182
```

### local_simplex_remesh

```cpp
std::tuple<BRep, ModelCopyMapping> local_simplex_remesh(BRep & brep, const Metric3D & metric, std::vector<std::reference_wrapper<const Block3D> > blocks)
```

### local_simplex_remesh

```cpp
std::tuple<BRep, ModelCopyMapping> local_simplex_remesh(BRep & brep, const Metric3D & metric, int blocks)
```

```cpp
Defined at /github/workspace/src/geode/simplex/brep/local_remesh.cpp#219
```



