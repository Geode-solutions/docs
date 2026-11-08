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



## Namespaces

* [cavity_impl](cavity_impl/index.md)
* [exact_geometry](exact_geometry/index.md)
* [facet_recovery_impl](facet_recovery_impl/index.md)
* [steiner_impl](steiner_impl/index.md)


## Records

* [CavityRegion](CavityRegion.md)
* [ConstraintSet](ConstraintSet.md)
* [FlipPlan](FlipPlan.md)
* [FlipUndo](FlipUndo.md)
* [MeshJournal](MeshJournal.md)


## Functions

### orientation

```cpp
int orientation(const Point3D & p0, const Point3D & p1, const Point3D & p2, const Point3D & p3)
```


 Sign (-1, 0, 1) of orient_3d of the given points: positive for a positively oriented tetrahedron.

### orientation

```cpp
int orientation(const std::vector<Point3D> & points, const std::array<index_t, 4> & tet)
```


### is_on_closed_segment

```cpp
bool is_on_closed_segment(const Point3D & point, const Point3D & s0, const Point3D & s1)
```


 True if point is on the closed segment [s0, s1].

### check_triangle

```cpp
void check_triangle(const DelaunayTriangulation & mesh, const std::array<index_t, 3> & triangle, index_t id)
```


 Throw if the triangle has identical, unused or aligned vertices.

### is_in_closed_triangle

```cpp
bool is_in_closed_triangle(const Point3D & point, const Point3D & t0, const Point3D & t1, const Point3D & t2)
```


 True if point is on the closed (non degenerate) triangle.

### is_in_closed_tetrahedron

```cpp
bool is_in_closed_tetrahedron(const Point3D & point, const std::vector<Point3D> & points, const std::array<index_t, 4> & tet)
```


 True if point is in the closed positive tetrahedron.

### is_separated_by_plane

```cpp
bool is_separated_by_plane(const std::vector<Point3D> & points, const std::array<index_t, 3> & plane, const std::array<index_t, N> & own, const std::array<index_t, M> & others)
```


 True if a plane through the given three points separates the two vertex sets: the vertices of others not on it are all strictly on one side, and the vertices of own not on it all strictly on the other side (a vertex is on the plane only if it is one of the three points, then shared by both). The simplices then only meet on the shared vertices.

### is_on_one_side

```cpp
bool is_on_one_side(const std::vector<Point3D> & points, const std::array<index_t, 3> & triangle, const std::array<index_t, 4> & tet)
```


 True if the vertices of the tetrahedron not in the triangle are all strictly on the same side of its plane: the tetrahedron then meets the plane only on the common vertices.

### recover_facet

```cpp
bool recover_facet(DelaunayTriangulation & mesh, const std::array<index_t, 3> & triangle, const ConstraintSet & constraints, const SteinerFilter * steiner_filter, bool * by_cavity)
```


 Recover one triangle whose edges are mesh edges: flips, then cavity re-tetrahedralization. If steiner_filter is given, the cavities may be filled with Steiner points accepted by it. The edges and triangles of constraints are never removed.

**by_cavity** [out] if given, set to true if the cavity re-tetrahedralization was tried (the flips were not enough).

**return** true if the triangle is a mesh facet.

**exception**if the triangle contains a vertex or intersects a constraint present in the mesh.

### segment_meets_triangle

```cpp
bool segment_meets_triangle(const std::vector<Point3D> & points, const std::array<index_t, 2> & segment, const std::array<index_t, 3> & triangle)
```


 True if the segment intersects the closed triangle elsewhere than on their common vertices.

### plan_flip_23

```cpp
std::optional<FlipPlan> plan_flip_23(const DelaunayTriangulation & mesh, index_t encoded_facet)
```


 Plan the 2-3 flip of the encoded facet, std::nullopt if not valid.

### is_outside_a_facet_plane

```cpp
bool is_outside_a_facet_plane(const std::vector<Point3D> & points, const std::array<index_t, 4> & tet, const Point3D & p0, const Point3D & p1)
```


 True if the two points are strictly outside the plane of the same facet of the non degenerated tetrahedron: a segment joining them does not meet the closed tetrahedron. False if it cannot be decided this way.

### undo_journal

```cpp
void undo_journal(DelaunayTriangulation & mesh, MeshJournal & journal)
```


 Undo every journaled modification, in reverse order, and remove the appended points. No unjournaled modification may have happened since the journal creation.

### segment_meets_tetrahedron

