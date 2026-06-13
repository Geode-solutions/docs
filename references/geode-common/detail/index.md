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

* [AdvancedModelMeshModifiers](AdvancedModelMeshModifiers.md)
* [DistanceToTetrahedron](DistanceToTetrahedron.md)
* [EdgeDistance](EdgeDistance.md)
* [TriangleDistance](TriangleDistance.md)


## Functions

### find_containing_edge

```cpp
std::optional<index_t> find_containing_edge(const Point1D & point, const EdgedCurve1D & line, const EdgedCurveModifier1D & modifier_, const index_t initial_edge_id)
```


### is_modified_triangle_valid

```cpp
bool is_modified_triangle_valid(const TriangulatedSurface<dimension> & mesh, const Triangle<dimension> & modified_triangle, index_t old_triangle_id)
```


### find_containing_triangle

```cpp
std::optional<index_t> find_containing_triangle(const Point<dimension> & point, const TriangulatedSurface<dimension> & surface, const TriangulatedSurfaceModifier<dimension> & modifier, const index_t mesh_initial_tri_id)
```


### find_containing_tetrahedron

```cpp
std::optional<index_t> find_containing_tetrahedron(const Point3D & point, const TetrahedralSolid3D & solid, const TetrahedralSolidModifier & modifier, geode::index_t mesh_initial_tet_id)
```


### snapping_detection

```cpp
std::optional<local_index_t> snapping_detection(const EdgedCurve<dimension> & curve, index_t edge, const Point<dimension> & point)
```


### snapping_detection

```cpp
std::optional<local_index_t> snapping_detection(const SurfaceMesh<dimension> & surface, index_t polygon, const Point<dimension> & point)
```


### is_modified_triangle_valid

```cpp
bool is_modified_triangle_valid(const TriangulatedSurface<dimension> & mesh, const Triangle<dimension> & modified_triangle, const PolygonEdge & old_edge)
```


### snapping_detection

```cpp
std::optional<local_index_t> snapping_detection(const SolidMesh<dimension> & solid, index_t polyhedron, const Point<dimension> & point)
```


### is_modified_triangle_flipped

```cpp
bool is_modified_triangle_flipped(const TriangulatedSurface3D & mesh, const Triangle3D & modified_triangle, index_t old_triangle_id)
```


### snapping_detection

```cpp
std::optional<local_index_t> snapping_detection(const SurfaceMesh<dimension> & surface, const PolygonEdge & edge, const Point<dimension> & point)
```


### does_swap_edge_flip_triangles

```cpp
bool does_swap_edge_flip_triangles(const TriangulatedSurface3D & mesh, const PolygonEdge & old_edge)
```


### edge_snapping_detection

```cpp
std::optional<local_index_t> edge_snapping_detection(const SurfaceMesh<dimension> & surface, const PolygonEdge & edge, const Point<dimension> & point)
```


### snapping_detection

```cpp
std::optional<local_index_t> snapping_detection(const SolidMesh<dimension> & solid, const PolyhedronFacet & facet, const Point<dimension> & point)
```


### does_split_edge_flip_triangles

```cpp
bool does_split_edge_flip_triangles(const TriangulatedSurface3D & mesh, const PolygonEdge & old_edge, const Point3D & apex)
```


### mean_plane_around_points

```cpp
OwnerPlane mean_plane_around_points(const PointSet3D & mesh, absl::Span<const geode::index_t> mesh_vertices_indices)
```


 Compute mean plane around mesh Points with Least Squares, using only the points with given indices.

**mesh** [in] Input mesh

**mesh_vertices_indices** [in] Indices of mesh vertices to use

### mean_plane_around_curve_points

```cpp
OwnerPlane mean_plane_around_curve_points(const EdgedCurve3D & mesh, absl::Span<const geode::index_t> mesh_vertices_indices)
```


### mean_plane_around_surface_points

```cpp
OwnerPlane mean_plane_around_surface_points(const SurfaceMesh3D & mesh, absl::Span<const geode::index_t> mesh_vertices_indices)
```


### snapping_detection

```cpp
std::optional<local_index_t> snapping_detection(const SolidMesh<dimension> & solid, const PolyhedronFacetEdge & edge, const Point<dimension> & point)
```


### is_swap_edge_allowed_by_constraints

```cpp
bool is_swap_edge_allowed_by_constraints(const ModifiableTetrahedralSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape, SwapEdgeTetrahedraAfter & tetra_after, const TetrahedralSolidConstraintModifier::Constraints & constraints)
```


### allowed_split_collapse_edge_by_constraints

```cpp
std::tuple<ALLOWED_COLLAPSE_EDGE_VERTEX, ForbiddenInfos> allowed_split_collapse_edge_by_constraints(const ModifiableTetrahedralSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape, SplitCollapseEdgeTetrahedraAfter & tetra_after, const TetrahedralSolidConstraintModifier::Constraints & constraints)
```


### triangles_after_collapse_edge

```cpp
SectionElementsAfterCollapseEdge::SurfaceTriangles triangles_after_collapse_edge(const Section & section, const SectionComponentMeshEdges::SurfaceEdges & surface_edges, const Point2D & point)
```


### does_swap_edge_improve_metric

```cpp
bool does_swap_edge_improve_metric(const SwapEdgeTetrahedraAfter & tetra_after, const TetrahedralSolidImprovementSimulator3D & improvement_simulator)
```


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
BRepElementsAfterCollapseEdge::SurfaceTriangles triangles_after_collapse_edge(const BRep & brep, const BRepComponentMeshEdges::SurfaceEdges & surface_edges, const Point3D & point)
```


### tetrahedra_after_collapse_edge

```cpp
BRepElementsAfterCollapseEdge::BlockTetrahedra tetrahedra_after_collapse_edge(const BRep & brep, const BRepComponentMeshEdges::BlockEdges & block_edges, const Point3D & point)
```


### triangles_after_swap_edge

```cpp
BRepElementsAfterSwapEdge::SurfaceTriangles triangles_after_swap_edge(const BRep & brep, const BRepComponentMeshEdges::SurfaceEdges & surface_edges)
```


### tetrahedra_after_swap_edge

```cpp
BRepElementsAfterSwapEdge::BlockTetrahedra tetrahedra_after_swap_edge(const BRep & brep, const BRepComponentMeshEdges::BlockEdges & block_edges, index_t unique_apex)
```


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
bool is_swap_edge_valid(const TetrahedralSolid3D & mesh, index_t apex, const SwapEdgeTetrahedraAfter & tetra_after)
```




