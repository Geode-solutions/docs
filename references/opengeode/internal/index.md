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



## Records

* [ArrayImpl](ArrayImpl.md)
* [CollectionComponentsRegistrator](CollectionComponentsRegistrator.md)
* [ComponentsTypesChecker](ComponentsTypesChecker.md)
* [EdgesImpl](EdgesImpl.md)
* [FacetEdgesImpl](FacetEdgesImpl.md)
* [GridImpl](GridImpl.md)
* [MeshComponentsRegistrator](MeshComponentsRegistrator.md)
* [PointsImpl](PointsImpl.md)
* [PolygonsAroundVertexImpl](PolygonsAroundVertexImpl.md)
* [PolyhedraAroundVertexImpl](PolyhedraAroundVertexImpl.md)
* [SimplicialModelCreator](SimplicialModelCreator.md)
* [TextureImpl](TextureImpl.md)


## Functions

### side

```cpp
SIDE side(const GEO::SIGN & sign)
```


### opposite_side

```cpp
SIDE opposite_side(const GEO::SIGN & sign)
```


### segment_intersection_detection

```cpp
POSITION segment_intersection_detection(const SIDE & s0, const SIDE & s1)
```


### triangle_intersection_detection

```cpp
POSITION triangle_intersection_detection(SIDE s0, SIDE s1, SIDE s2)
```


### is_component_supported

```cpp
bool is_component_supported(const ComponentType & component_type)
```


### register_mesh_components

```cpp
void register_mesh_components(const Model & model, typename Model::Builder & builder)
```


### register_collection_components

```cpp
void register_collection_components(const Model & model, typename Model::Builder & builder)
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


### local_cell_node_is_on_axis_origin

```cpp
bool local_cell_node_is_on_axis_origin(geode::local_index_t node_id, geode::local_index_t axis_id)
```


### shape_function_value

```cpp
double shape_function_value(const typename Grid<dimension>::CellIndices & cell_id, local_index_t node_id, const Point<dimension> & point_in_grid)
```


### gradient_shape_function_value

```cpp
double gradient_shape_function_value(const typename Grid<dimension>::CellIndices & cell_id, local_index_t node_id, const Point<dimension> & point_in_grid, local_index_t derivative_direction)
```


### point_segment_position

```cpp
POSITION point_segment_position(const SIDE & s0, const SIDE & s1)
```


### point_segment_position

```cpp
POSITION point_segment_position(const SIDE & s0, const SIDE & s1, bool points_aligned)
```


### point_triangle_position

```cpp
POSITION point_triangle_position(SIDE s0, SIDE s1, SIDE s2)
```


### point_triangle_position

```cpp
POSITION point_triangle_position(SIDE s0, SIDE s1, SIDE s2, bool point_on_plane)
```


### point_tetrahedron_position

```cpp
POSITION point_tetrahedron_position(const std::array<GEO::SIGN, 4> & signs)
```


### next_filtered_internal_iterator

```cpp
void next_filtered_internal_iterator(Iterator & iterator)
```


### next_filtered_embedding_iterator

```cpp
void next_filtered_embedding_iterator(Iterator & iterator)
```


### meshes_bounding_box

```cpp
BoundingBox<dimension> meshes_bounding_box(MeshComponentRange range)
```


### compute_surface_scalar_function_gradient

```cpp
tuple compute_surface_scalar_function_gradient(const SurfaceMesh<dimension> & mesh, basic_string_view scalar_function_name, Span no_value_vertices)
```


### compute_solid_scalar_function_gradient

```cpp
tuple compute_solid_scalar_function_gradient(const SolidMesh3D & mesh, basic_string_view scalar_function_name, Span no_value_vertices)
```


### shape_function_value

```cpp
double shape_function_value(const typename Grid<dimension>::CellIndices & cell_id, local_index_t node_id, const Point<dimension> & point_in_grid)
```

### gradient_shape_function_value

```cpp
double gradient_shape_function_value(const typename Grid<dimension>::CellIndices & cell_id, local_index_t node_id, const Point<dimension> & point_in_grid, local_index_t derivative_direction)
```



