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

# class StructuralModelBlockImpliciter


## Functions

### StructuralModelBlockImpliciter

```cpp
public void StructuralModelBlockImpliciter(const StructuralModel & structural_model, const Block3D & block)
```


### StructuralModelBlockImpliciter

```cpp
public void StructuralModelBlockImpliciter(StructuralModelBlockImpliciter && block_modeler)
```


### ~StructuralModelBlockImpliciter

```cpp
public void ~StructuralModelBlockImpliciter()
```


### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const Horizon3D & horizon, double implicit_value)
```


### add_horizon_points_data

```cpp
public void add_horizon_points_data(const Horizon3D & horizon, const PointSet3D & points_data, double weight)
```


### add_horizon_curve_data

```cpp
public void add_horizon_curve_data(const Horizon3D & horizon, const EdgedCurve3D & curve_data, double weight)
```


### add_horizon_surface_data

```cpp
public void add_horizon_surface_data(const Horizon3D & horizon, const SurfaceMesh3D & surface_data, double weight)
```


### compute_target_grid_length

```cpp
public double compute_target_grid_length()
```


### compute_implicit_function

```cpp
public void compute_implicit_function(double function_value_interval, const ImplicitationParameters & computation_parameters)
```


### interpolate_function_on_mesh

```cpp
public void interpolate_function_on_mesh()
```


### create_mesh_with_function_in_block

```cpp
public void create_mesh_with_function_in_block(ImplicitStructuralModelBuilder & builder, Span values_to_densify_around)
```




