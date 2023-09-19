# class SolidFacets


## Records

Impl



## Functions

### SolidFacets

```cpp
public void SolidFacets<>(const SolidFacets<> & )
```


### operator=

```cpp
public SolidFacets<> & operator=(const SolidFacets<> & )
```


### SolidFacets

```cpp
public void SolidFacets<>()
```


### SolidFacets

```cpp
public void SolidFacets<>(const SolidMesh<dimension> & solid)
```


### ~SolidFacets

```cpp
public void ~SolidFacets<>()
```


### nb_facets

```cpp
public index_t nb_facets()
```


### is_facet_isolated

```cpp
public _Bool is_facet_isolated(index_t facet_id)
```


### facet_vertices

```cpp
public const PolyhedronFacetVertices & facet_vertices(index_t facet_id)
```


 Return the indices of facet vertices.

**edge_id** [in] Index of an edge.

### facet_from_vertices

```cpp
public absl::optional<index_t> facet_from_vertices(const PolyhedronFacetVertices & vertices)
```


 Get the index of facet corresponding to given vertices

**vertices** [in] Ordered vertex indices

### facet_attribute_manager

```cpp
public AttributeManager & facet_attribute_manager()
```


 Access to the manager of attributes associated with facets.

### update_facet_vertices

```cpp
public int update_facet_vertices(Span old2new, SolidFacetsKey )
```


### update_facet_vertex

```cpp
public void update_facet_vertex(PolyhedronFacetVertices facet_vertices, index_t facet_vertex_id, index_t new_vertex_id, SolidFacetsKey )
```


### remove_facet

```cpp
public void remove_facet(PolyhedronFacetVertices facet_vertices, SolidFacetsKey )
```


### delete_facets

```cpp
public int delete_facets(const int & to_delete, SolidFacetsKey )
```


### remove_isolated_facets

```cpp
public int remove_isolated_facets(SolidFacetsKey )
```


### find_or_create_facet

```cpp
public index_t find_or_create_facet(PolyhedronFacetVertices facet_vertices, SolidFacetsKey )
```


### overwrite_facets

```cpp
public void overwrite_facets(const SolidFacets<dimension> & from, SolidFacetsKey )
```


### delete_facets

```cpp
public vector delete_facets(const std::vector<_Bool> & to_delete, SolidFacetsKey )
```



# class SolidFacets