```cpp
bool segment_meets_tetrahedron(const std::vector<Point3D> & points, const std::array<index_t, 2> & segment, const std::array<index_t, 4> & tet)
```


 True if the segment intersects the closed positive tetrahedron elsewhere than on their common vertices (a segment joining two vertices of the tetrahedron is one of its edges).

### plan_edge_removal

```cpp
std::optional<FlipPlan> plan_edge_removal(const DelaunayTriangulation & mesh, index_t tet, index_t v0, index_t v1, absl::FunctionRef<index_t (const std::array<index_t, 4> &)> cost)
```


 Plan the removal of the edge (v0, v1) of the given tetrahedron, choosing among the valid triangulations of the edge ring the one minimizing the sum of cost over the created tetrahedra (ties broken deterministically). std::nullopt if (v0, v1) is not an edge of tet or if no triangulation gives a valid flip.

### tetrahedron_meets_triangle

```cpp
bool tetrahedron_meets_triangle(const std::vector<Point3D> & points, const std::array<index_t, 4> & tet, const std::array<index_t, 3> & triangle)
```


 True if the closed positive tetrahedron and the closed triangle intersect elsewhere than on the convex hull of their common vertices. A triangle that is a facet of the tetrahedron never meets it.

### oriented_facet

```cpp
std::array<index_t, 3> oriented_facet(const std::array<index_t, 4> & tet, local_index_t facet)
```


 Facet opposite to the given vertex of the tetrahedron, ordered so that (facet, tet[facet]) is an even permutation of tet: if tet is positive, its opposite vertex is on the positive side of the returned facet.

### for_each_edge_flip

```cpp
bool for_each_edge_flip(const DelaunayTriangulation & mesh, index_t tet, index_t v0, index_t v1, absl::FunctionRef<index_t (const std::array<index_t, 4> &)> cost, absl::FunctionRef<bool (FlipPlan &&)> callback)
```


 Call callback on every valid flip around the edge (v0, v1) of the given tetrahedron until it returns true. Let r_0, ..., r_n-1 be the ring of the edge, r_0 and r_1 being in tet. The flips are, in this order: - the edge removal, as plan_edge_removal; - for each i, then each 2 <= k <= n - 2, the chain flip replacing the k tetrahedra around the edge between r_i and r_i+k by the tetrahedron (v0, v1, r_i, r_i+k) and the triangulation of the polygon (r_i, ..., r_i+k) minimizing cost, joined to v0 and v1 (k = 2 is the 2-3 flip of the facet (v0, v1, r_i+1)).

**return** true if callback returned true.

### sorted_triangle

```cpp
std::array<index_t, 3> sorted_triangle(std::array<index_t, 3> triangle)
```


### constrained_region

```cpp
CavityRegion constrained_region(const DelaunayTriangulation & mesh, absl::Span<const index_t> cavity_tets, const ConstraintSet & constraints, absl::Span<const std::array<index_t, 2>> extra_required_edges, std::vector<index_t> & reinserted, std::vector<std::array<index_t, 3>> & walls)
```


 Region of the given finite tetrahedra (sorted) keeping the constraints: boundary triangles, constraint triangles between two cavity tetrahedra as walls (also returned in walls), required edges (extra_required_edges and the constraint edges not on the boundary), inner vertices (ends of required edges). The other inner vertices are returned in reinserted (sorted).

### apply_flip

```cpp
void apply_flip(DelaunayTriangulation & mesh, const FlipPlan & plan)
```


 Apply a plan returned by plan_flip_23, plan_edge_removal or for_each_edge_flip on the unchanged mesh: delete the old tetrahedra, create the new ones and connect them.

### positive_unit_normal

```cpp
std::optional<Vector3D> positive_unit_normal(const std::vector<Point3D> & points, const std::array<index_t, 3> & triangle)
```


 Unit normal of the triangle pointing to its positive side (exact orientation check), std::nullopt if degenerate.

### moved_center

```cpp
std::optional<Point3D> moved_center(const DelaunayTriangulation & mesh, const Point3D & origin, absl::Span<const std::array<index_t, 3>> walls, absl::Span<const std::array<index_t, 3>> faces, const SteinerFilter & steiner_filter)
```


 Point near origin (a temporary vertex on the walls) from which every face is seen strictly positively (exact) and accepted by the filter: origin moved along the sum of the walls unit normals. The move keeps each face on the positive side approximately: below h / -n.d when it goes toward the face plane, above -h / n.d when origin is slightly on its negative side and the move leaves it (h: offset of origin from the plane of unit normal n, d: unit direction); it is halved toward the lower bound until the exact checks pass.

 Point near origin (on the walls, up to rounding) from which every face is seen strictly positively (exact) and accepted by the filter: origin moved along the sum of the walls unit normals, by a move found from the face planes then halved until the exact checks pass.

