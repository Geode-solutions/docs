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

# class TriangulatedSurfaceConstraintModifier


```cpp
Inherits from ConstraintModifier
```



## Functions

### TriangulatedSurfaceConstraintModifier

```cpp
public void TriangulatedSurfaceConstraintModifier<dimension>(const TriangulatedSurfaceConstraintModifier<dimension> & )
```


### operator=

```cpp
public TriangulatedSurfaceConstraintModifier<dimension> & operator=(const TriangulatedSurfaceConstraintModifier<dimension> & )
```


### TriangulatedSurfaceConstraintModifier

```cpp
public void TriangulatedSurfaceConstraintModifier<dimension>(ModifiableTriangulatedSurface<dimension> surface, CommonConstraints constraints)
```


### TriangulatedSurfaceConstraintModifier

```cpp
public void TriangulatedSurfaceConstraintModifier<dimension>(TriangulatedSurfaceConstraintModifier<dimension> && other)
```


### operator=

```cpp
public TriangulatedSurfaceConstraintModifier<dimension> & operator=(TriangulatedSurfaceConstraintModifier<dimension> && other)
```


### ~TriangulatedSurfaceConstraintModifier

```cpp
public void ~TriangulatedSurfaceConstraintModifier<dimension>()
```


### modifiable_surface

```cpp
public const ModifiableTriangulatedSurface<dimension> & modifiable_surface()
```


### modifiable_surface

```cpp
public ModifiableTriangulatedSurface<dimension> & modifiable_surface()
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


### collapse_edge

```cpp
public CollapseEdgeInfo collapse_edge(const PolygonEdge & edge, const Point<dimension> & point)
```


### split_edge

```cpp
public SplitInfo split_edge(const PolygonEdge & edge, const Point<dimension> & point)
```


### swap_edge

```cpp
public vector swap_edge(const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```


### split_collapse_edge

```cpp
public SplitInfo split_collapse_edge(const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```


### split_collapse_edge

```cpp
public SplitInfo split_collapse_edge(const PolygonEdge & edge, const Point<dimension> & point, const std::optional<PolygonVertex> & tshape_apex)
```


### remove_double_adjacency

```cpp
public RemoveAdjacencyInfo remove_double_adjacency(index_t vertex)
```


### do_remove_double_adjacency

```cpp
protected RemoveAdjacencyInfo do_remove_double_adjacency(index_t vertex, bool keep_vertex)
```




# class TriangulatedSurfaceConstraintModifier


```cpp
Inherits from ConstraintModifier
```



# class TriangulatedSurfaceConstraintModifier


```cpp
Inherits from ConstraintModifier
```



