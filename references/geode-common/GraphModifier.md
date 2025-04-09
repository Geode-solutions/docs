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

# class GraphModifier


```cpp
Inherits from VerticesModifier, EdgesModifier
```



## Records

CollapseEdgeInfo

SplitEdgeInfo

CleanMappings



## Functions

### GraphModifier

```cpp
public void GraphModifier(const Graph & graph, GraphBuilder & builder)
```


### GraphModifier

```cpp
public void GraphModifier(GraphModifier && other)
```


### operator=

```cpp
public GraphModifier & operator=(GraphModifier && other)
```


### ~GraphModifier

```cpp
public void ~GraphModifier()
```


### is_edge_active

```cpp
public bool is_edge_active(index_t edge_id)
```


### inactive_edge

```cpp
public void inactive_edge(index_t edge_id)
```


### inactive_edges

```cpp
public void inactive_edges(Span edge_ids)
```


### collapse_edge

```cpp
public CollapseEdgeInfo collapse_edge(index_t edge_id)
```


### split_edge

```cpp
public SplitEdgeInfo split_edge(index_t edge_id)
```


### clean_edges

```cpp
public vector clean_edges()
```


 Clean up the mesh removing inactive edges

**return** old2new mappings for edges

### clean_vertices

```cpp
public vector clean_vertices()
```


 Clean up the mesh removing isolated vertices

**return** old2new mappings for vertices

### clean

```cpp
public CleanMappings clean()
```


 Clean up the mesh removing inactive edges, isolated vertices.

**return** old2new mappings for edges and vertices.

### GraphModifier

```cpp
public void GraphModifier(const VertexSet & graph, VertexSetBuilder & builder, MeshModifierFactoryKey key)
```


### graph

```cpp
protected const Graph & graph()
```


### builder

```cpp
protected GraphBuilder & builder()
```