### apply_flip_with_undo

```cpp
FlipUndo apply_flip_with_undo(DelaunayTriangulation & mesh, const FlipPlan & plan)
```


 Same as apply_flip, returning what is needed to undo it.

### undo_flip

```cpp
void undo_flip(DelaunayTriangulation & mesh, const FlipUndo & undo)
```


 Restore the mesh as it was before apply_flip_with_undo. No other modification may have happened in between.

### fill_region

```cpp
std::optional<std::vector<std::array<index_t, 4>>> fill_region(DelaunayTriangulation & mesh, const CavityRegion & region, const SteinerFilter * steiner_filter)
```


 Tetrahedralize the region with exact predicates: advancing front (Delaunay choice among valid apices), then cone of the remaining hole from one of its vertices. If steiner_filter is given and this fails, Steiner points are added strictly inside the region (appended to mesh.points), either as the apex of a cone of the hole, or as the apex of a tetrahedron on an input boundary triangle, splitting the hole.

**return** the positive tetrahedra (std::nullopt on failure, mesh.points then restored).

### cavity_boundary

```cpp
std::vector<std::array<index_t, 3>> cavity_boundary(const DelaunayTriangulation & mesh, absl::Span<const index_t> tets)
```


 Boundary triangles of the given tetrahedra, oriented with the tetrahedra on their positive side, in order of tetrahedra then facets.

### star_center_candidates

```cpp
std::vector<Point3D> star_center_candidates(const std::vector<Point3D> & points, absl::Span<const std::array<index_t, 3>> boundary)
```


 Deterministic list of candidate positions (double precision) for a point from which the region bounded by the given oriented triangles would be star-shaped: center of the approximate kernel, centroid of the vertices, then points between the boundary triangles centroids and the vertices centroid.

### is_strict_star_center

```cpp
bool is_strict_star_center(const std::vector<Point3D> & points, absl::Span<const std::array<index_t, 3>> boundary, const Point3D & point)
```


 True if every oriented triangle of the boundary is seen strictly positively from point (exact): the region is then strictly star-shaped from point and is tetrahedralized by joining point to its boundary.

### replace_tets

```cpp
bool replace_tets(DelaunayTriangulation & mesh, absl::Span<const index_t> old_tets, absl::Span<const std::array<index_t, 4>> new_tets, std::vector<index_t> * created_tets, MeshJournal * journal)
```


 Replace old_tets (alive) by new_tets covering the same region (finite tetrahedra must be positive, infinite ones must have a non degenerate finite facet; keeping the convex hull, i.e. new hull triangles coplanar with the replaced ones, is the caller's job): new tetrahedra are connected to each other and to the outside through matching facets.

**return** false (mesh untouched) if the facets do not match.

### insert_vertex

```cpp
void insert_vertex(DelaunayTriangulation & mesh, index_t vertex, std::vector<index_t> & candidate_tets, const ConstraintSet & constraints, MeshJournal * journal)
```


 Insert a mesh vertex (not used by the mesh yet) lying in the closure of one of the candidate tetrahedra: the tetrahedra containing it are joined to it. candidate_tets is updated with the created tetrahedra.

**exception**if the vertex is in no candidate, duplicates a vertex or lies on a constraint edge or triangle.

### apply_cavity_fill

```cpp
bool apply_cavity_fill(DelaunayTriangulation & mesh, absl::Span<const index_t> cavity_tets, absl::Span<const std::array<index_t, 4>> new_tets, absl::Span<const index_t> reinserted_vertices, const ConstraintSet & constraints, MeshJournal * journal)
```


 Replace the cavity tetrahedra by the new ones if every constraint is preserved, then insert back the given cavity vertices (unused by the new tetrahedra, sorted) with insert_vertex.

**return** false (mesh untouched) if a constraint would be removed or if the new tetrahedra do not match the cavity boundary.

### triangulate_sleeve

```cpp
std::optional<std::vector<std::array<index_t, 3>>> triangulate_sleeve(const std::vector<Point3D> & points, absl::Span<const std::array<index_t, 3>> triangles, index_t a, index_t b)
```


 Triangulation, with the same orientation, of the planar polygon made of the given consistently oriented coplanar triangles, containing the segment (a, b) between two of its boundary vertices: ear clipping of each side of the segment, then insertion of the triangle vertices inside the polygon (exact 2D predicates). std::nullopt if the polygon boundary is not a simple loop through a and b, or if a vertex lies on the segment.



