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

# class CrossSectionSurfaceImpliciter


## Functions

### CrossSectionSurfaceImpliciter

```cpp
public void CrossSectionSurfaceImpliciter(const CrossSection & model, const Surface2D & surface)
```


### CrossSectionSurfaceImpliciter

```cpp
public void CrossSectionSurfaceImpliciter(CrossSectionSurfaceImpliciter && surface_modeler)
```


### ~CrossSectionSurfaceImpliciter

```cpp
public void ~CrossSectionSurfaceImpliciter()
```


### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const Horizon2D & horizon, double implicit_value)
```


### add_horizon_points_data

```cpp
public void add_horizon_points_data(const Horizon2D & horizon, const PointSet2D & points_data, double weight)
```


### add_horizon_curve_data

```cpp
public void add_horizon_curve_data(const Horizon2D & horizon, const EdgedCurve2D & curve_data, double weight)
```


### compute_implicit_function

```cpp
public void compute_implicit_function()
```


### interpolate_function_on_mesh

```cpp
public void interpolate_function_on_mesh()
```




