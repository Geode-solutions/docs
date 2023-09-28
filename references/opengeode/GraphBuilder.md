# class GraphBuilder

```cpp
Defined at ../../include/geode/mesh/builder/graph_builder.h#44
```

 Interface class to represent the builder of a Graph



```cpp
Inherits from VertexSetBuilder
```



## Functions

### create

```cpp
public std::unique_ptr<GraphBuilder> create(Graph & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/graph_builder.cpp#84
```

 Create the builder associated with a Graph.

**mesh** [in] The Graph to build/modify

### create_edge

```cpp
public index_t create_edge()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/graph_builder.cpp#121
```

 Create a new edge.

**return** the index of the created edge

### create_edge

```cpp
public index_t create_edge(index_t v0_id, index_t v1_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/graph_builder.cpp#129
```

 Create a new edge between to vertex.

**v0_id** [in] Index of the edge initial vertex

**v1_id** [in] Index of the edge terminal vertex

**return** the index of the created edge

### create_edges

```cpp
public index_t create_edges(index_t nb)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/graph_builder.cpp#141
```

 Create several new edges.

**nb** [in] Number of edges to create

**return** the index of the first created edge

### set_edge_vertex

```cpp
public void set_edge_vertex(const EdgeVertex & edge_vertex, index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/graph_builder.cpp#89
```

 Set a vertex as an edge endpoint

**edge_vertex** [in] Index of the edge endpoint

**vertex_id** [in] Index of the vertex to set as edge endpoint

### associate_edge_vertex_to_vertex

```cpp
public void associate_edge_vertex_to_vertex(const EdgeVertex & edge_vertex, index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/graph_builder.cpp#109
```

### disassociate_edge_vertex_to_vertex

```cpp
public void disassociate_edge_vertex_to_vertex(const EdgeVertex & edge_vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/graph_builder.cpp#115
```

### set_edges_around_vertex

```cpp
public void set_edges_around_vertex(index_t vertex_id, EdgesAroundVertex edges)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/graph_builder.cpp#164
```

### delete_edges

```cpp
public std::vector<index_t> delete_edges(const std::vector<bool> & to_delete)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/graph_builder.cpp#170
```

 Delete a set of edges

**to_delete** [in] Vector of size graph_.nb_edges(). If to_delete[i] is true the edge of index i is deleted, else the edge is kept.

**return** the mapping between old edge indices to new ones. Deleted edges new index is NO_ID

### permute_edges

```cpp
public std::vector<index_t> permute_edges(Span permutation)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/graph_builder.cpp#184
```

 Permute edges to match the given order.

**permutation** [in] Vector of size graph_.nb_edges(). Each value corresponds to the destination position.

**return** the mapping between old edge indices to new ones.

### delete_isolated_vertices

```cpp
public std::vector<index_t> delete_isolated_vertices()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/graph_builder.cpp#194
```

 Delete all the isolated vertices (not used as edge endpoint)

**return** the mapping between old vertex indices to new ones. Deleted vertices new index is NO_ID

### copy

```cpp
public void copy(const Graph & graph)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/graph_builder.cpp#208
```

### GraphBuilder

```cpp
protected void GraphBuilder(Graph & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/graph_builder.cpp#79
```

### delete_edges

```cpp
public int delete_edges(const int & to_delete)
```

 Delete a set of edges

**to_delete** [in] Vector of size graph_.nb_edges(). If to_delete[i] is true the edge of index i is deleted, else the edge is kept.

**return** the mapping between old edge indices to new ones. Deleted edges new index is NO_ID

### set_edges_around_vertex

```cpp
public void set_edges_around_vertex(index_t vertex_id, int edges)
```



