# namespace detail



## Records

* [GridMetricImpl](GridMetricImpl.md)
* [ModelGeometricModifier](ModelGeometricModifier.md)


## Functions

### unordered_one_ring_vertices

```cpp
RingVertices unordered_one_ring_vertices(const TetrahedralSolid3D & mesh, const std::array<index_t, 2> & edge_vertices, const PolyhedraAroundEdge & polyhedra)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/solid/utils.cpp#95
```

### one_ring_vertices

```cpp
FixedArray one_ring_vertices(const TetrahedralSolid3D & mesh, const std::array<index_t, 2> & edge_vertices, const PolyhedraAroundEdge & polyhedra)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/solid/utils.cpp#118
```

### rotate_one_ring_from_apex

```cpp
void rotate_one_ring_from_apex(absl::FixedArray<index_t> & one_ring_vertices, index_t apex)
```

### intersect_one_ring_vertices

```cpp
absl::flat_hash_set<geode::index_t> intersect_one_ring_vertices(const geode::TetrahedralSolid3D & mesh, const geode::PolyhedraAroundVertex & pav0, const geode::PolyhedraAroundVertex & pav1)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/solid/utils.cpp#229
```

### snapping_detection

```cpp
optional snapping_detection(const SurfaceMesh<dimension> & surface, index_t polygon, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/snapping_detection.cpp#17
```

### triangles_after_collapse_edge

```cpp
int triangles_after_collapse_edge(const BRep & brep, const struct BRepComponentMeshEdges::SurfaceEdges & surface_edges, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier_simulation.cpp#912
```

### tetrahedra_after_collapse_edge

```cpp
int tetrahedra_after_collapse_edge(const BRep & brep, const struct BRepComponentMeshEdges::BlockEdges & block_edges, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier_simulation.cpp#921
```

### snapping_detection

```cpp
absl::optional<local_index_t> snapping_detection(const SolidMesh<dimension> & solid, index_t polyhedron, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/solid/snapping_detection.cpp#17
```

### snapping_detection

```cpp
absl::optional<local_index_t> snapping_detection(const SolidMesh<dimension> & solid, const PolyhedronFacet & facet, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/solid/snapping_detection.cpp#37
```

### is_modified_triangle_valid

```cpp
bool is_modified_triangle_valid(const TriangulatedSurface<dimension> & mesh, const Triangle<dimension> & modified_triangle, index_t old_triangle_id)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/simulation_helpers.cpp#139
```

### is_modified_triangle_valid

```cpp
bool is_modified_triangle_valid(const TriangulatedSurface<dimension> & mesh, const Triangle<dimension> & modified_triangle, const PolygonEdge & old_edge)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/simulation_helpers.cpp#149
```

### is_modified_triangle_flipped

```cpp
bool is_modified_triangle_flipped(const TriangulatedSurface3D & mesh, const Triangle3D & modified_triangle, index_t old_triangle_id)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/simulation_helpers.cpp#158
```

### is_modified_triangle_flipped

```cpp
bool is_modified_triangle_flipped(const TriangulatedSurface3D & mesh, const Triangle3D & modified_triangle, const PolygonEdge & old_edge)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/simulation_helpers.cpp#166
```

### rotate_one_ring_from_apex

```cpp
void rotate_one_ring_from_apex(int & one_ring_vertices, index_t apex)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/solid/utils.cpp#222
```

### is_move_point_valid

```cpp
bool is_move_point_valid(const Model & model, index_t unique_vertex, const Point<Model::dim> & point)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#29
```

### sort_cmvs

```cpp
int sort_cmvs(absl::Span<const ComponentMeshVertex> cmvs, const geode::ComponentType & type)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#53
```

### move_point_surface_validity

```cpp
SurfaceMovePointValidities<Model::dim> move_point_surface_validity(const Model & model, index_t unique_vertex, const Point<Model::dim> & point)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#69
```

### invalid_lines

```cpp
int invalid_lines(const Model & model, const ModelComponentMeshEdges & edges)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#98
```

### invalid_surfaces

```cpp
int invalid_surfaces(const Model & model, const ModelComponentMeshEdges & edges)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#132
```

### invalid_collapse_edges

```cpp
typename SurfaceCollapseEdgeValidities<Model::dim>::MeshInvalidities invalid_collapse_edges(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#303
```

### invalid_split_edges

```cpp
typename SurfaceSplitEdgeValidities<Model::dim>::MeshInvalidities invalid_split_edges(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#330
```

### invalid_swap_edges

```cpp
flat_hash_map invalid_swap_edges(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#357
```

### collapse_edge_validity

```cpp
typename ModelCollapseEdgeValidity<Model::dim>::SurfaceCollapseEdgeValidities collapse_edge_validity(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#380
```

### model_triangles_after_collapse_edge

```cpp
typename ModelElementsAfterOperation<Model::dim>::SurfaceTriangles model_triangles_after_collapse_edge(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#409
```

### triangles_after_collapse_edge

```cpp
flat_hash_map triangles_after_collapse_edge(const Section & section, const struct SectionComponentMeshEdges::SurfaceEdges & surface_edges, const Point2D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier_simulation.cpp#138
```

### snapping_detection

```cpp
optional snapping_detection(const EdgedCurve<dimension> & curve, index_t edge, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/edged_curve/snapping_detection.cpp#17
```



