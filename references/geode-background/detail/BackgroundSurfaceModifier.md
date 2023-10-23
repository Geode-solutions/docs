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

# class BackgroundSurfaceModifier


```cpp
Inherits from BackgroundSurfaceBuilder
```



## Functions

### BackgroundSurfaceModifier

```cpp
public void BackgroundSurfaceModifier(BackgroundSurface & mesh)
```


### ~BackgroundSurfaceModifier

```cpp
public void ~BackgroundSurfaceModifier()
```


### split_triangle

```cpp
public int split_triangle(index_t triangle_id, const Point2D & point)
```


### split_edge

```cpp
public int split_edge(const PolygonEdge & edge, const Point2D & point)
```


### collapse_edge

```cpp
public int collapse_edge(index_t edge_id, const Point2D & point)
```


### clean_background_surface

```cpp
public void clean_background_surface()
```




