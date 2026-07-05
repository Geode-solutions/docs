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

# namespace internal



## Records

* [BRepSurfaceRelaxer](BRepSurfaceRelaxer.md)
* [BackgroundBRepEdgeDecimatorOperator](BackgroundBRepEdgeDecimatorOperator.md)
* [BackgroundBRepEdgeDecimator](BackgroundBRepEdgeDecimator.md)
* [BackgroundBRepRelaxer](BackgroundBRepRelaxer.md)
* [BackgroundBRepVertexSmoother](BackgroundBRepVertexSmoother.md)
* [BackgroundSolidTetrahedronQualityMetricImprovementSimulator](BackgroundSolidTetrahedronQualityMetricImprovementSimulator.md)
* [BlockInternalLineSplitter](BlockInternalLineSplitter.md)
* [BlockSampler](BlockSampler.md)
* [BlockTetgenMesher](BlockTetgenMesher.md)
* [Edge](Edge.md)
* [FillRemaining](FillRemaining.md)
* [FrontalRemesher2D](FrontalRemesher2D.md)
* [FrontalRemesher3D](FrontalRemesher3D.md)
* [FrontalRemesher](FrontalRemesher.md)
* [JsonIsotropicMetricConstraintsImpl](JsonIsotropicMetricConstraintsImpl.md)
* [LSCMRemesher](LSCMRemesher.md)
* [LineConstraint](LineConstraint.md)
* [LineRelaxer](LineRelaxer.md)
* [LineRemesherOutput](LineRemesherOutput.md)
* [MeshedBlockSampler](MeshedBlockSampler.md)
* [MetricConstraintsImpl](MetricConstraintsImpl.md)
* [OrientedPolygonEdge](OrientedPolygonEdge.md)
* [PropagateAlongLine2D](PropagateAlongLine2D.md)
* [PropagateAlongPlane](PropagateAlongPlane.md)
* [PropagateAlongSurfaceMacroEdge2D](PropagateAlongSurfaceMacroEdge2D.md)
* [PropagateAlongSurfaceMacroEdge3D](PropagateAlongSurfaceMacroEdge3D.md)
* [PropagateAlongSurfaceMacroEdge](PropagateAlongSurfaceMacroEdge.md)
* [RemainingSurface](RemainingSurface.md)
* [RemeshAlgo](RemeshAlgo.md)
* [RemeshedCMV](RemeshedCMV.md)
* [RemeshedSurface](RemeshedSurface.md)
* [Sampler](Sampler.md)
* [SolidEdge](SolidEdge.md)
* [SolidVertex](SolidVertex.md)
* [SurfaceInserter](SurfaceInserter.md)
* [SurfaceRelaxer3D](SurfaceRelaxer3D.md)
* [SurfaceRelaxer](SurfaceRelaxer.md)
* [SurfaceRemesher](SurfaceRemesher.md)
* [SurfaceSampler3D](SurfaceSampler3D.md)
* [SurfaceSplitter](SurfaceSplitter.md)
* [TetgenMesher](TetgenMesher.md)
* [Triangle](Triangle.md)
* [VertexOrigin](VertexOrigin.md)


## Functions

### plane_normal_check

```cpp
bool plane_normal_check(const SurfaceMesh3D & mesh, const PolygonEdge & edge, index_t apex, index_t opposite_apex)
```


### pre_process_meshing_step

```cpp
void pre_process_meshing_step(const BRep & brep, BRepGeometricModifier & modifier)
```


### remesh_surface

```cpp
RemeshedSurface2D remesh_surface(const TriangulatedSurface2D & background_mesh, TriangulatedSurfaceBuilder2D & background_builder, TriangulatedSurfaceEpsilonModifier2D & background_modifier, const Metric2D & metric, absl::Span<const index_t> lock_vertices)
```


### remesh_surface_using_parameterization

```cpp
RemeshedSurface3D remesh_surface_using_parameterization(const TriangulatedSurface3D & mesh, const Metric3D & metric, absl::Span<const index_t> lock_vertices, absl::Span<const index_t> outside_polygons, std::vector<std::vector<index_t>> macro_edges)
```


### update_unique_vertices

```cpp
void update_unique_vertices(Builder & builder, Modifier & modifier, const geode::internal::RemeshedCMV & info)
```


### remesh_surface_using_plane

```cpp
RemeshedSurface3D remesh_surface_using_plane(const TriangulatedSurface3D & background_mesh, TriangulatedSurfaceBuilder3D & background_builder, TriangulatedSurfaceEpsilonModifier3D & background_modifier, const Metric3D & metric, absl::Span<const index_t> lock_vertices)
```


### update_unique_vertices

```cpp
void update_unique_vertices(Builder & builder, const geode::internal::RemeshedCMV & info)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const SolidEdge & solid_edge)
```


### lock_vertices

```cpp
std::vector<index_t> lock_vertices(absl::Span<const index_t> vertex_mapping)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const SolidVertex & solid_vertex)
```


### has_degenerated_elements

```cpp
bool has_degenerated_elements(const BRep & brep, const BRepElementsAfterCollapseEdge & elements)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const MacroPolygonEdge & m)
```


### has_degenerated_elements

```cpp
bool has_degenerated_elements(const Section & section, const SectionElementsAfterCollapseEdge & elements)
```


### line_extremities

```cpp
std::array<EdgeVertex, 2> line_extremities(const Model & model, const Line<Model::dim> & line)
```


### remesh_line_step

```cpp
LineRemesherOutput<Data::dimension> remesh_line_step(Data & data, const uuid & input_line_id, const LineConstraint & begin, const LineConstraint & end, index_t nb_minimum_points)
```


### sample_line_step

```cpp
LineRemesherOutput<Data::dimension> sample_line_step(Data & data, const uuid & line_id, const EdgeVertex & begin, const EdgeVertex & end)
```


### remesh_line_step

```cpp
LineRemesherOutput<Data::dimension> remesh_line_step(Data & data, const Line<Data::dimension> & input_line)
```


### insert_line_step

```cpp
absl::flat_hash_map<geode::index_t, geode::index_t> insert_line_step(Data & data, const LineRemesherOutput<Data::dimension> & result)
```


### remesh_lines_impl

```cpp
void remesh_lines_impl(Data & data)
```


### sample_lines_impl

```cpp
typename Data::Tasks sample_lines_impl(Data & data)
```


### treat_inactive_lines

```cpp
void treat_inactive_lines(Data & data)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const Edge & other)
```


### decimate_edges

```cpp
void decimate_edges(BackgroundBRepGeometricConstraintModifier & constraint_modifier, const Metric3D & metric)
```


### relax_polyhedra

```cpp
void relax_polyhedra(BackgroundBRepGeometricConstraintModifier & constraint_modifier, const BRepInternalDistanceImprovementSimulator & improvement_simulator, const Metric3D & metric)
```


### smooth_vertices

```cpp
void smooth_vertices(BackgroundBRepGeometricConstraintModifier & constraint_modifier, const BRepInternalDistanceImprovementSimulator & improvement_simulator)
```


### relax_background_brep_elements

```cpp
void relax_background_brep_elements(BRepSamplingData & model)
```




