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
vector mapping_after_deletion(const std::vector<_Bool> & to_delete)
```


### coords_multiply

```cpp
Coords<dimension> coords_multiply(const Coords<dimension> & input, double multiplier)
```


### coords_divide

```cpp
Coords<dimension> coords_divide(const Coords<dimension> & input, double divider)
```


### coords_add

```cpp
Coords<dimension> coords_add(const Coords<dimension> & input, const Coords<dimension> & other)
```


### coords_substract

```cpp
Coords<dimension> coords_substract(const Coords<dimension> & input, const Coords<dimension> & other)
```


### coords_multiply_equal

```cpp
void coords_multiply_equal(Coords<dimension> & input, double multiplier)
```


### coords_divide_equal

```cpp
void coords_divide_equal(Coords<dimension> & input, double divider)
```


### coords_add_equal

```cpp
void coords_add_equal(Coords<dimension> & input, const Coords<dimension> & other)
```


### coords_substract_equal

```cpp
void coords_substract_equal(Coords<dimension> & input, const Coords<dimension> & other)
```


### geode_object_output_impl

```cpp
void geode_object_output_impl(string_view type, const Object & object, string_view filename)
```


### update_default_name

```cpp
void update_default_name(Object & object, string_view filename)
```


### update_default_name

```cpp
void update_default_name(std::unique_ptr<Object> & object, string_view filename)
```


### geode_object_input_reader

```cpp
std::unique_ptr<typename Factory::BaseClass> geode_object_input_reader(absl::string_view & filename)
```


### geode_object_input_impl

```cpp
typename Factory::BaseClass::InputData geode_object_input_impl(string_view type, string_view filename, Args... args)
```


### add_to_message

```cpp
void add_to_message(std::string & message, geode::index_t nb_components, string_view component_text)
```


### side

```cpp
Side side(const GEO::Sign & sign)
```


### opposite_side

```cpp
Side opposite_side(const GEO::Sign & sign)
```


### point_segment_position

```cpp
Position point_segment_position(const Side & s0, const Side & s1)
```


### point_segment_position

```cpp
Position point_segment_position(const Side & s0, const Side & s1, _Bool points_aligned)
```


### point_triangle_position

```cpp
Position point_triangle_position(Side s0, Side s1, Side s2)
```


### point_triangle_position

```cpp
Position point_triangle_position(Side s0, Side s1, Side s2, _Bool point_on_plane)
```


### point_tetrahedron_position

```cpp
Position point_tetrahedron_position(const std::array<GEO::Sign, 4> & signs)
```


### polygon_sort

```cpp
void polygon_sort(Container & vertices)
```


### oriented_rotate

```cpp
void oriented_rotate(Container & vertices)
```


### oriented_rotate

```cpp
void oriented_rotate(std::array<index_t, 2> & vertices)
```


### remove_orientation

```cpp
void remove_orientation(Container & vertices)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const VertexCycle<Container> & m)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const OrientedVertexCycle<Container> & m)
```


### oriented_rotate

```cpp
void oriented_rotate(std::array<index_t, 2> & vertices)
```


### copy_points3d_into_2d

```cpp
void copy_points3d_into_2d(const MeshFrom & from, Builder & builder, index_t axis_to_remove)
```


### copy_points2d_into_3d

```cpp
void copy_points2d_into_3d(const MeshFrom & from, Builder & builder, index_t axis_to_add, double axis_coordinate)
```


### copy_points

```cpp
void copy_points(const MeshFrom & from, Builder & builder)
```


### copy_meta_info

```cpp
void copy_meta_info(const MeshFrom & from, Builder & builder)
```


### copy_attributes

```cpp
void copy_attributes(const AttributeManager & manager_in, AttributeManager & manager_out)
```


### copy_corner_components

```cpp
BijectiveMapping copy_corner_components(const ModelFrom & from, BuilderTo & builder_to)
```


### copy_corner_components

```cpp
void copy_corner_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_line_components

```cpp
BijectiveMapping copy_line_components(const ModelFrom & from, BuilderTo & builder_to)
```


### copy_line_components

```cpp
void copy_line_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_surface_components

```cpp
BijectiveMapping copy_surface_components(const ModelFrom & from, BuilderTo & builder_to)
```


### copy_surface_components

```cpp
void copy_surface_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_block_components

```cpp
BijectiveMapping copy_block_components(const ModelFrom & from, BuilderTo & builder_to)
```


### copy_block_components

```cpp
void copy_block_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_model_boundary_components

```cpp
BijectiveMapping copy_model_boundary_components(const Model & from, BuilderTo & builder_to)
```


### copy_model_boundary_components

```cpp
void copy_model_boundary_components(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### clone_meshes

```cpp
absl::FixedArray<std::pair<uuid, std::unique_ptr<Mesh> > > clone_meshes(Range && range, index_t nb_components)
```


### copy_corner_geometry

```cpp
void copy_corner_geometry(const ModelFrom & from, const ModelTo & to, typename ModelTo::Builder & builder_to, const Mapping & corners)
```


### copy_line_geometry

```cpp
void copy_line_geometry(const ModelFrom & from, const ModelTo & to, typename ModelTo::Builder & builder_to, const Mapping & lines)
```


### copy_surface_geometry

```cpp
void copy_surface_geometry(const ModelFrom & from, const ModelTo & to, typename ModelTo::Builder & builder_to, const Mapping & surfaces)
```


### copy_block_geometry

```cpp
void copy_block_geometry(const ModelFrom & from, const ModelTo & to, typename ModelTo::Builder & builder_to, const Mapping & blocks)
```


### copy_vertex_identifier_components

```cpp
void copy_vertex_identifier_components(const Model & from, BuilderTo & builder_to, index_t first_new_unique_vertex_id, const ModelCopyMapping & mapping)
```


### register_basic_pcontext

```cpp
void register_basic_pcontext(PContext & context)
```


### build_model_boundaries

```cpp
void build_model_boundaries(const Section & model, SectionBuilder & builder)
```


### build_model_boundaries

```cpp
void build_model_boundaries(const BRep & model, BRepBuilder & builder)
```


### count_relationships

```cpp
index_t count_relationships(const Range & range)
```


### is_component_supported

```cpp
_Bool is_component_supported(const ComponentType & component_type)
```


### is_component_supported

```cpp
_Bool is_component_supported(const ComponentType & component_type)
```


### filter_unsupported_components

```cpp
void filter_unsupported_components(Model & model)
```


### line_component_mesh_edges

```cpp
flat_hash_map line_component_mesh_edges(const Model & model, const std::array<index_t, 2> & edge_unique_vertices)
```


### surface_component_mesh_edges

```cpp
flat_hash_map surface_component_mesh_edges(const Model & model, const std::array<index_t, 2> & edge_unique_vertices)
```


### block_component_mesh_edges

```cpp
flat_hash_map block_component_mesh_edges(const BRep & brep, const std::array<index_t, 2> & edge_unique_vertices)
```


### shape_function_value

```cpp
double shape_function_value(const typename Grid<dimension>::CellIndices & cell_id, local_index_t node_id, const Point<dimension> & point_in_grid)
```


### register_inlinedvector

```cpp
void register_inlinedvector(PContext & context, string_view type)
```


### register_geometry_pcontext

```cpp
void register_geometry_pcontext(PContext & context)
```


### segment_intersection_detection

```cpp
Position segment_intersection_detection(const Side & s0, const Side & s1)
```


### triangle_intersection_detection

```cpp
Position triangle_intersection_detection(Side s0, Side s1, Side s2)
```




