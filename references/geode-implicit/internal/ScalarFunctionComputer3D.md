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

# class ScalarFunctionComputer3D


```cpp
Inherits from ScalarFunctionComputer<3>
```



## Functions

### ScalarFunctionComputer3D

```cpp
public void ScalarFunctionComputer3D(const BoundingBox3D & computation_bbox, const DataConstraintsManager3D & constraints_manager)
```


### ~ScalarFunctionComputer3D

```cpp
public void ~ScalarFunctionComputer3D()
```


### add_computation_boundary

```cpp
public void add_computation_boundary(const TriangulatedSurface3D & boundary_surface)
```


### add_internal_discontinuity

```cpp
public void add_internal_discontinuity(const TriangulatedSurface3D & discontinuity_surface)
```


### grid_with_results

```cpp
public const CutSolidGrid & grid_with_results()
```




