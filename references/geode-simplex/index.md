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


### remesh_lines

```cpp
void remesh_lines(BRepRemeshingData & data, Span lines_to_remesh)
```


### simplex_remesh

```cpp
tuple simplex_remesh(BRep & brep, const Metric3D & metric)
```


### new_simplex_remesh

```cpp
void new_simplex_remesh(BRep & brep, const Metric3D & metric)
```


### sample_corners

```cpp
void sample_corners(BRepSamplingData & data)
```


### relax_lines

```cpp
void relax_lines(const BRep & brep, BRepGeometricModifier & modifier, const Metric3D & metric)
```


### relax_lines

```cpp
void relax_lines(const BRep & brep, BRepGeometricModifier & modifier, const Metric3D & metric, absl::Span<const uuid> lines_to_relax)
```


### sample_lines

```cpp
flat_hash_map sample_lines(BRepSamplingData & data)
```


### relax_blocks

```cpp
void relax_blocks(const BRep & brep, BRepGeometricModifier & modifier)
```


### relax_blocks

```cpp
void relax_blocks(const BRep & brep, BRepGeometricModifier & modifier, const Metric3D & metric)
```


### sample_blocks

```cpp
flat_hash_map sample_blocks(BRepSamplingData & data)
```


### sample_blocks

```cpp
flat_hash_map sample_blocks(BRepSamplingData & data, BRepSamplingData::Tasks & surface_tasks)
```


### relax_surfaces

```cpp
void relax_surfaces(const BRep & brep, BRepGeometricModifier & modifier, const SurfaceRelaxerOptions3D & options)
```


### relax_surfaces

```cpp
void relax_surfaces(const BRep & brep, BRepGeometricModifier & modifier, const SurfaceRelaxerOptions3D & options, absl::Span<const uuid> surfaces_to_relax)
```


### sample_surfaces

```cpp
flat_hash_map sample_surfaces(BRepSamplingData & data)
```


### sample_surfaces

```cpp
flat_hash_map sample_surfaces(BRepSamplingData & data, BRepSamplingData::Tasks & line_tasks)
```


### repair_lines

```cpp
void repair_lines(BRepRemeshingData & data)
```


### remesh_surfaces

```cpp
void remesh_surfaces(BRepRemeshingData & data)
```


### remesh_surfaces

```cpp
void remesh_surfaces(BRepRemeshingData & data, absl::Span<const uuid> surfaces_to_remesh)
```


### remesh_lines

```cpp
void remesh_lines(SectionRemeshingData & data)
```


### remesh_lines

```cpp
void remesh_lines(SectionRemeshingData & data, Span lines_to_remesh)
```


### relax_lines

```cpp
void relax_lines(const Section & section, SectionGeometricModifier & modifier, const Metric2D & metric)
```


### relax_lines

```cpp
void relax_lines(const Section & section, SectionGeometricModifier & modifier, const Metric2D & metric, absl::Span<const uuid> lines_to_relax)
```


### repair_lines

```cpp
void repair_lines(SectionRemeshingData & data)
```


### relax_surfaces

```cpp
void relax_surfaces(const Section & section, SectionGeometricModifier & modifier, const SurfaceRelaxerOptions2D & options)
```


### relax_surfaces

```cpp
void relax_surfaces(const Section & section, SectionGeometricModifier & modifier, const SurfaceRelaxerOptions2D & options, absl::Span<const uuid> surfaces_to_relax)
```


### simplex_remesh

```cpp
tuple simplex_remesh(Section & section, const Metric2D & metric)
```


### mesh_blocks

```cpp
void mesh_blocks(const BRep & output, BRepBuilder & builder, const Metric3D & metric)
```


### mesh_blocks

```cpp
void mesh_blocks(const BRep & output, BRepBuilder & builder, const Metric3D & metric, absl::Span<const uuid> blocks_to_mesh)
```


### remesh_surfaces

```cpp
void remesh_surfaces(SectionRemeshingData & data)
```


### remesh_surfaces

```cpp
void remesh_surfaces(SectionRemeshingData & data, absl::Span<const uuid> surfaces_to_remesh)
```


### remesh_corners

```cpp
void remesh_corners(SectionRemeshingData & data)
```


### remesh_corners

```cpp
void remesh_corners(BRepRemeshingData & data)
```


### simplex_mesh

```cpp
void simplex_mesh(BRep & brep, const Metric3D & metric)
```


### nb_minimum_apriori_simplex_elements

```cpp
index_t nb_minimum_apriori_simplex_elements(const ConstantMetric<Model::dim> & metric, const Model & model)
```


### nb_minimum_apriori_simplex_elements

```cpp
index_t nb_minimum_apriori_simplex_elements(const GridMetric<Model::dim> & metric, const Model & model)
```


### nb_minimum_apriori_simplex_elements

```cpp
index_t nb_minimum_apriori_simplex_elements(const CustomGridMetric<Model::dim> & metric, const Model & model)
```


### local_simplex_remesh

```cpp
std::tuple<BRep, ModelCopyMapping> local_simplex_remesh(BRep & brep, const Metric3D & metric, std::vector<std::reference_wrapper<const Block3D> > blocks)
```

### local_simplex_remesh

```cpp
std::tuple<BRep, ModelCopyMapping> local_simplex_remesh(BRep & brep, const Metric3D & metric, int blocks)
```




