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
Inherits from TriangulatedSurfaceModifier2D
```



## Functions

### BackgroundSurfaceModifier

```cpp
public void BackgroundSurfaceModifier(const BackgroundSurface & mesh, BackgroundSurfaceBuilder & builder)
```


### ~BackgroundSurfaceModifier

```cpp
public void ~BackgroundSurfaceModifier()
```


### split_triangle

```cpp
public SplitTriangleInfo split_triangle(index_t triangle_id, const Point2D & point)
```


### split_edge

```cpp
public SplitPolygonEdgeInfo split_edge(const PolygonEdge & edge, const Point2D & point)
```


### collapse_edge

```cpp
public CollapseEdgeInfo collapse_edge(index_t edge_id, const Point2D & point)
```


### clean

```cpp
public CleanMappings clean()
```


### BackgroundSurfaceModifier

```cpp
public void BackgroundSurfaceModifier(const VertexSet & surface, VertexSetBuilder & builder, MeshModifierFactoryKey key)
```



