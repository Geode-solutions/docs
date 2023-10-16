# class FacetStorage


## Functions

### FacetStorage

```cpp
public void FacetStorage<VertexContainer>()
```


### facet_attribute_manager

```cpp
protected AttributeManager & facet_attribute_manager()
```


### find_facet

```cpp
public absl::optional<index_t> find_facet(TypedVertexCycle vertices)
```


### add_facet

```cpp
protected index_t add_facet(TypedVertexCycle vertices)
```


### remove_facet

```cpp
protected void remove_facet(TypedVertexCycle vertices)
```


### clean_facets

```cpp
protected int clean_facets()
```


### delete_facets

```cpp
protected int delete_facets(const int & to_delete)
```


### update_facet_vertex

```cpp
protected void update_facet_vertex(VertexContainer facet_vertices, const index_t facet_vertex_id, const index_t new_vertex_id)
```


### update_facet_vertices

```cpp
protected int update_facet_vertices(Span old2new)
```


### get_facet_vertices

```cpp
protected const VertexContainer & get_facet_vertices(index_t facet_id)
```


### attribute_name

```cpp
protected string_view attribute_name()
```


### update_attribute

```cpp
protected void update_attribute()
```


### get_counter

```cpp
protected index_t get_counter(index_t facet_id)
```


### overwrite

```cpp
protected void overwrite(const FacetStorage<VertexContainer> & from)
```




