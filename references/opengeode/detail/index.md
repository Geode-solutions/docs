# namespace detail



## Records

* [ArrayImpl](ArrayImpl.md)
* [ComponentsStorage](ComponentsStorage.md)
* [ComponentsTypesChecker](ComponentsTypesChecker.md)
* [CutAlongInternalLines](CutAlongInternalLines.md)
* [CutAlongInternalSurfaces](CutAlongInternalSurfaces.md)
* [EdgedCurveIdentifier](EdgedCurveIdentifier.md)
* [EdgedCurveMerger](EdgedCurveMerger.md)
* [EdgesImpl](EdgesImpl.md)
* [FacetEdgesImpl](FacetEdgesImpl.md)
* [FacetStorage](FacetStorage.md)
* [GraphIdentifier](GraphIdentifier.md)
* [GridImpl](GridImpl.md)
* [MeshStorage](MeshStorage.md)
* [OrientedVertexCycle](OrientedVertexCycle.md)
* [PointsImpl](PointsImpl.md)
* [PolygonsAroundVertexImpl](PolygonsAroundVertexImpl.md)
* [PolyhedraAroundVertexImpl](PolyhedraAroundVertexImpl.md)
* [RelationshipsImpl](RelationshipsImpl.md)
* [SimplicialModelCreator](SimplicialModelCreator.md)
* [SolidIdentifier](SolidIdentifier.md)
* [SolidMeshMerger](SolidMeshMerger.md)
* [SurfaceIdentifier](SurfaceIdentifier.md)
* [SurfaceMeshMerger](SurfaceMeshMerger.md)
* [TextureImpl](TextureImpl.md)
* [UuidToIndex](UuidToIndex.md)
* [VertexCycle](VertexCycle.md)
* [VertexMerger](VertexMerger.md)


## Functions

### mapping_after_deletion

```cpp
vector mapping_after_deletion(const std::vector<bool> & to_delete)
```

```cpp
Defined at ../../include/geode/basic/detail/mapping_after_deletion.h#34
```

### coords_multiply

```cpp
Coords<dimension> coords_multiply(const Coords<dimension> & input, double multiplier)
```

```cpp
Defined at ../../include/geode/geometry/detail/point_operators.h#33
```

### coords_divide

```cpp
Coords<dimension> coords_divide(const Coords<dimension> & input, double divider)
```

```cpp
Defined at ../../include/geode/geometry/detail/point_operators.h#45
```

### coords_add

```cpp
Coords<dimension> coords_add(const Coords<dimension> & input, const Coords<dimension> & other)
```

```cpp
Defined at ../../include/geode/geometry/detail/point_operators.h#60
```

### coords_substract

```cpp
Coords<dimension> coords_substract(const Coords<dimension> & input, const Coords<dimension> & other)
```

```cpp
Defined at ../../include/geode/geometry/detail/point_operators.h#72
```

### coords_multiply_equal

```cpp
void coords_multiply_equal(Coords<dimension> & input, double multiplier)
```

```cpp
Defined at ../../include/geode/geometry/detail/point_operators.h#84
```

### coords_divide_equal

```cpp
void coords_divide_equal(Coords<dimension> & input, double divider)
```

```cpp
Defined at ../../include/geode/geometry/detail/point_operators.h#94
```

### coords_add_equal

```cpp
void coords_add_equal(Coords<dimension> & input, const Coords<dimension> & other)
```

```cpp
Defined at ../../include/geode/geometry/detail/point_operators.h#103
```

### coords_substract_equal

```cpp
void coords_substract_equal(Coords<dimension> & input, const Coords<dimension> & other)
```

```cpp
Defined at ../../include/geode/geometry/detail/point_operators.h#113
```

### geode_object_output_impl

```cpp
void geode_object_output_impl(string_view type, const Object & object, string_view filename)
```

```cpp
Defined at ../../include/geode/basic/detail/geode_output_impl.h#38
```

### update_default_name

```cpp
void update_default_name(Object & object, string_view filename)
```

```cpp
Defined at ../../include/geode/basic/detail/geode_input_impl.h#38
```

### update_default_name

```cpp
void update_default_name(std::unique_ptr<Object> & object, string_view filename)
```

```cpp
Defined at ../../include/geode/basic/detail/geode_input_impl.h#48
```

### geode_object_input_reader

```cpp
std::unique_ptr<typename Factory::BaseClass> geode_object_input_reader(absl::string_view & filename)
```

```cpp
Defined at ../../include/geode/basic/detail/geode_input_impl.h#59
```

### geode_object_input_impl

