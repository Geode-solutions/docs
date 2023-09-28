# class Graph

```cpp
Defined at ../../include/geode/mesh/core/graph.h#97
```

 Interface class to represent a Graph. A graph is a set of vertices linked by edges



```cpp
Inherits from VertexSet
```



## Records

Impl



## Functions

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

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#172
```

### clone

```cpp
public std::unique_ptr<Graph> clone()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#259
```

### ~Graph

```cpp
public void ~Graph()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#159
```

### edge_vertex

```cpp
public index_t edge_vertex(const EdgeVertex & edge_vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#177
```

 Return the vertex index corresponding to an edge endpoint

**edge_vertex** [in] Edge endpoint

### edge_vertices

```cpp
public std::array<index_t, 2> edge_vertices(index_t edge_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#187
```

 Return the indices of the two edge vertices

**edge_id** [in] Index of the edge

### nb_edges

```cpp
public index_t nb_edges()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#192
```

### edge_attribute_manager

```cpp
public AttributeManager & edge_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#244
```

 Access to the manager of attributes associated with edges.

### edges_around_vertex

```cpp
public const EdgesAroundVertex & edges_around_vertex(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#197
```

 Get all edge endpoints corresponding to a given vertex

**vertex_id** [in] Index of the vertex

### is_vertex_isolated

```cpp
public bool is_vertex_isolated(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#205
```

### edge_from_vertices

```cpp
public absl::optional<index_t> edge_from_vertices(index_t v0, index_t v1)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#210
```

### set_edges_around_vertex

```cpp
public void set_edges_around_vertex(index_t vertex_id, EdgesAroundVertex edges, GraphKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#224
```

### associate_edge_vertex_to_vertex

```cpp
public void associate_edge_vertex_to_vertex(const EdgeVertex & edge_vertex, index_t vertex_id, GraphKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#232
```

### disassociate_edge_vertex_to_vertex

```cpp
public void disassociate_edge_vertex_to_vertex(const EdgeVertex & edge_vertex, GraphKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#238
```

### Graph

```cpp
protected void Graph()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#145
```

### Graph

```cpp
protected void Graph(Graph && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#147
```

### operator=

```cpp
protected Graph & operator=(Graph && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#152
```

### create

```cpp
public int create()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#161
```

### create

```cpp
public int create(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#167
```

### set_edges_around_vertex

```cpp
public void set_edges_around_vertex(index_t vertex_id, int edges, GraphKey )
```



