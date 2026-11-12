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



## Namespaces

* [detail](detail/index.md)


## Records

* [BRepSurfaceRelaxer](BRepSurfaceRelaxer.md)
* [BackgroundBRepEdgeDecimatorOperator](BackgroundBRepEdgeDecimatorOperator.md)
* [BackgroundBRepEdgeDecimator](BackgroundBRepEdgeDecimator.md)
* [BackgroundBRepRelaxer](BackgroundBRepRelaxer.md)
* [BackgroundBRepVertexSmoother](BackgroundBRepVertexSmoother.md)
* [BackgroundSolidTetrahedronQualityMetricImprovementSimulator](BackgroundSolidTetrahedronQualityMetricImprovementSimulator.md)
* [BlockInternalLineSplitter](BlockInternalLineSplitter.md)
* [BlockSampler](BlockSampler.md)
* [BlockTetrahedralizer](BlockTetrahedralizer.md)
* [ConstrainedPointsInsertion](ConstrainedPointsInsertion.md)
* [ConstrainedTetrahedralizer](ConstrainedTetrahedralizer.md)
* [DelaunayResult](DelaunayResult.md)
* [DelaunayTriangulation](DelaunayTriangulation.md)
* [Edge](Edge.md)
* [FrontalRemesher2D](FrontalRemesher2D.md)
* [FrontalRemesher3D](FrontalRemesher3D.md)
* [FrontalRemesher](FrontalRemesher.md)
* [InSphereCache](InSphereCache.md)
* [LineConstraint](LineConstraint.md)
* [LineRelaxer](LineRelaxer.md)
* [LineRemesherOutput](LineRemesherOutput.md)
* [MeshedBlockSampler](MeshedBlockSampler.md)
* [MetricConstraintsImpl](MetricConstraintsImpl.md)
* [OrientedPolygonEdge](OrientedPolygonEdge.md)
* [PointInsertion](PointInsertion.md)
* [PropagateAlongLine2D](PropagateAlongLine2D.md)
* [PropagateAlongPlane](PropagateAlongPlane.md)
* [PropagateAlongSurfaceMacroEdge2D](PropagateAlongSurfaceMacroEdge2D.md)
* [PropagateAlongSurfaceMacroEdge3D](PropagateAlongSurfaceMacroEdge3D.md)
* [PropagateAlongSurfaceMacroEdge](PropagateAlongSurfaceMacroEdge.md)
* [RelaxFlipsResult](RelaxFlipsResult.md)
* [RemainingPolygon](RemainingPolygon.md)
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


### update_unique_vertices

