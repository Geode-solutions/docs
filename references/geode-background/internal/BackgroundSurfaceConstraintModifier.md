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


## Records

Constraints

OrientedEdgeVertices

CollapseEdgeInfo

SplitInfo

RemoveAdjacencyInfo



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
public void BackgroundSurfaceConstraintModifier(ModifiableObject surface, BackgroundSurfaceBuilder & builder, Constraints constraints)
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


### surface

```cpp
public const ModifiableBackgroundSurface & surface()
```


### surface

```cpp
public ModifiableBackgroundSurface & surface()
```


### constraints

```cpp
public const Constraints & constraints()
```


### constraints

```cpp
public Constraints & constraints()
```


### collapse_edge

```cpp
public CollapseEdgeInfo collapse_edge(const PolygonEdge & edge, const OrientedEdgeVertices & edge_vertices)
```


### split_edge

```cpp
public SplitInfo split_edge(const PolygonEdge & edge, const Point2D & point)
```


### swap_edge

```cpp
public vector swap_edge(const PolygonEdge & edge)
```


### split_collapse_edge

```cpp
public SplitInfo split_collapse_edge(const PolygonEdge & edge)
```


### split_collapse_edge

```cpp
public SplitInfo split_collapse_edge(const PolygonEdge & edge, const Point2D & point)
```


### remove_double_adjacency

```cpp
public RemoveAdjacencyInfo remove_double_adjacency(index_t vertex)
```




