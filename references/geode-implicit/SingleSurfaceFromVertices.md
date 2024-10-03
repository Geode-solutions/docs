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

# class SingleSurfaceFromVertices


## Functions

### SingleSurfaceFromVertices

```cpp
public void SingleSurfaceFromVertices()
```


### SingleSurfaceFromVertices

```cpp
public void SingleSurfaceFromVertices(SingleSurfaceFromVertices && other)
```


### ~SingleSurfaceFromVertices

```cpp
public void ~SingleSurfaceFromVertices()
```


### add_data_points

```cpp
public void add_data_points(const PointSet3D & data_points, double min_distance, double weight)
```


### add_data_curve

```cpp
public void add_data_curve(const EdgedCurve3D & data_curve, double min_distance, double weight)
```


### add_outline

```cpp
public void add_outline(const EdgedCurve3D & outline)
```


### build

```cpp
public unique_ptr build(bool dense_data)
```




