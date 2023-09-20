# class FacetEdgesImpl


## Functions

### FacetEdgesImpl

```cpp
public void FacetEdgesImpl<dimension>()
```


### find_edge

```cpp
public absl::optional<index_t> find_edge(const std::array<index_t, 2> & edge_vertices)
```


### find_or_create_edge

```cpp
public index_t find_or_create_edge(array edge_vertices)
```


### edge_vertices

```cpp
public const std::array<index_t, 2> & edge_vertices(const index_t edge_id)
```


### update_edge_vertex

```cpp
public void update_edge_vertex(array edge_vertices, const index_t edge_vertex_id, const index_t new_vertex_id)
```


### update_edge_vertices

```cpp
public int update_edge_vertices(Span old2new)
```


### remove_edge

```cpp
public void remove_edge(array edge_vertices)
```


### delete_edges

```cpp
public int delete_edges(const int & to_delete)
```


### remove_isolated_edges

```cpp
public int remove_isolated_edges()
```


### is_edge_isolated

```cpp
public _Bool is_edge_isolated(index_t edge_id)
```


### edge_attribute_manager

```cpp
public AttributeManager & edge_attribute_manager()
```


### overwrite_edges

```cpp
public void overwrite_edges(const detail::FacetStorage<std::array<index_t, 2> > & from)
```




