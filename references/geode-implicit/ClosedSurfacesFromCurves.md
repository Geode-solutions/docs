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

# class ClosedSurfacesFromCurves


## Functions

### ClosedSurfacesFromCurves

```cpp
public void ClosedSurfacesFromCurves()
```


### ClosedSurfacesFromCurves

```cpp
public void ClosedSurfacesFromCurves(ClosedSurfacesFromCurves && other)
```


### ~ClosedSurfacesFromCurves

```cpp
public void ~ClosedSurfacesFromCurves()
```


### add_closed_curve_data

```cpp
public void add_closed_curve_data(const EdgedCurve3D & curve, double min_distance, double weight)
```


### build

```cpp
public vector build(const ImplicitationParameters & computation_parameters)
```




