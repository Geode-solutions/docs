# class SolidEdges

```cpp
Defined at ../../include/geode/mesh/core/solid_edges.h#47
```

 This class represents a 3D Solid made up with polyhedra and provides mesh functionnalities.



## Functions

### SolidEdges

```cpp
public void SolidEdges<>(const SolidEdges<> & )
```

```cpp
Defined at ../../include/geode/mesh/core/solid_edges.h#49
```

### operator=

```cpp
public SolidEdges<> & operator=(const SolidEdges<> & )
```

```cpp
Defined at ../../include/geode/mesh/core/solid_edges.h#49
```

### SolidEdges

```cpp
public void SolidEdges<>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#97
```

### SolidEdges

```cpp
public void SolidEdges<>(const SolidMesh<dimension> & solid)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#91
```

### ~SolidEdges

```cpp
public void ~SolidEdges<>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#102
```

### nb_edges

```cpp
public index_t nb_edges()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#182
```

### is_edge_isolated

```cpp
public bool is_edge_isolated(index_t edge_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#107
```

### edge_vertices

```cpp
public const std::array<index_t, 2> & edge_vertices(index_t edge_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#121
```

 Return the indices of edge vertices.

**edge_id** [in] Index of an edge.

### edge_from_vertices

```cpp
public absl::optional<index_t> edge_from_vertices(const std::array<index_t, 2> & vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#129
```

 Get the index of edge corresponding to given vertices

**vertices** [in] Ordered vertex indices

### edge_attribute_manager

```cpp
public AttributeManager & edge_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#188
```

 Access to the manager of attributes associated with edges.

### update_edge_vertices

```cpp
public void update_edge_vertices(Span old2new, SolidEdgesKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#136
```

### update_edge_vertex

```cpp
public void update_edge_vertex(std::array<index_t, 2> edge_vertices, index_t edge_vertex_id, index_t new_vertex_id, SolidEdgesKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#143
```

### remove_edge

```cpp
public void remove_edge(std::array<index_t, 2> edge_vertices, SolidEdgesKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#154
```

### delete_edges

```cpp
public int delete_edges(const int & to_delete, SolidEdgesKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#168
```

### remove_isolated_edges

```cpp
public int remove_isolated_edges(SolidEdgesKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#161
```

### find_or_create_edge

```cpp
public index_t find_or_create_edge(std::array<index_t, 2> edge_vertices, SolidEdgesKey )
```

```cpp
Defined at ../../include/geode/mesh/core/solid_edges.h#100
```

### overwrite_edges

```cpp
public void overwrite_edges(const SolidEdges<dimension> & from, SolidEdgesKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_edges.cpp#175
```

### delete_edges

```cpp
public vector delete_edges(const std::vector<bool> & to_delete, SolidEdgesKey )
```



# class SolidEdges

