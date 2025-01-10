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

* [ScalarFunctionExtrapolationInfo](ScalarFunctionExtrapolationInfo.md)


## Functions

### extrapolate_surface_mesh_scalar_function

```cpp
void extrapolate_surface_mesh_scalar_function(const SurfaceMesh<dimension> & surface_mesh, basic_string_view scalar_function_name, Span undefined_vertices)
```


### extrapolate_solid_mesh_scalar_function

```cpp
void extrapolate_solid_mesh_scalar_function(const SolidMesh3D & solid_mesh, basic_string_view scalar_function_name, Span undefined_vertices)
```


### extrapolate_surface_mesh_scalar_function

```cpp
void extrapolate_surface_mesh_scalar_function(const SurfaceMesh<dimension> & surface_mesh, const ScalarFunctionExtrapolationInfo & extrapolation_info)
```


### extrapolate_solid_mesh_scalar_function

```cpp
void extrapolate_solid_mesh_scalar_function(const SolidMesh3D & solid_mesh, const ScalarFunctionExtrapolationInfo & extrapolation_info)
```


### compute_cell_size

```cpp
double compute_cell_size(geode::BoundingBox<dimension> bbox, const geode::DataPointsManager<dimension> & data, bool dense_data)
```




