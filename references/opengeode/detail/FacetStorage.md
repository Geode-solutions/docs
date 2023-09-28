# class FacetStorage

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#40
```

## Functions

### FacetStorage

```cpp
public void FacetStorage<VertexContainer>()
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#47
```

### facet_attribute_manager

```cpp
protected AttributeManager & facet_attribute_manager()
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#61
```

### find_facet

```cpp
public absl::optional<index_t> find_facet(TypedVertexCycle vertices)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#66
```

### add_facet

```cpp
protected index_t add_facet(TypedVertexCycle vertices)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#77
```

### remove_facet

```cpp
protected void remove_facet(TypedVertexCycle vertices)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#95
```

### clean_facets

```cpp
protected int clean_facets()
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#111
```

### delete_facets

```cpp
protected int delete_facets(const int & to_delete)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#123
```

### update_facet_vertex

```cpp
protected void update_facet_vertex(VertexContainer facet_vertices, const index_t facet_vertex_id, const index_t new_vertex_id)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#146
```

### update_facet_vertices

```cpp
protected int update_facet_vertices(Span old2new)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#156
```

### get_facet_vertices

```cpp
protected const VertexContainer & get_facet_vertices(index_t facet_id)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#195
```

### attribute_name

```cpp
protected string_view attribute_name()
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#201
```

### update_attribute

```cpp
protected void update_attribute()
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#206
```

### get_counter

```cpp
protected index_t get_counter(index_t facet_id)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#214
```

### overwrite

```cpp
protected void overwrite(const FacetStorage<VertexContainer> & from)
```

```cpp
Defined at ../../include/geode/mesh/core/detail/facet_storage.h#219
```



