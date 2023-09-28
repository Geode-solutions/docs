# class SolidFacets

```cpp
Defined at ../../include/geode/mesh/core/solid_facets.h#41
```

## Records

Impl



## Functions

### SolidFacets

```cpp
public void SolidFacets<>(const SolidFacets<> & )
```

```cpp
Defined at ../../include/geode/mesh/core/solid_facets.h#43
```

### operator=

```cpp
public SolidFacets<> & operator=(const SolidFacets<> & )
```

```cpp
Defined at ../../include/geode/mesh/core/solid_facets.h#43
```

### SolidFacets

```cpp
public void SolidFacets<>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#163
```

### SolidFacets

```cpp
public void SolidFacets<>(const SolidMesh<dimension> & solid)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#157
```

### ~SolidFacets

```cpp
public void ~SolidFacets<>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#168
```

### nb_facets

```cpp
public index_t nb_facets()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#248
```

### is_facet_isolated

```cpp
public bool is_facet_isolated(index_t facet_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#173
```

### facet_vertices

```cpp
public const PolyhedronFacetVertices & facet_vertices(index_t facet_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#187
```

 Return the indices of facet vertices.

**edge_id** [in] Index of an edge.

### facet_from_vertices

```cpp
public absl::optional<index_t> facet_from_vertices(const PolyhedronFacetVertices & vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#195
```

 Get the index of facet corresponding to given vertices

**vertices** [in] Ordered vertex indices

### facet_attribute_manager

```cpp
public AttributeManager & facet_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#254
```

 Access to the manager of attributes associated with facets.

### update_facet_vertices

```cpp
public int update_facet_vertices(Span old2new, SolidFacetsKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#202
```

### update_facet_vertex

```cpp
public void update_facet_vertex(PolyhedronFacetVertices facet_vertices, index_t facet_vertex_id, index_t new_vertex_id, SolidFacetsKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#209
```

### remove_facet

```cpp
public void remove_facet(PolyhedronFacetVertices facet_vertices, SolidFacetsKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#220
```

### delete_facets

```cpp
public int delete_facets(const int & to_delete, SolidFacetsKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#234
```

### remove_isolated_facets

```cpp
public int remove_isolated_facets(SolidFacetsKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#227
```

### find_or_create_facet

```cpp
public index_t find_or_create_facet(PolyhedronFacetVertices facet_vertices, SolidFacetsKey )
```

```cpp
Defined at ../../include/geode/mesh/core/solid_facets.h#94
```

### overwrite_facets

```cpp
public void overwrite_facets(const SolidFacets<dimension> & from, SolidFacetsKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_facets.cpp#241
```

### delete_facets

```cpp
public vector delete_facets(const std::vector<bool> & to_delete, SolidFacetsKey )
```



# class SolidFacets

