<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# namespace geode



## Namespaces

* [detail](detail/index.md)
* [internal](internal/index.md)


## Records

* [BRepAnisotropicMetricConstraints](BRepAnisotropicMetricConstraints.md)
* [BRepElementsAfterCollapseEdge](BRepElementsAfterCollapseEdge.md)
* [BRepIsotropicMetricConstraints](BRepIsotropicMetricConstraints.md)
* [BRepRemeshOptions](BRepRemeshOptions.md)
* [BRepRemeshValidity](BRepRemeshValidity.md)
* [BRepRemeshWithoutBlockValidity](BRepRemeshWithoutBlockValidity.md)
* [BrepSurfacesRemeshValidity](BrepSurfacesRemeshValidity.md)
* [GeometricSurfacePath](GeometricSurfacePath.md)
* [OpenGeodeRemeshDataException](OpenGeodeRemeshDataException.md)
* [PolygonEdge](PolygonEdge.md)
* [RemeshingData](RemeshingData.md)
* [SamplingData](SamplingData.md)
* [SectionAnisotropicMetricConstraints](SectionAnisotropicMetricConstraints.md)
* [SectionIsotropicMetricConstraints](SectionIsotropicMetricConstraints.md)
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


### constrained_mesh_blocks

```cpp
void constrained_mesh_blocks(const BRep & output, BRepBuilder & builder)
```


### constrained_mesh_block

```cpp
GenericMapping constrained_mesh_block(const BRep & output, BRepBuilder & builder, const Block3D & block, std::vector<Point3D> && internal_points)
```


### mesh_blocks

```cpp
void mesh_blocks(const BRep & output, BRepBuilder & builder, BRepGeometricModifier & modifier, const Metric3D & metric)
```


### relax_blocks

```cpp
void relax_blocks(const BRep & brep, BRepGeometricModifier & modifier)
```


### sample_blocks

```cpp
flat_hash_map sample_blocks(BRepSamplingData & data)
```


### sample_blocks

```cpp
flat_hash_map sample_blocks(BRepSamplingData & data, BRepSamplingData::Tasks & surface_tasks)
```


### section_simplex_remesh

```cpp
void section_simplex_remesh(Section & section, const Metric2D & metric)
```


### relax_lines

```cpp
void relax_lines(const Section & section, SectionGeometricModifier & modifier, const Metric2D & metric)
```


### remesh_lines

```cpp
void remesh_lines(SectionRemeshingData & data)
```


### repair_lines

```cpp
void repair_lines(SectionRemeshingData & data)
```


### relax_surfaces

```cpp
void relax_surfaces(const Section & section, SectionGeometricModifier & modifier, const SurfaceRelaxerOptions2D & options)
```


### remesh_surfaces

```cpp
void remesh_surfaces(SectionRemeshingData & data)
```


### remesh_surfaces

```cpp
void remesh_surfaces(SectionRemeshingData & data, absl::Span<const uuid> surfaces_to_remesh)
```


### sample_corners

```cpp
void sample_corners(BRepSamplingData & data)
```


### relax_surfaces

```cpp
void relax_surfaces(const BRep & brep, BRepGeometricModifier & modifier, const SurfaceRelaxerOptions3D & options)
```


### remesh_surfaces

```cpp
void remesh_surfaces(BRepRemeshingData & data)
```


### target_point

```cpp
Point<dimension> target_point(const Point<dimension> & prev, const Point<dimension> & last, const Point<dimension> & origin, double target)
```


### sample_surfaces

```cpp
flat_hash_map sample_surfaces(BRepSamplingData & data)
```


### sample_surfaces

```cpp
flat_hash_map sample_surfaces(BRepSamplingData & data, BRepSamplingData::Tasks & line_tasks)
```


### compute_worst_quality

```cpp
double compute_worst_quality(const SwapTrianglesAfter3D & triangles)
```


### is_lucarne_edge

```cpp
bool is_lucarne_edge(const geode::BRep & brep, Span edge_unique_vertices)
```


### brep_simplex_mesh

```cpp
void brep_simplex_mesh(BRep & brep, const Metric3D & metric)
```


### brep_simplex_constrained_mesh

```cpp
void brep_simplex_constrained_mesh(BRep & brep)
```


### brep_simplex_remesh

```cpp
void brep_simplex_remesh(BRep & brep, const BRepRemeshOptions & options)
```


### brep_volumic_simplex_remesh

```cpp
void brep_volumic_simplex_remesh(BRep & brep, const BRepRemeshOptions & options)
```


### relax_lines

```cpp
void relax_lines(const BRep & brep, BRepGeometricModifier & modifier, const Metric3D & metric)
```


### sample_lines

```cpp
flat_hash_map sample_lines(BRepSamplingData & data)
```


### mesh_brep_empty_blocks

```cpp
void mesh_brep_empty_blocks(BRep & brep)
```


### is_triangulated_surface_remeshable

```cpp
bool is_triangulated_surface_remeshable(const TriangulatedSurface3D & surface)
```


### is_brep_remeshable

```cpp
BRepRemeshValidity is_brep_remeshable(const BRep & brep)
```


### are_brep_surfaces_remeshable

```cpp
BrepSurfacesRemeshValidity are_brep_surfaces_remeshable(const BRep & brep)
```


### is_brep_without_block_remeshable

```cpp
BRepRemeshWithoutBlockValidity is_brep_without_block_remeshable(const BRep & brep)
```


### remesh_lines

```cpp
void remesh_lines(BRepRemeshingData & data)
```


### repair_lines

```cpp
void repair_lines(BRepRemeshingData & data)
```




