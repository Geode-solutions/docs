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

# class BackgroundSurfaceInserter


## Records

Impl



## Functions

### BackgroundSurfaceInserter

```cpp
public void BackgroundSurfaceInserter(BackgroundSurface & background)
```


### ~BackgroundSurfaceInserter

```cpp
public void ~BackgroundSurfaceInserter()
```


### insert_curve

```cpp
public void insert_curve(const EdgedCurve2D & mesh)
```


### insert_curve_edges

```cpp
public void insert_curve_edges(const EdgedCurve2D & mesh, Span edges_ids)
```


### insert_point_set

```cpp
public void insert_point_set(const PointSet2D & mesh)
```


### insert_point_set_points

```cpp
public void insert_point_set_points(const PointSet2D & mesh, Span vertex_ids)
```


### insert_scalar_function_isovalues

```cpp
public void insert_scalar_function_isovalues(string_view function_name, absl::Span<const double> isovalues)
```




