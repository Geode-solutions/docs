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

# class Graph


 Interface class to represent a Graph. A graph is a set of vertices linked by edges



```cpp
Inherits from VertexSet
```



## Functions

### ~Graph

```cpp
public void ~Graph()
```


### create

```cpp
public std::unique_ptr<Graph> create()
```


 Create a new Graph using default data structure.

### create

```cpp
public std::unique_ptr<Graph> create(const MeshImpl & impl)
```


 Create a new Graph using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```


### clone

```cpp
public std::unique_ptr<Graph> clone()
```


### edge_vertex

```cpp
public index_t edge_vertex(const EdgeVertex & edge_vertex)
```


 Return the vertex index corresponding to an edge endpoint

**edge_vertex** [in] Edge endpoint

### edge_vertices

```cpp
public array edge_vertices(index_t edge_id)
```


 Return the indices of the two edge vertices

**edge_id** [in] Index of the edge

### nb_edges

```cpp
public index_t nb_edges()
```


### edge_attribute_manager

```cpp
public AttributeManager & edge_attribute_manager()
```


 Access to the manager of attributes associated with edges.

### edges_around_vertex

```cpp
public const EdgesAroundVertex & edges_around_vertex(index_t vertex_id)
```


 Get all edge endpoints corresponding to a given vertex

**vertex_id** [in] Index of the vertex

### vertices_around_vertex

```cpp
public CurveVerticesAroundVertex vertices_around_vertex(index_t vertex_id)
```


 Returns the vertices linked by an edge to the given mesh vertex.

### is_vertex_isolated

```cpp
public bool is_vertex_isolated(index_t vertex_id)
```


### edge_from_vertices

```cpp
public optional edge_from_vertices(index_t v0, index_t v1)
```


### set_edges_around_vertex

```cpp
public void set_edges_around_vertex(index_t vertex_id, EdgesAroundVertex edges, GraphKey )
```


### associate_edge_vertex_to_vertex

```cpp
public void associate_edge_vertex_to_vertex(const EdgeVertex & edge_vertex, index_t vertex_id, GraphKey )
```


### disassociate_edge_vertex_to_vertex

```cpp
public void disassociate_edge_vertex_to_vertex(const EdgeVertex & edge_vertex, GraphKey )
```


### Graph

```cpp
protected void Graph()
```


### Graph

```cpp
protected void Graph(Graph && other)
```


### operator=

```cpp
protected Graph & operator=(Graph && other)
```




