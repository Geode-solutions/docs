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

# class EdgedCurveModifier


```cpp
Inherits from VerticesModifier
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


### ~EdgedCurveModifier

```cpp
public void ~EdgedCurveModifier<dimension>()
```


### is_edge_active

```cpp
public bool is_edge_active(index_t edge_id)
```


### collapse_edge

```cpp
public index_t collapse_edge(index_t edge_id, const Point<dimension> & point)
```


 Collapse an edge.

**edge_id** [in] Index of the edge to collapse.

**point** [in] Coordinates of the collapse point.

**return** the index of the collapse vertex.

### split_edge

```cpp
public index_t split_edge(index_t edge_id, const Point<dimension> & point)
```


 Split an edge.

**edge_id** [in] Index of the edge to split.

**point** [in] Coordinates of the new point.

**return** the index of the new vertex.

### clean_edges

```cpp
public int clean_edges()
```


 Clean up the mesh removing inactive edges

**return** old2new mappings for edges

### clean_vertices

```cpp
public int clean_vertices()
```


 Clean up the mesh removing isolated vertices

**return** old2new mappings for vertices

### curve

```cpp
protected const EdgedCurve<dimension> & curve()
```


### clean

```cpp
public std::tuple<std::vector<index_t>, std::vector<index_t> > clean()
```

 Clean up the mesh removing inactive edges, isolated vertices.

**return** old2new mappings for edges and vertices.



# class EdgedCurveModifier