```cpp
typename Factory::BaseClass::InputData geode_object_input_impl(string_view type, string_view filename, Args... args)
```

```cpp
Defined at ../../include/geode/basic/detail/geode_input_impl.h#71
```

### add_to_message

```cpp
void add_to_message(std::string & message, geode::index_t nb_components, string_view component_text)
```

```cpp
Defined at ../../include/geode/basic/detail/geode_input_impl.h#83
```

### side

```cpp
Side side(const GEO::Sign & sign)
```

```cpp
Defined at ../../include/geode/geometry/private/predicates.h#598
```

### opposite_side

```cpp
Side opposite_side(const GEO::Sign & sign)
```

```cpp
Defined at ../../include/geode/geometry/private/predicates.h#611
```

### point_segment_position

```cpp
Position point_segment_position(const Side & s0, const Side & s1)
```

```cpp
Defined at ../../include/geode/geometry/private/position_from_sides.h#32
```

### point_segment_position

```cpp
Position point_segment_position(const Side & s0, const Side & s1, bool points_aligned)
```

```cpp
Defined at ../../include/geode/geometry/private/position_from_sides.h#49
```

### point_triangle_position

```cpp
Position point_triangle_position(Side s0, Side s1, Side s2)
```

```cpp
Defined at ../../include/geode/geometry/private/position_from_sides.h#59
```

### point_triangle_position

```cpp
Position point_triangle_position(Side s0, Side s1, Side s2, bool point_on_plane)
```

```cpp
Defined at ../../include/geode/geometry/private/position_from_sides.h#105
```

### point_tetrahedron_position

```cpp
Position point_tetrahedron_position(const std::array<GEO::Sign, 4> & signs)
```

```cpp
Defined at ../../include/geode/geometry/private/position_from_sides.h#115
```

### polygon_sort

```cpp
void polygon_sort(Container & vertices)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/vertex_cycle.h#48
```

### oriented_rotate

```cpp
void oriented_rotate(Container & vertices)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/vertex_cycle.h#55
```

### oriented_rotate

```cpp
void oriented_rotate(std::array<index_t, 2> & vertices)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/vertex_cycle.h#64
```

### remove_orientation

```cpp
void remove_orientation(Container & vertices)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/vertex_cycle.h#74
```

### AbslHashValue

```cpp
H AbslHashValue(H h, const VertexCycle<Container> & m)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/vertex_cycle.h#174
```

### AbslHashValue

```cpp
H AbslHashValue(H h, const OrientedVertexCycle<Container> & m)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/vertex_cycle.h#180
```

### oriented_rotate

```cpp
void oriented_rotate(std::array<index_t, 2> & vertices)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/vertex_cycle.h#64
```

### copy_points3d_into_2d

```cpp
void copy_points3d_into_2d(const MeshFrom & from, Builder & builder, index_t axis_to_remove)
```

```cpp
Defined at ../../include/geode/mesh/helpers/private/copy.h#40
```

### copy_points2d_into_3d

```cpp
void copy_points2d_into_3d(const MeshFrom & from, Builder & builder, index_t axis_to_add, double axis_coordinate)
```

```cpp
Defined at ../../include/geode/mesh/helpers/private/copy.h#57
```

### copy_points

```cpp
void copy_points(const MeshFrom & from, Builder & builder)
```

```cpp
Defined at ../../include/geode/mesh/helpers/private/copy.h#79
```

### copy_meta_info

```cpp
void copy_meta_info(const MeshFrom & from, Builder & builder)
```

```cpp
Defined at ../../include/geode/mesh/helpers/private/copy.h#89
```

### copy_attributes

```cpp
void copy_attributes(const AttributeManager & manager_in, AttributeManager & manager_out)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/private/copy.cpp#32
```

### copy_corner_components

```cpp
BijectiveMapping copy_corner_components(const ModelFrom & from, BuilderTo & builder_to)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#51
```

### copy_corner_components

```cpp
void copy_corner_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#69
```

### copy_line_components

```cpp
BijectiveMapping copy_line_components(const ModelFrom & from, BuilderTo & builder_to)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#95
```

### copy_line_components

```cpp
void copy_line_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#113
```

### copy_surface_components

```cpp
BijectiveMapping copy_surface_components(const ModelFrom & from, BuilderTo & builder_to)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#139
```

### copy_surface_components

```cpp
void copy_surface_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#157
```

### copy_block_components

```cpp
BijectiveMapping copy_block_components(const ModelFrom & from, BuilderTo & builder_to)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#184
```

### copy_block_components

```cpp
void copy_block_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#200
```

### copy_model_boundary_components

