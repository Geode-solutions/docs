# class SurfaceEdges

# class SurfaceEdges

# class SurfaceEdges


## Functions

### SurfaceEdges

```cpp
public void SurfaceEdges<>(const SurfaceEdges<> & )
```


### operator=

```cpp
public SurfaceEdges<> & operator=(const SurfaceEdges<> & )
```


### SurfaceEdges

```cpp
public void SurfaceEdges<>()
```


### SurfaceEdges

```cpp
public void SurfaceEdges<>(const SurfaceMesh<dimension> & surface)
```


### ~SurfaceEdges

```cpp
public void ~SurfaceEdges<>()
```


### nb_edges

```cpp
public index_t nb_edges()
```


### is_edge_isolated

```cpp
public bool is_edge_isolated(index_t edge_id)
```


### edge_vertices

```cpp
public const std::array<index_t, 2> & edge_vertices(index_t edge_id)
```


 Return the indices of edge vertices.

**edge_id** [in] Index of an edge.

### edge_from_vertices

```cpp
public absl::optional<index_t> edge_from_vertices(const std::array<index_t, 2> & vertices)
```


 Get the index of edge corresponding to given vertices

**vertices** [in] Ordered vertex indices

### edge_attribute_manager

```cpp
public AttributeManager & edge_attribute_manager()
```


 Access to the manager of attributes associated with edges.

### update_edge_vertices

```cpp
public void update_edge_vertices(Span old2new, SurfaceEdgesKey )
```


### update_edge_vertex

```cpp
public void update_edge_vertex(std::array<index_t, 2> edge_vertices, index_t edge_vertex_id, index_t new_vertex_id, SurfaceEdgesKey )
```


### remove_edge

```cpp
public void remove_edge(std::array<index_t, 2> edge_vertices, SurfaceEdgesKey )
```


### delete_edges

```cpp
public int delete_edges(const int & to_delete, SurfaceEdgesKey )
```


### remove_isolated_edges

```cpp
public int remove_isolated_edges(SurfaceEdgesKey )
```


### find_or_create_edge

```cpp
public index_t find_or_create_edge(std::array<index_t, 2> edge_vertices, SurfaceEdgesKey )
```


### overwrite_edges

```cpp
public void overwrite_edges(const SurfaceEdges<dimension> & from, SurfaceEdgesKey )
```


### delete_edges

```cpp
public vector delete_edges(const std::vector<bool> & to_delete, SurfaceEdgesKey )
```



