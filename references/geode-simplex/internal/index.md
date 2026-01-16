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
* [RepairBRepSurfaces](RepairBRepSurfaces.md)
* [Sampler](Sampler.md)
* [SolidEdge](SolidEdge.md)
* [SolidVertex](SolidVertex.md)
* [Splitter](Splitter.md)
* [SurfaceInserter](SurfaceInserter.md)
* [SurfaceRelaxer3D](SurfaceRelaxer3D.md)
* [SurfaceRelaxer](SurfaceRelaxer.md)
* [SurfaceRemesher](SurfaceRemesher.md)
* [SurfaceSampler3D](SurfaceSampler3D.md)
* [TetgenMesher](TetgenMesher.md)
* [Triangle](Triangle.md)
* [VertexOrigin](VertexOrigin.md)


## Functions

### update_unique_vertices

```cpp
void update_unique_vertices(Builder & builder, const geode::internal::RemeshedCMV & info)
```


### has_degenerated_elements

```cpp
bool has_degenerated_elements(const BRep & brep, const BRepElementsAfterCollapseEdge & elements)
```


### has_degenerated_elements

```cpp
bool has_degenerated_elements(const Section & section, const SectionElementsAfterCollapseEdge & elements)
```


### remesh_surface_using_parameterization

```cpp
RemeshedSurface remesh_surface_using_parameterization(const TriangulatedSurface3D & mesh, const Metric3D & metric, Span lock_vertices, Span outside_polygons, vector macro_edges)
```


### remesh_surface_using_plane

```cpp
RemeshedSurface remesh_surface_using_plane(const TriangulatedSurface3D & background_mesh, TriangulatedSurfaceBuilder3D & background_builder, TriangulatedSurfaceEpsilonModifier3D & background_modifier, const Metric3D & metric, Span lock_vertices)
```


### lock_vertices

```cpp
vector lock_vertices(Span vertex_mapping)
```


### remesh_surface

```cpp
RemeshedSurface remesh_surface(const TriangulatedSurface2D & background_mesh, TriangulatedSurfaceBuilder2D & background_builder, TriangulatedSurfaceEpsilonModifier2D & background_modifier, const Metric2D & metric, Span lock_vertices)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const MacroPolygonEdge & m)
```


### line_extremities

```cpp
array line_extremities(const Model & model, const Line<Model::dim> & line)
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
flat_hash_map insert_line_step(Data & data, const LineRemesherOutput<Data::dimension> & result)
```


### remesh_lines_impl

```cpp
void remesh_lines_impl(Data & data)
```


### sample_lines_impl

```cpp
typename Data::Tasks sample_lines_impl(Data & data)
```


### repair_lines

```cpp
void repair_lines(Data & data)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const SolidEdge & solid_edge)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const SolidVertex & solid_vertex)
```


### relax_background_brep_elements

```cpp
void relax_background_brep_elements(BRepSamplingData & model)
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
void relax_polyhedra(BackgroundBRepGeometricConstraintModifier & constraint_modifier, const TetrahedralSolidInternalDistanceImprovementSimulator & improvement_simulator, const Metric3D & metric)
```


### smooth_vertices

```cpp
void smooth_vertices(BackgroundBRepGeometricConstraintModifier & constraint_modifier, const TetrahedralSolidInternalDistanceImprovementSimulator & improvement_simulator)
```