```cpp
void update_unique_vertices(Builder & builder, Modifier & modifier, const geode::internal::RemeshedCMV & info)
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


### check_metric

```cpp
void check_metric(double metric, double cell_length, Data && data)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const SolidVertex & solid_vertex)
```


### check_gradation

```cpp
void check_gradation(double gradation)
```


### AbslHashValue

```cpp
H AbslHashValue(H hash, const MacroPolygonEdge & macro_edge)
```


### has_degenerated_elements

```cpp
bool has_degenerated_elements(const BRep & brep, const BRepElementsAfterCollapseEdge & elements)
```


### has_degenerated_elements

```cpp
bool has_degenerated_elements(const Section & section, const SectionElementsAfterCollapseEdge & elements)
```


### has_degenerated_triangles_after_move_point

```cpp
bool has_degenerated_triangles_after_move_point(const BRep & brep, index_t unique_vertex, const Point3D & point)
```


### insert_cavity_steiner_point

```cpp
index_t insert_cavity_steiner_point(DelaunayTriangulation & mesh, absl::Span<const index_t> cavity_tets)
```


 Insert a new vertex (appended to mesh.points) strictly inside the cavity made of the given finite tetrahedra, and join it to the cavity boundary. Its double precision coordinates are taken from a deterministic candidate list and validated with exact orient_3d against every cavity boundary facet (the cavity must be strictly star-shaped from it). Vertices inside the cavity are inserted back. Constraints are not checked: the caller must ensure that the cavity contains none.

**return** the new vertex, NO_ID if no candidate is valid (mesh untouched).

### has_degenerated_triangles_after_move_point

```cpp
bool has_degenerated_triangles_after_move_point(const Section & section, index_t unique_vertex, const Point2D & point)
```


### recover_facets

```cpp
std::vector<index_t> recover_facets(DelaunayTriangulation & mesh, absl::Span<const std::array<index_t, 3>> triangles)
```


 Recover the given triangles (triplets of mesh vertices) as mesh facets without Steiner point, in input order: flips strictly decreasing the number of tetrahedra crossed by the triangle, then re-tetrahedralization of the cavity made of the crossed tetrahedra, split by the triangle into an upper and a lower cavity, each filled using only its own vertices. Triangles whose edges are missing are not recovered. Triangle edges and recovered triangles are never removed.

**return** the indices of the triangles still missing, sorted.

**exception**if a triangle is degenerate, has unused vertices, contains another vertex or intersects a recovered triangle or edge of another triangle.

### build_delaunay

```cpp
DelaunayResult build_delaunay(absl::Span<const Point3D> points)
```


 Deterministic Delaunay tetrahedralization (Bowyer-Watson, exact predicates with symbolic perturbation) of the given points, with infinite tetrahedra around the convex hull. Mesh vertex indices are the input point indices.

**exception**if there are less than 4 distinct points, if all points are coplanar or if a coordinate is not finite.

### remesh_surface

```cpp
RemeshedSurface2D remesh_surface(const TriangulatedSurface2D & background_mesh, TriangulatedSurfaceBuilder2D & background_builder, TriangulatedSurfaceEpsilonModifier2D & background_modifier, const Metric2D & metric, absl::Span<const index_t> lock_vertices)
```


### remesh_surface_using_plane

```cpp
RemeshedSurface3D remesh_surface_using_plane(const TriangulatedSurface3D & background_mesh, TriangulatedSurfaceBuilder3D & background_builder, TriangulatedSurfaceEpsilonModifier3D & background_modifier, const Metric3D & metric, absl::Span<const index_t> lock_vertices)
```


### recover_segments

```cpp
std::vector<index_t> recover_segments(DelaunayTriangulation & mesh, absl::Span<const std::array<index_t, 2>> segments)
```


 Recover the given segments (pairs of mesh vertices) as mesh edges using flips only (no Steiner point), in input order. For each segment, a flip is accepted only if it strictly decreases the number of tetrahedra crossed by the segment (exact predicates), so the recovery always terminates. Edges of the input segments are never flipped away.

**return** the indices of the segments still missing, sorted.

**exception**if a segment has identical or unused end vertices, passes exactly through another vertex or crosses another recovered segment.

### flip_23

```cpp
bool flip_23(DelaunayTriangulation & mesh, index_t encoded_facet)
```


 2-3 flip: replace the two tetrahedra sharing the encoded facet (tet * 4 + facet) by three tetrahedra around the edge joining their opposite vertices.

**return** false if the flip is not valid (mesh untouched).

### multiscale_order

```cpp
std::vector<index_t> multiscale_order(absl::Span<const index_t> order)
```


 Deterministic biased insertion order: rounds of doubling size, each round being a uniform subsequence of the given (Hilbert) order (positions with the same number of trailing zero bits), so that each round is inserted in a triangulation already covering the whole domain.

### flip_32

```cpp
bool flip_32(DelaunayTriangulation & mesh, index_t tet, index_t v0, index_t v1)
```


 3-2 flip: replace the three tetrahedra around the edge (v0, v1) of the given tetrahedron by two tetrahedra.

**return** false if (v0, v1) is not an edge of tet, if there are not exactly three tetrahedra around it or if the flip is not valid (mesh untouched).

### recover_segments

```cpp
std::vector<index_t> recover_segments(DelaunayTriangulation & mesh, absl::Span<const std::array<index_t, 2>> segments, const detail::ConstraintSet & protected_constraints, absl::Span<const index_t> to_recover, detail::MeshJournal * journal)
```


 Same as above, recovering only the segments of to_recover (only them are checked) and never removing the edges and triangles of protected_constraints, which must contain every segment edge. Applied flips are recorded in journal if given.

**return** the indices of the segments of to_recover still missing, sorted.

### recover_constraints

```cpp
void recover_constraints(DelaunayTriangulation & mesh, absl::Span<const std::array<index_t, 2>> segments, absl::Span<const std::array<index_t, 3>> triangles, std::vector<index_t> & steiner_vertices)
```


 Make every segment a mesh edge and every triangle a mesh facet: segment recovery by flips, then each missing segment (in order) by cavity re-tetrahedralization, first without Steiner point, then with interior Steiner points; a segment still missing is split by a temporary vertex (with its triangles), whose halves are recovered in turn. Then facet recovery by flips and cavities without Steiner point, then each missing triangle (in order) with Steiner points. Recovered constraints are never removed. Finally the temporary vertices are removed (as TetGen and HXT): moved off the triangles into the volume, or removed restoring the segment as an edge. No created vertex lies on a segment or triangle, which is checked. Triangle edges are recovered as segments.

**steiner_vertices** [out] appended with the created vertices (indices >= the number of points before the call).

**exception**if a constraint is invalid, intersects another constraint or cannot be recovered ("could not recover constraints (input may self-intersect)"), or if a temporary vertex cannot be removed. On exception, the changes made so far (including tentative Steiner cones) stay applied: the mesh is valid but some constraints may be missing.

### flip_edge_nm

```cpp
bool flip_edge_nm(DelaunayTriangulation & mesh, index_t v0, index_t v1)
```


 Edge removal (n-m flip): replace the n tetrahedra around the edge (v0, v1) by 2(n - 2) tetrahedra joining v0 and v1 to a triangulation of the ring of the edge (first valid triangulation found by dynamic programming, deterministic).

**return** false if (v0, v1) is not an edge or if no triangulation of its ring gives a valid flip (mesh untouched).

### improve_tetrahedra_by_flips

```cpp
RelaxFlipsResult improve_tetrahedra_by_flips(TetrahedralSolidConstraintModifier & constraint_modifier, const TetrahedralSolidImprovementSimulator3D & improvement_simulator, absl::Span<const index_t> tetrahedra, bool nested_flips, bool until_first_failure)
```


 Improve the given tetrahedra (worst first) by topological flips only: no vertex is moved or added. Each tetrahedron still active and requiring improvement is processed once, in the order of its metric then index (the created tetrahedra requiring improvement are queued with the others). The best improving operation among these is applied: - the 2-3 flip of each of its facets; - the removal of each of its edges, by every fan of the edge ring (3-2 flip, 4-4 flip, ...); - the multi-face removal seeded at each of its facets. If none improves and nested_flips is true, each of its edges is removed by a sequence of flips simulated first (TetGen's flipnm, Si 2015): the ring of the edge is reduced by 2-3 flips of its facets down to a 3-2 flip, and a facet blocked by one of its other edges is unblocked by removing that edge first (recursively, at most 3 nested edge removals). The best sequence is applied. An operation (or a whole sequence) improves when the worst metric of the created tetrahedra is better than the worst metric of the removed ones (is_better_after_simulation). Borders and constraints are respected as by the TetrahedralSolidConstraintModifier operations; orientations are checked with exact predicates. If until_first_failure is true, the pass stops at the first tetrahedron that cannot be improved: it is the worst one of the mesh, so the worst metric cannot get better any more.

### line_extremities

```cpp
std::array<EdgeVertex, 2> line_extremities(const Model & model, const Line<Model::dim> & line)
```


### remesh_line_step

```cpp
LineRemesherOutput<Data::dimension> remesh_line_step(Data & data, const uuid & input_line_id, const LineConstraint & begin, const LineConstraint & end, index_t nb_minimum_points)
```


### remove_steiner_points

```cpp
void remove_steiner_points(DelaunayTriangulation & mesh, std::vector<index_t> & steiner_vertices, absl::Span<const std::array<index_t, 2>> segments, absl::Span<const std::array<index_t, 3>> triangles)
```


 Try to remove each Steiner vertex by re-tetrahedralizing its star without it (advancing front, or collapse onto one of its neighbors): the result is kept only if every resulting tetrahedron is positive (exact) and every constraint is kept. Passes are repeated while a vertex is removed. Removed vertices stay in mesh.points but are no longer used (vertex_tet is NO_ID).

**steiner_vertices** [in,out] the remaining Steiner vertices.

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


### AbslHashValue

```cpp
H AbslHashValue(H h, const Edge & other)
```


### insert_constrained_points

```cpp
ConstrainedPointsInsertion insert_constrained_points(DelaunayTriangulation & mesh, std::vector<bool> & inside, absl::Span<const Point3D> points, absl::Span<const std::array<index_t, 2>> segments, absl::Span<const std::array<index_t, 3>> triangles)
```


 Insert points into a mesh whose constraints are recovered (every segment is a mesh edge, every triangle a mesh facet) and whose domain is given by inside (a tetrahedron flag, the inside tetrahedra being bounded by triangles). Points are appended to mesh.points (point p is vertex old_nb_points + p, unused if not inserted) and inserted in a deterministic multiscale Hilbert order by a constrained Bowyer-Watson algorithm (as TetGen -i and HXT): the cavity is the connected set of inside tetrahedra whose circumsphere contains the point (exact in_sphere_3d_SOS), never crossing a triangle; it is then cut so that no segment is inside it and so that it is strictly star-shaped from the point (exact orient_3d), then re-tetrahedralized as a cone from the point; Lawson 2-3/3-2 flips (as TetGen) then restore the local Delaunay property around the point where constraints allow it. New tetrahedra are inside. Constraints are thus kept and no zero volume tetrahedron is created. Points are located by a visibility walk from the previously located tetrahedron. Precondition: no point is on a segment or a triangle; inside has one flag per tetrahedron.

### remove_degenerated_tetrahedra

```cpp
index_t remove_degenerated_tetrahedra(DelaunayTriangulation & mesh, std::vector<bool> & inside, absl::Span<const std::array<index_t, 2>> segments, absl::Span<const std::array<index_t, 3>> triangles)
```


 Remove by flips (2-3, 3-2, edge removals and chain flips around their edges) the degenerated inside tetrahedra: those whose vertices lie in a slab thinner than GLOBAL_EPSILON (Tetrahedron::is_degenerated, zero volume-to-edge quality). A flip is applied only if it keeps every constraint (no constraint triangle or segment removed), involves only inside tetrahedra and creates only positive non degenerated tetrahedra, so that the number of degenerated tetrahedra strictly decreases. A tetrahedron that cannot be flipped is tried again after a flip changed its surroundings. Vertices and the domain boundary are unchanged.

**return** the number of degenerated inside tetrahedra left (not removable by these flips, e.g. forced by the input).

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




## Enums

| enum class POINT_INSERTION |

--

| inserted |
| outside |
| duplicate |
| rejected |





