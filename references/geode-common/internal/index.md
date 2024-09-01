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

* [BlockMeshFusion](BlockMeshFusion.md)
* [GridMetricImpl](GridMetricImpl.md)
* [ModelGeometricModifier](ModelGeometricModifier.md)
* [OrientedEdgeUniqueVertices](OrientedEdgeUniqueVertices.md)
* [SolidSwapAlongPatch](SolidSwapAlongPatch.md)
* [SolidSwapAlongPath](SolidSwapAlongPath.md)
* [SurfaceMeshFusion](SurfaceMeshFusion.md)


## Functions

### is_move_point_valid

```cpp
bool is_move_point_valid(const Model & model, index_t unique_vertex, const Point<Model::dim> & point)
```


### sort_cmvs

```cpp
flat_hash_map sort_cmvs(Span cmvs, const geode::ComponentType & type)
```


### move_point_surface_validity

```cpp
SurfaceMovePointValidities<Model::dim> move_point_surface_validity(const Model & model, index_t unique_vertex, const Point<Model::dim> & point)
```


### invalid_lines

```cpp
vector invalid_lines(const Model & model, const ModelComponentMeshEdges & edges)
```


### invalid_surfaces

```cpp
vector invalid_surfaces(const Model & model, const ModelComponentMeshEdges & edges)
```


### invalid_collapse_edges

```cpp
typename SurfaceCollapseEdgeValidities<Model::dim>::MeshInvalidities invalid_collapse_edges(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```


### invalid_collapse_edges

```cpp
typename SurfaceCollapseEdgeValidities<Model::dim>::MeshInvalidities invalid_collapse_edges(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, index_t unique_apex)
```


### is_collapse_model_edge_valid

```cpp
bool is_collapse_model_edge_valid(const Model & model, const std::array<index_t, 2> & edge_unique_vertices)
```


### is_collapse_model_edge_valid

```cpp
bool is_collapse_model_edge_valid(const Model & model, const OrientedEdgeUniqueVertices & unique_vertices)
```


### is_collapse_edges_valid

```cpp
bool is_collapse_edges_valid(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```


### is_collapse_edges_valid

```cpp
bool is_collapse_edges_valid(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, index_t unique_apex)
```


### invalid_split_edges

```cpp
typename SurfaceSplitEdgeValidities<Model::dim>::MeshInvalidities invalid_split_edges(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```


### invalid_split_triangles

```cpp
typename SurfaceSplitTriangleValidities<Model::dim>::MeshInvalidities invalid_split_triangles(const Model & model, const struct ModelComponentMeshPolygons::SurfacePolygons & surface_polygons, const Point<Model::dim> & point)
```


### invalid_swap_edges

```cpp
flat_hash_map invalid_swap_edges(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges)
```


### collapse_edge_validity

```cpp
typename ModelCollapseEdgeValidity<Model::dim>::SurfaceCollapseEdgeValidities collapse_edge_validity(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```


### model_triangles_after_collapse_edge

```cpp
typename ModelElementsAfterCollapseEdge<Model::dim>::SurfaceTriangles model_triangles_after_collapse_edge(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```


### model_triangles_after_swap_edge

```cpp
typename ModelElementsAfterSwapEdge<Model::dim>::SurfaceTriangles model_triangles_after_swap_edge(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges)
```


### unordered_one_ring_vertices

```cpp
InlinedVector unordered_one_ring_vertices(const TetrahedralSolid3D & mesh, const std::array<index_t, 2> & edge_vertices, const PolyhedraAroundEdge & polyhedra)
```


### one_ring_vertices

```cpp
std::tuple<absl::FixedArray<index_t>, bool> one_ring_vertices(const TetrahedralSolid3D & mesh, const std::array<index_t, 2> & edge_vertices, const PolyhedraAroundEdge & polyhedra)
```


### rotate_one_ring_from_apex

```cpp
void rotate_one_ring_from_apex(absl::FixedArray<index_t> & one_ring_vertices, index_t apex)
```


### intersect_one_ring_vertices

```cpp
vector intersect_one_ring_vertices(const SolidMesh3D & mesh, index_t vertex0, index_t vertex1)
```




