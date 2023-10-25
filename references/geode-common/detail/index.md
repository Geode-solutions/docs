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

* [GridMetricImpl](GridMetricImpl.md)
* [ModelGeometricModifier](ModelGeometricModifier.md)


## Functions

### unordered_one_ring_vertices

```cpp
RingVertices unordered_one_ring_vertices(const TetrahedralSolid3D & mesh, const std::array<index_t, 2> & edge_vertices, const PolyhedraAroundEdge & polyhedra)
```


### one_ring_vertices

```cpp
FixedArray one_ring_vertices(const TetrahedralSolid3D & mesh, const std::array<index_t, 2> & edge_vertices, const PolyhedraAroundEdge & polyhedra)
```


### rotate_one_ring_from_apex

```cpp
void rotate_one_ring_from_apex(absl::FixedArray<index_t> & one_ring_vertices, index_t apex)
```

### intersect_one_ring_vertices

```cpp
vector intersect_one_ring_vertices(const geode::TetrahedralSolid3D & mesh, const geode::PolyhedraAroundVertex & pav0, const geode::PolyhedraAroundVertex & pav1)
```


### snapping_detection

```cpp
optional snapping_detection(const SurfaceMesh<dimension> & surface, index_t polygon, const Point<dimension> & point)
```


### triangles_after_collapse_edge

```cpp
int triangles_after_collapse_edge(const BRep & brep, const struct BRepComponentMeshEdges::SurfaceEdges & surface_edges, const Point3D & point)
```


### tetrahedra_after_collapse_edge

```cpp
int tetrahedra_after_collapse_edge(const BRep & brep, const struct BRepComponentMeshEdges::BlockEdges & block_edges, const Point3D & point)
```


### snapping_detection

```cpp
absl::optional<local_index_t> snapping_detection(const SolidMesh<dimension> & solid, index_t polyhedron, const Point<dimension> & point)
```


### snapping_detection

```cpp
absl::optional<local_index_t> snapping_detection(const SolidMesh<dimension> & solid, const PolyhedronFacet & facet, const Point<dimension> & point)
```


### is_modified_triangle_valid

```cpp
bool is_modified_triangle_valid(const TriangulatedSurface<dimension> & mesh, const Triangle<dimension> & modified_triangle, index_t old_triangle_id)
```


### is_modified_triangle_valid

```cpp
bool is_modified_triangle_valid(const TriangulatedSurface<dimension> & mesh, const Triangle<dimension> & modified_triangle, const PolygonEdge & old_edge)
```


### is_modified_triangle_flipped

```cpp
bool is_modified_triangle_flipped(const TriangulatedSurface3D & mesh, const Triangle3D & modified_triangle, index_t old_triangle_id)
```


### is_modified_triangle_flipped

```cpp
bool is_modified_triangle_flipped(const TriangulatedSurface3D & mesh, const Triangle3D & modified_triangle, const PolygonEdge & old_edge)
```


### is_move_point_valid

```cpp
bool is_move_point_valid(const Model & model, index_t unique_vertex, const Point<Model::dim> & point)
```


### sort_cmvs

```cpp
int sort_cmvs(absl::Span<const ComponentMeshVertex> cmvs, const geode::ComponentType & type)
```


### move_point_surface_validity

```cpp
SurfaceMovePointValidities<Model::dim> move_point_surface_validity(const Model & model, index_t unique_vertex, const Point<Model::dim> & point)
```


### invalid_lines

```cpp
int invalid_lines(const Model & model, const ModelComponentMeshEdges & edges)
```


### invalid_surfaces

```cpp
int invalid_surfaces(const Model & model, const ModelComponentMeshEdges & edges)
```


### invalid_collapse_edges

```cpp
typename SurfaceCollapseEdgeValidities<Model::dim>::MeshInvalidities invalid_collapse_edges(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```


### is_collapse_edges_valid

```cpp
bool is_collapse_edges_valid(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```


### invalid_split_edges

```cpp
typename SurfaceSplitEdgeValidities<Model::dim>::MeshInvalidities invalid_split_edges(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```


### invalid_split_triangles

```cpp
typename SurfaceSplitTriangleValidities<Model::dim>::MeshInvalidities invalid_split_triangles(const Model & model, const int & surface_polygons, const Point<Model::dim> & point)
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
typename ModelElementsAfterOperation<Model::dim>::SurfaceTriangles model_triangles_after_collapse_edge(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```


### rotate_one_ring_from_apex

```cpp
void rotate_one_ring_from_apex(int & one_ring_vertices, index_t apex)
```


### triangles_after_collapse_edge

```cpp
flat_hash_map triangles_after_collapse_edge(const Section & section, const struct SectionComponentMeshEdges::SurfaceEdges & surface_edges, const Point2D & point)
```


### snapping_detection

```cpp
optional snapping_detection(const EdgedCurve<dimension> & curve, index_t edge, const Point<dimension> & point)
```




