# class FacetEdgesImpl

```cpp
Defined at ../../include/geode/mesh/core/private/facet_edges_impl.h#38
```

## Functions

### FacetEdgesImpl

```cpp
public void FacetEdgesImpl<dimension>()
```

```cpp
Defined at ../../include/geode/mesh/core/private/facet_edges_impl.h#43
```

### find_edge

```cpp
public absl::optional<index_t> find_edge(const std::array<index_t, 2> & edge_vertices)
```

```cpp
Defined at ../../include/geode/mesh/core/private/facet_edges_impl.h#45
```

### find_or_create_edge

```cpp
public index_t find_or_create_edge(array edge_vertices)
```

```cpp
Defined at ../../include/geode/mesh/core/private/facet_edges_impl.h#51
```

### edge_vertices

```cpp
public const std::array<index_t, 2> & edge_vertices(const index_t edge_id)
```

```cpp
Defined at ../../include/geode/mesh/core/private/facet_edges_impl.h#57
```

### update_edge_vertex

```cpp
public void update_edge_vertex(array edge_vertices, const index_t edge_vertex_id, const index_t new_vertex_id)
```

```cpp
Defined at ../../include/geode/mesh/core/private/facet_edges_impl.h#63
```

### update_edge_vertices

```cpp
public int update_edge_vertices(Span old2new)
```

```cpp
Defined at ../../include/geode/mesh/core/private/facet_edges_impl.h#71
```

### remove_edge

```cpp
public void remove_edge(array edge_vertices)
```

```cpp
Defined at ../../include/geode/mesh/core/private/facet_edges_impl.h#77
```

### delete_edges

```cpp
public int delete_edges(const int & to_delete)
```

```cpp
Defined at ../../include/geode/mesh/core/private/facet_edges_impl.h#82
```

### remove_isolated_edges

```cpp
public int remove_isolated_edges()
```

```cpp
Defined at ../../include/geode/mesh/core/private/facet_edges_impl.h#88
```

### is_edge_isolated

```cpp
public bool is_edge_isolated(index_t edge_id)
```

```cpp
Defined at ../../include/geode/mesh/core/private/facet_edges_impl.h#93
```

### edge_attribute_manager

```cpp
public AttributeManager & edge_attribute_manager()
```

```cpp
Defined at ../../include/geode/mesh/core/private/facet_edges_impl.h#98
```

### overwrite_edges

```cpp
public void overwrite_edges(const detail::FacetStorage<std::array<index_t, 2> > & from)
```

```cpp
Defined at ../../include/geode/mesh/core/private/facet_edges_impl.h#103
```



