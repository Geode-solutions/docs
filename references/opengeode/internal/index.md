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
* [ComponentsExistenceChecker](ComponentsExistenceChecker.md)
* [ComponentsTypesChecker](ComponentsTypesChecker.md)
* [EdgesImpl](EdgesImpl.md)
* [FacetEdgesImpl](FacetEdgesImpl.md)
* [GridImpl](GridImpl.md)
* [LazyPolyhedraAroundVertexCache](LazyPolyhedraAroundVertexCache.md)
* [MeshComponentsRegistrator](MeshComponentsRegistrator.md)
* [ModelComponentGetter](ModelComponentGetter.md)
* [PivotNormalResult](PivotNormalResult.md)
* [PointsImpl](PointsImpl.md)
* [PolygonsAroundVertexImpl](PolygonsAroundVertexImpl.md)
* [PolyhedraAroundVertexImpl](PolyhedraAroundVertexImpl.md)
* [RayTracingPolygonFeature](RayTracingPolygonFeature.md)
* [RayTracingPolygonHit](RayTracingPolygonHit.md)
* [SimplicialModelCreator](SimplicialModelCreator.md)
* [TextureImpl](TextureImpl.md)
* [TrianglePivotCache](TrianglePivotCache.md)


## Functions

### segment_intersection_detection

```cpp
POSITION segment_intersection_detection(const SIDE & s0, const SIDE & s1)
```


### point_segment_position

```cpp
POSITION point_segment_position(const SIDE & s0, const SIDE & s1)
```


### get_model_component

```cpp
const Component<Model::dim> & get_model_component(const Model & model, const uuid & component_id)
```


### is_component_supported

```cpp
bool is_component_supported(const ComponentType & component_type)
```


### copy_points3d_into_2d

```cpp
void copy_points3d_into_2d(const MeshFrom & from, Builder & builder, local_index_t axis_to_remove)
```


### next_filtered_internal_iterator

```cpp
void next_filtered_internal_iterator(Iterator & iterator)
```


### point_segment_position

```cpp
POSITION point_segment_position(const SIDE & s0, const SIDE & s1, bool points_aligned)
```


### next_filtered_embedding_iterator

```cpp
void next_filtered_embedding_iterator(Iterator & iterator)
```


### triangle_intersection_detection

```cpp
POSITION triangle_intersection_detection(const SIDE s0, const SIDE s1, const SIDE s2)
```


### local_cell_node_is_on_axis_origin

```cpp
bool local_cell_node_is_on_axis_origin(geode::local_index_t node_id, geode::local_index_t axis_id)
```


### copy_points2d_into_3d

```cpp
void copy_points2d_into_3d(const MeshFrom & from, Builder & builder, local_index_t axis_to_add, double axis_coordinate)
```


### point_triangle_position

```cpp
POSITION point_triangle_position(const SIDE s0, const SIDE s1, const SIDE s2)
```


### shape_function_value

```cpp
double shape_function_value(const typename Grid<dimension>::CellIndices & cell_id, local_index_t node_id, const Point<dimension> & point_in_grid)
```


### has_mixin_component

```cpp
bool has_mixin_component(const Model & model, const uuid & component_id)
```


### has_at_least_n_boundaries

```cpp
bool has_at_least_n_boundaries(const Model & model, const uuid & component_id, index_t nb_boundaries)
```


 Return true if the component has at least the given number of boundaries. Stop iterating as soon as this number is reached.

### copy_points

```cpp
void copy_points(const MeshFrom & from, Builder & builder)
```


### estimate_nb_facets

```cpp
index_t estimate_nb_facets(const SolidMesh<dimension> & solid)
```


 Estimate the number of facets of a solid: each inner facet is shared by 2 polyhedra, with a margin for border facets

### gradient_shape_function_value

```cpp
double gradient_shape_function_value(const typename Grid<dimension>::CellIndices & cell_id, local_index_t node_id, const Point<dimension> & point_in_grid, local_index_t derivative_direction)
```


### copy_meta_info

```cpp
void copy_meta_info(const MeshFrom & from, Builder & builder)
```


### meshes_bounding_box

```cpp
std::optional<BoundingBox<dimension>> meshes_bounding_box(MeshComponentRange range)
```


 Return the bounding box of the non-empty meshes of the given components (computed in parallel), std::nullopt if all meshes are empty.

### point_triangle_position

```cpp
POSITION point_triangle_position(const SIDE s0, const SIDE s1, const SIDE s2, bool point_on_plane)
```


### point_tetrahedron_position

```cpp
POSITION point_tetrahedron_position(const std::array<GEO::SIGN, 4> & signs)
```


### register_mesh_components

```cpp
void register_mesh_components(const Model & model, typename Model::Builder & builder)
```


### register_collection_components

```cpp
void register_collection_components(const Model & model, typename Model::Builder & builder)
```


### point_tetrahedron_facet_sign

```cpp
GEO::SIGN point_tetrahedron_facet_sign(const Point3D & point, const Tetrahedron & tetra, local_index_t facet)
```


### compute_surface_scalar_function_gradient

```cpp
std::tuple<uuid, std::vector<index_t>> compute_surface_scalar_function_gradient(const SurfaceMesh<dimension> & mesh, const uuid & scalar_function_id, absl::Span<const index_t> no_value_vertices)
```


### tetrahedron_orientation

```cpp
GEO::SIGN tetrahedron_orientation(const Tetrahedron & tetra)
```


### compute_solid_scalar_function_gradient

```cpp
std::tuple<uuid, std::vector<index_t>> compute_solid_scalar_function_gradient(const SolidMesh3D & mesh, const uuid & scalar_function_id, absl::Span<const index_t> no_value_vertices)
```


### copy_attributes

```cpp
void copy_attributes(const AttributeManager & manager_in, AttributeManager & manager_out)
```


### point_tetrahedron_facet_inner_sign

```cpp
GEO::SIGN point_tetrahedron_facet_inner_sign(const Point3D & point, const Tetrahedron & tetra, local_index_t facet, GEO::SIGN orientation)
```


### side

```cpp
SIDE side(const GEO::SIGN & sign)
```


### opposite_side

```cpp
SIDE opposite_side(const GEO::SIGN & sign)
```




