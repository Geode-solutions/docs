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

* [DistanceToTetrahedron](DistanceToTetrahedron.md)
* [EdgeDistance](EdgeDistance.md)
* [TriangleDistance](TriangleDistance.md)


## Functions

### tetrahedra_after_split_split_collapse

```cpp
TetrahedraAfter tetrahedra_after_split_split_collapse(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const Point3D & collapse_point, const PolyhedraAroundEdge & poly_around_edges, const index_t ssc_tetra_index)
```


 Return all the tetrahedra resulting from a double edge split and edge collapse. The split-collapse operations are not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**edge0** [in] Index of the first PolyhedronFacetEdge on which simulate split.

**edge1** [in] Index of the second PolyhedronFacetEdge on which simulate split.

**vertex** [in] Index towards which the split vertex is collapse on.

### is_swap_edge_valid

```cpp
bool is_swap_edge_valid(const BRep & brep, const BRepComponentMeshEdges & edges, index_t unique_apex)
```


### is_swap_edge_valid

```cpp
bool is_swap_edge_valid(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edges, index_t unique_apex)
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


### is_modified_triangle_flipped

```cpp
bool is_modified_triangle_flipped(const Triangle3D & old_triangle, const Triangle3D & modified_triangle)
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


### find_containing_triangle

```cpp
optional find_containing_triangle(const Point<dimension> & point, const TriangulatedSurface<dimension> & surface, const TriangulatedSurfaceModifier<dimension> & modifier, const index_t mesh_initial_tri_id)
```


### snapping_detection

```cpp
optional snapping_detection(const SurfaceMesh<dimension> & surface, index_t polygon, const Point<dimension> & point)
```


### snapping_detection

```cpp
optional snapping_detection(const SurfaceMesh<dimension> & surface, const PolygonEdge & edge, const Point<dimension> & point)
```


### edge_snapping_detection

```cpp
optional edge_snapping_detection(const SurfaceMesh<dimension> & surface, const PolygonEdge & edge, const Point<dimension> & point)
```


### find_containing_edge

```cpp
optional find_containing_edge(const Point1D & point, const EdgedCurve1D & line, const EdgedCurveModifier1D & modifier_, const index_t initial_edge_id)
```


### snapping_detection

```cpp
optional snapping_detection(const EdgedCurve<dimension> & curve, index_t edge, const Point<dimension> & point)
```


### triangles_after_collapse_edge

```cpp
flat_hash_map triangles_after_collapse_edge(const Section & section, const struct SectionComponentMeshEdges::SurfaceEdges & surface_edges, const Point2D & point)
```


### find_containing_tetrahedron

```cpp
optional find_containing_tetrahedron(const Point3D & point, const TetrahedralSolid3D & solid, const TetrahedralSolidModifier & modifier, geode::index_t mesh_initial_tet_id)
```




