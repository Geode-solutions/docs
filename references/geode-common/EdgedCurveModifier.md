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

# class EdgedCurveModifier


```cpp
Inherits from GraphModifier
```



# class EdgedCurveModifier


```cpp
Inherits from GraphModifier
```



# class EdgedCurveModifier


```cpp
Inherits from GraphModifier
```



## Functions

### EdgedCurveModifier

```cpp
public void EdgedCurveModifier<dimension>(const EdgedCurve<dimension> & curve, EdgedCurveBuilder<dimension> & builder)
```


### EdgedCurveModifier

```cpp
public void EdgedCurveModifier<dimension>(EdgedCurveModifier<dimension> && other)
```


### operator=

```cpp
public EdgedCurveModifier<dimension> & operator=(EdgedCurveModifier<dimension> && other)
```


### ~EdgedCurveModifier

```cpp
public void ~EdgedCurveModifier<dimension>()
```


### collapse_edge

```cpp
public CollapseEdgeInfo collapse_edge(index_t edge_id, const Point<dimension> & point)
```


 Collapse an edge.

**edge_id** [in] Index of the edge to collapse.

**point** [in] Coordinates of the collapse point.

**return** the index of the collapse vertex.

### split_edge

```cpp
public SplitEdgeInfo split_edge(index_t edge_id, const Point<dimension> & point)
```


 Split an edge.

**edge_id** [in] Index of the edge to split.

**point** [in] Coordinates of the new point.

**return** the index of the new vertex.

### move_point

```cpp
public void move_point(index_t vertex, const Point<dimension> & point)
```


### EdgedCurveModifier

```cpp
public void EdgedCurveModifier<dimension>(const VertexSet & curve, VertexSetBuilder & builder, MeshModifierFactoryKey key)
```


### curve

```cpp
protected const EdgedCurve<dimension> & curve()
```


### builder

```cpp
protected EdgedCurveBuilder<dimension> & builder()
```




# class EdgedCurveModifier


```cpp
Inherits from GraphModifier
```



