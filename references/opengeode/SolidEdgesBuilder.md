# class SolidEdgesBuilder

```cpp
Defined at ../../include/geode/mesh/builder/solid_edges_builder.h#41
```

 Interface class to represent the builder of a SolidEdges



## Functions

### SolidEdgesBuilder

```cpp
public void SolidEdgesBuilder<dimension>(SolidEdges<dimension> & edges)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_edges_builder.cpp#36
```

### delete_isolated_edges

```cpp
public int delete_isolated_edges()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_edges_builder.cpp#57
```

 Delete all the isolated edges (not used as polyhedron edges)

**return** the mapping between old edge indices to new ones. Deleted edges new index is NO_ID

### find_or_create_edge

```cpp
public index_t find_or_create_edge(std::array<index_t, 2> edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_edges_builder.cpp#43
```

### delete_edges

```cpp
public int delete_edges(const int & to_delete)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_edges_builder.cpp#91
```

### remove_edge

```cpp
public void remove_edge(std::array<index_t, 2> edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_edges_builder.cpp#50
```

### update_edge_vertex

```cpp
public void update_edge_vertex(std::array<index_t, 2> edge_vertices, index_t edge_vertex_id, index_t new_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_edges_builder.cpp#64
```

### update_edge_vertices

```cpp
public void update_edge_vertices(Span old2new)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_edges_builder.cpp#74
```

### copy

```cpp
public void copy(const SolidEdges<dimension> & edges)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_edges_builder.cpp#81
```

### delete_edges

```cpp
public vector delete_edges(const std::vector<bool> & to_delete)
```



# class SolidEdgesBuilder

