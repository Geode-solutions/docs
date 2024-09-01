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



## Functions

### snapping_detection

```cpp
optional snapping_detection(const SurfaceMesh<dimension> & surface, index_t polygon, const Point<dimension> & point)
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


### snapping_detection

```cpp
optional snapping_detection(const EdgedCurve<dimension> & curve, index_t edge, const Point<dimension> & point)
```


### is_swap_edge_valid

```cpp
bool is_swap_edge_valid(const BRep & brep, const BRepComponentMeshEdges & edges, index_t unique_apex)
```


### triangles_after_collapse_edge

```cpp
flat_hash_map triangles_after_collapse_edge(const BRep & brep, const struct BRepComponentMeshEdges::SurfaceEdges & surface_edges, const Point3D & point)
```


### tetrahedra_after_collapse_edge

```cpp
flat_hash_map tetrahedra_after_collapse_edge(const BRep & brep, const struct BRepComponentMeshEdges::BlockEdges & block_edges, const Point3D & point)
```


### triangles_after_swap_edge

```cpp
flat_hash_map triangles_after_swap_edge(const BRep & brep, const struct BRepComponentMeshEdges::SurfaceEdges & surface_edges)
```


### tetrahedra_after_swap_edge

```cpp
flat_hash_map tetrahedra_after_swap_edge(const BRep & brep, const struct BRepComponentMeshEdges::BlockEdges & block_edges, index_t unique_apex)
```


### snapping_detection

```cpp
optional snapping_detection(const SolidMesh<dimension> & solid, index_t polyhedron, const Point<dimension> & point)
```


### snapping_detection

```cpp
optional snapping_detection(const SolidMesh<dimension> & solid, const PolyhedronFacet & facet, const Point<dimension> & point)
```


### snapping_detection

```cpp
optional snapping_detection(const SolidMesh<dimension> & solid, const PolyhedronFacetEdge & edge, const Point<dimension> & point)
```


### triangles_after_collapse_edge

```cpp
flat_hash_map triangles_after_collapse_edge(const Section & section, const struct SectionComponentMeshEdges::SurfaceEdges & surface_edges, const Point2D & point)
```




