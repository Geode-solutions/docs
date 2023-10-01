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
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier_simulation.cpp#643
```

### tetrahedra_after_collapse_edge

```cpp
int tetrahedra_after_collapse_edge(const BRep & brep, const struct BRepComponentMeshEdges::BlockEdges & block_edges, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier_simulation.cpp#652
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
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#25
```

### invalid_lines

```cpp
int invalid_lines(const Model & model, const ModelComponentMeshEdges & edges)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#50
```

### invalid_surfaces

```cpp
int invalid_surfaces(const Model & model, const ModelComponentMeshEdges & edges)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#84
```

### invalid_collapse_edges

```cpp
flat_hash_map invalid_collapse_edges(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#118
```

### invalid_split_edges

```cpp
flat_hash_map invalid_split_edges(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#265
```

### invalid_swap_edges

```cpp
flat_hash_map invalid_swap_edges(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#289
```

### collapse_edge_validity

```cpp
typename ModelCollapseEdgeValidity<Model::dim>::SurfaceCollapseEdgeValidities collapse_edge_validity(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#312
```

### model_triangles_after_collapse_edge

```cpp
typename ModelElementsAfterOperation<Model::dim>::SurfaceTriangles model_triangles_after_collapse_edge(const Model & model, const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<Model::dim> & point)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier_simulation.h#341
```

### triangles_after_collapse_edge

```cpp
flat_hash_map triangles_after_collapse_edge(const Section & section, const struct SectionComponentMeshEdges::SurfaceEdges & surface_edges, const Point2D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier_simulation.cpp#136
```

### snapping_detection

```cpp
optional snapping_detection(const EdgedCurve<dimension> & curve, index_t edge, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/edged_curve/snapping_detection.cpp#17
```



