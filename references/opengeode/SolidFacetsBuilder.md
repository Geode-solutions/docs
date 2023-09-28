# class SolidFacetsBuilder

```cpp
Defined at ../../include/geode/mesh/builder/solid_facets_builder.h#41
```

 Interface class to represent the builder of a SolidFacets



## Functions

### SolidFacetsBuilder

```cpp
public void SolidFacetsBuilder<dimension>(SolidFacets<dimension> & facets)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_facets_builder.cpp#34
```

### delete_isolated_facets

```cpp
public int delete_isolated_facets()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_facets_builder.cpp#48
```

 Delete all the isolated facets (not used as polyhedron facets)

**return** the mapping between old facet indices to new ones. Deleted facets new index is NO_ID

### find_or_create_facet

```cpp
public index_t find_or_create_facet(PolyhedronFacetVertices facet_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_facets_builder.cpp#41
```

### delete_facets

```cpp
public int delete_facets(const int & to_delete)
```

### remove_facet

```cpp
public void remove_facet(PolyhedronFacetVertices facet_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_facets_builder.cpp#76
```

### update_facet_vertex

```cpp
public void update_facet_vertex(PolyhedronFacetVertices facet_vertices, index_t facet_vertex_id, index_t new_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_facets_builder.cpp#63
```

### update_facet_vertices

```cpp
public int update_facet_vertices(Span old2new)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_facets_builder.cpp#55
```

### copy

```cpp
public void copy(const SolidFacets<dimension> & facets)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_facets_builder.cpp#90
```

### delete_facets

```cpp
public vector delete_facets(const std::vector<bool> & to_delete)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_facets_builder.cpp#83
```



# class SolidFacetsBuilder

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_facets_builder.cpp#100
```

