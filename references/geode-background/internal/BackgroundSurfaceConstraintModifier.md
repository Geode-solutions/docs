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

# class BackgroundSurfaceConstraintModifier


```cpp
Inherits from TriangulatedSurfaceConstraintModifier2D
```



## Functions

### BackgroundSurfaceConstraintModifier

```cpp
public void BackgroundSurfaceConstraintModifier(const BackgroundSurfaceConstraintModifier & )
```


### operator=

```cpp
public BackgroundSurfaceConstraintModifier & operator=(const BackgroundSurfaceConstraintModifier & )
```


### BackgroundSurfaceConstraintModifier

```cpp
public void BackgroundSurfaceConstraintModifier(ModifiableObject surface, BackgroundSurfaceBuilder & builder, CommonConstraints constraints)
```


### BackgroundSurfaceConstraintModifier

```cpp
public void BackgroundSurfaceConstraintModifier(BackgroundSurfaceConstraintModifier && other)
```


### operator=

```cpp
public BackgroundSurfaceConstraintModifier & operator=(BackgroundSurfaceConstraintModifier && other)
```


### ~BackgroundSurfaceConstraintModifier

```cpp
public void ~BackgroundSurfaceConstraintModifier()
```


### modifiable_background

```cpp
public const ModifiableBackgroundSurface & modifiable_background()
```


### modifiable_background

```cpp
public ModifiableBackgroundSurface & modifiable_background()
```


### background_builder

```cpp
public BackgroundSurfaceBuilder & background_builder()
```


### swap_edge

```cpp
public vector swap_edge(const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```


### split_collapse_edge

```cpp
public SplitInfo split_collapse_edge(const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```


### remove_double_adjacency

```cpp
public RemoveAdjacencyInfo remove_double_adjacency(index_t vertex)
```




