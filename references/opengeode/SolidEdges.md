# class SolidEdges


 This class represents a 3D Solid made up with polyhedra and provides mesh functionnalities.



## Functions

### SolidEdges

```cpp
public void SolidEdges<>(const SolidEdges<> & )
```


### operator=

```cpp
public SolidEdges<> & operator=(const SolidEdges<> & )
```


### SolidEdges

```cpp
public void SolidEdges<>()
```


### SolidEdges

```cpp
public void SolidEdges<>(const SolidMesh<dimension> & solid)
```


### ~SolidEdges

```cpp
public void ~SolidEdges<>()
```


### nb_edges

```cpp
public index_t nb_edges()
```


### is_edge_isolated

```cpp
public _Bool is_edge_isolated(index_t edge_id)
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
public void update_edge_vertices(Span old2new, SolidEdgesKey )
```


### update_edge_vertex

```cpp
public void update_edge_vertex(std::array<index_t, 2> edge_vertices, index_t edge_vertex_id, index_t new_vertex_id, SolidEdgesKey )
```


### remove_edge

```cpp
public void remove_edge(std::array<index_t, 2> edge_vertices, SolidEdgesKey )
```


### delete_edges

```cpp
public int delete_edges(const int & to_delete, SolidEdgesKey )
```


### remove_isolated_edges

```cpp
public int remove_isolated_edges(SolidEdgesKey )
```


### find_or_create_edge

```cpp
public index_t find_or_create_edge(std::array<index_t, 2> edge_vertices, SolidEdgesKey )
```


### overwrite_edges

```cpp
public void overwrite_edges(const SolidEdges<dimension> & from, SolidEdgesKey )
```


### delete_edges

```cpp
public vector delete_edges(const std::vector<_Bool> & to_delete, SolidEdgesKey )
```



# class SolidEdges

