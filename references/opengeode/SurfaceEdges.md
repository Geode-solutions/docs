# class SurfaceEdges

# class SurfaceEdges

# class SurfaceEdges

```cpp
Defined at ../../include/geode/mesh/core/surface_edges.h#45
```

## Functions

### SurfaceEdges

```cpp
public void SurfaceEdges<>(const SurfaceEdges<> & )
```

```cpp
Defined at ../../include/geode/mesh/core/surface_edges.h#47
```

### operator=

```cpp
public SurfaceEdges<> & operator=(const SurfaceEdges<> & )
```

```cpp
Defined at ../../include/geode/mesh/core/surface_edges.h#47
```

### SurfaceEdges

```cpp
public void SurfaceEdges<>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#91
```

### SurfaceEdges

```cpp
public void SurfaceEdges<>(const SurfaceMesh<dimension> & surface)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#96
```

### ~SurfaceEdges

```cpp
public void ~SurfaceEdges<>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#103
```

### nb_edges

```cpp
public index_t nb_edges()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#169
```

### is_edge_isolated

```cpp
public bool is_edge_isolated(index_t edge_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#175
```

### edge_vertices

```cpp
public const std::array<index_t, 2> & edge_vertices(index_t edge_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#115
```

 Return the indices of edge vertices.

**edge_id** [in] Index of an edge.

### edge_from_vertices

```cpp
public absl::optional<index_t> edge_from_vertices(const std::array<index_t, 2> & vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#182
```

 Get the index of edge corresponding to given vertices

**vertices** [in] Ordered vertex indices

### edge_attribute_manager

```cpp
public AttributeManager & edge_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#189
```

 Access to the manager of attributes associated with edges.

### update_edge_vertices

```cpp
public void update_edge_vertices(Span old2new, SurfaceEdgesKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#123
```

### update_edge_vertex

```cpp
public void update_edge_vertex(std::array<index_t, 2> edge_vertices, index_t edge_vertex_id, index_t new_vertex_id, SurfaceEdgesKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#130
```

### remove_edge

```cpp
public void remove_edge(std::array<index_t, 2> edge_vertices, SurfaceEdgesKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#141
```

### delete_edges

```cpp
public int delete_edges(const int & to_delete, SurfaceEdgesKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#148
```

### remove_isolated_edges

```cpp
public int remove_isolated_edges(SurfaceEdgesKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#155
```

### find_or_create_edge

```cpp
public index_t find_or_create_edge(std::array<index_t, 2> edge_vertices, SurfaceEdgesKey )
```

```cpp
Defined at ../../include/geode/mesh/core/surface_edges.h#97
```

### overwrite_edges

```cpp
public void overwrite_edges(const SurfaceEdges<dimension> & from, SurfaceEdgesKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_edges.cpp#162
```

### delete_edges

```cpp
public vector delete_edges(const std::vector<bool> & to_delete, SurfaceEdgesKey )
```