```cpp
BijectiveMapping copy_model_boundary_components(const Model & from, BuilderTo & builder_to)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#226
```

### copy_model_boundary_components

```cpp
void copy_model_boundary_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#241
```

### clone_meshes

```cpp
absl::FixedArray<std::pair<uuid, std::unique_ptr<Mesh> > > clone_meshes(Range && range, index_t nb_components)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#264
```

### copy_corner_geometry

```cpp
void copy_corner_geometry(const ModelFrom & from, const ModelTo & to, typename ModelTo::Builder & builder_to, const Mapping & corners)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#287
```

### copy_line_geometry

```cpp
void copy_line_geometry(const ModelFrom & from, const ModelTo & to, typename ModelTo::Builder & builder_to, const Mapping & lines)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#302
```

### copy_surface_geometry

```cpp
void copy_surface_geometry(const ModelFrom & from, const ModelTo & to, typename ModelTo::Builder & builder_to, const Mapping & surfaces)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#317
```

### copy_block_geometry

```cpp
void copy_block_geometry(const ModelFrom & from, const ModelTo & to, typename ModelTo::Builder & builder_to, const Mapping & blocks)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#332
```

### copy_vertex_identifier_components

```cpp
void copy_vertex_identifier_components(const Model & from, BuilderTo & builder_to, index_t first_new_unique_vertex_id, const ModelCopyMapping & mapping)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/copy.h#347
```

### surface_component_mesh_polygons

```cpp
flat_hash_map surface_component_mesh_polygons(const BRep & model, const PolygonVertices & polygon_unique_vertices)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/component_mesh_polygons.cpp#557
```

### block_component_mesh_polygons

```cpp
flat_hash_map block_component_mesh_polygons(const BRep & brep, const PolygonVertices & polygon_unique_vertices)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/component_mesh_polygons.cpp#595
```

### register_basic_pcontext

```cpp
void register_basic_pcontext(PContext & context)
```

```cpp
Defined at ../../include/geode/basic/detail/bitsery_archive.h#74
```

### build_model_boundaries

```cpp
void build_model_boundaries(const Section & model, SectionBuilder & builder)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/detail/build_model_boundaries.cpp#75
```

### build_model_boundaries

```cpp
void build_model_boundaries(const BRep & model, BRepBuilder & builder)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/detail/build_model_boundaries.cpp#91
```

### count_relationships

```cpp
index_t count_relationships(const Range & range)
```

```cpp
Defined at ../../include/geode/model/mixin/core/detail/count_relationships.h#31
```

### is_component_supported

```cpp
bool is_component_supported(const ComponentType & component_type)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/filter.h#34
```

### is_component_supported

```cpp
bool is_component_supported(const ComponentType & component_type)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/filter.h#40
```

### filter_unsupported_components

```cpp
void filter_unsupported_components(Model & model)
```

```cpp
Defined at ../../include/geode/model/representation/builder/detail/filter.h#66
```

### line_component_mesh_edges

```cpp
flat_hash_map line_component_mesh_edges(const Model & model, const std::array<index_t, 2> & edge_unique_vertices)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/component_mesh_edges.cpp#113
```

### surface_component_mesh_edges

```cpp
flat_hash_map surface_component_mesh_edges(const Model & model, const std::array<index_t, 2> & edge_unique_vertices)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/component_mesh_edges.cpp#150
```

### block_component_mesh_edges

```cpp
flat_hash_map block_component_mesh_edges(const BRep & brep, const std::array<index_t, 2> & edge_unique_vertices)
```

```cpp
Defined at /github/workspace/src/geode/model/helpers/component_mesh_edges.cpp#181
```

### shape_function_value

```cpp
double shape_function_value(const typename Grid<dimension>::CellIndices & cell_id, local_index_t node_id, const Point<dimension> & point_in_grid)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/private/regular_grid_shape_function.cpp#66
```

### register_inlinedvector

```cpp
void register_inlinedvector(PContext & context, string_view type)
```

```cpp
Defined at ../../include/geode/geometry/detail/bitsery_archive.h#36
```

### register_geometry_pcontext

```cpp
void register_geometry_pcontext(PContext & context)
```

```cpp
Defined at ../../include/geode/geometry/detail/bitsery_archive.h#71
```

### segment_intersection_detection

```cpp
Position segment_intersection_detection(const Side & s0, const Side & s1)
```

```cpp
Defined at ../../include/geode/geometry/private/intersection_from_sides.h#32
```

### triangle_intersection_detection

```cpp
Position triangle_intersection_detection(Side s0, Side s1, Side s2)
```

```cpp
Defined at ../../include/geode/geometry/private/intersection_from_sides.h#54
```



