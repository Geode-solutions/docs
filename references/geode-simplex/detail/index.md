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

# namespace detail



## Records

* [BRepRemeshOptions](BRepRemeshOptions.md)
* [BRepSurfaceRelaxer](BRepSurfaceRelaxer.md)
* [BlockSampler](BlockSampler.md)
* [BlockTetgenMesher](BlockTetgenMesher.md)
* [Edge](Edge.md)
* [FillRemaining](FillRemaining.md)
* [FrontalRemesher2D](FrontalRemesher2D.md)
* [FrontalRemesher3D](FrontalRemesher3D.md)
* [FrontalRemesher](FrontalRemesher.md)
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
* [SectionRemeshOptions](SectionRemeshOptions.md)
* [Splitter](Splitter.md)
* [SurfaceInserter](SurfaceInserter.md)
* [SurfaceRelaxer](SurfaceRelaxer.md)
* [SurfaceRemesher](SurfaceRemesher.md)
* [SurfaceSampler3D](SurfaceSampler3D.md)
* [TetgenMesher](TetgenMesher.md)
* [Triangle](Triangle.md)
* [VertexOrigin](VertexOrigin.md)


## Functions

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
LineRemesherOutput<Data::dimension> remesh_line_step(Data & data, const uuid & input_line_id)
```


### insert_line_step

```cpp
absl::flat_hash_map<geode::index_t, geode::index_t> insert_line_step(Data & data, const LineRemesherOutput<Data::dimension> & result)
```

### remesh_lines_impl

```cpp
void remesh_lines_impl(Data & data)
```


### remesh_lines_impl

```cpp
void remesh_lines_impl(Data & data, Span lines_to_remesh)
```


### sample_lines_impl

```cpp
typename Data::Tasks sample_lines_impl(Data & data)
```


### simplex_remesh

```cpp
tuple simplex_remesh(BRep && brep, const Metric3D & metric, const BRepRemeshOptions & options)
```


### lock_vertices

```cpp
int lock_vertices(absl::Span<const index_t> vertex_mapping)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const MacroPolygonEdge & m)
```


### repair_lines

```cpp
void repair_lines(Data & data)
```


### update_unique_vertices

```cpp
void update_unique_vertices(Builder & builder, const geode::detail::RemeshedCMV & info)
```


### remesh_surface_using_parameterization

```cpp
RemeshedSurface3D remesh_surface_using_parameterization(const TriangulatedSurface3D & mesh, const Metric3D & metric, absl::Span<const index_t> lock_vertices, absl::Span<const index_t> outside_polygons, std::vector<std::vector<index_t> > macro_edges)
```

### remesh_surface_using_plane

```cpp
RemeshedSurface3D remesh_surface_using_plane(const TriangulatedSurface3D & background_mesh, TriangulatedSurfaceBuilder3D & background_builder, TriangulatedSurfaceEpsilonModifier3D & background_modifier, const Metric3D & metric, absl::Span<const index_t> lock_vertices)
```


### has_degenerated_elements

```cpp
bool has_degenerated_elements(const BRepElementsAfterOperation & elements)
```


### has_degenerated_elements

```cpp
bool has_degenerated_elements(const SectionElementsAfterOperation & elements)
```


### simplex_remesh

```cpp
tuple simplex_remesh(Section && section, const Metric2D & metric, const SectionRemeshOptions & options)
```


### remesh_surface

```cpp
RemeshedSurface2D remesh_surface(const TriangulatedSurface2D & background_mesh, TriangulatedSurfaceBuilder2D & background_builder, TriangulatedSurfaceEpsilonModifier2D & background_modifier, const Metric2D & metric, absl::Span<const index_t> lock_vertices)
```


### remesh_surface_using_parameterization

```cpp
RemeshedSurface3D remesh_surface_using_parameterization(const TriangulatedSurface3D & mesh, const Metric3D & metric, Span lock_vertices, Span outside_polygons, int macro_edges)
```


### insert_line_step

```cpp
int insert_line_step(Data & data, const LineRemesherOutput<Data::dimension> & result)
```


### do_remesh_lines_impl

```cpp
void do_remesh_lines_impl(Data & data, absl::Span<const uuid> lines_to_remesh)
```




