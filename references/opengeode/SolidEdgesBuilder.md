# class SolidEdgesBuilder


 Interface class to represent the builder of a SolidEdges



## Functions

### SolidEdgesBuilder

```cpp
public void SolidEdgesBuilder<dimension>(SolidEdges<dimension> & edges)
```


### delete_isolated_edges

```cpp
public int delete_isolated_edges()
```


 Delete all the isolated edges (not used as polyhedron edges)

**return** the mapping between old edge indices to new ones. Deleted edges new index is NO_ID

### find_or_create_edge

```cpp
public index_t find_or_create_edge(std::array<index_t, 2> edge_vertices)
```


### delete_edges

```cpp
public int delete_edges(const int & to_delete)
```


### remove_edge

```cpp
public void remove_edge(std::array<index_t, 2> edge_vertices)
```


### update_edge_vertex

```cpp
public void update_edge_vertex(std::array<index_t, 2> edge_vertices, index_t edge_vertex_id, index_t new_vertex_id)
```


### update_edge_vertices

```cpp
public void update_edge_vertices(Span old2new)
```


### copy

```cpp
public void copy(const SolidEdges<dimension> & edges)
```


### delete_edges

```cpp
public vector delete_edges(const std::vector<_Bool> & to_delete)
```



# class SolidEdgesBuilder

