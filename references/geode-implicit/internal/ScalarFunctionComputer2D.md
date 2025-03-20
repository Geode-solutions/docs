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

# class ScalarFunctionComputer2D


```cpp
Inherits from ScalarFunctionComputer<2>
```



## Functions

### ScalarFunctionComputer2D

```cpp
public void ScalarFunctionComputer2D(const BoundingBox2D & computation_bbox, const DataConstraintsManager2D & constraints_manager)
```


### ~ScalarFunctionComputer2D

```cpp
public void ~ScalarFunctionComputer2D()
```


### add_computation_boundary

```cpp
public void add_computation_boundary(const EdgedCurve2D & boundary_line)
```


### add_internal_discontinuity

```cpp
public void add_internal_discontinuity(const EdgedCurve2D & discontinuity_line)
```


### grid_with_results

```cpp
public const CutSurfaceGrid & grid_with_results()
```




