<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class SurfaceEdges


## Members

```cpp
public static const auto dim

```



# class SurfaceEdges


## Members

```cpp
public static const auto dim

```



# class SurfaceEdges


## Members

```cpp
public static const auto dim

```



## Functions

### SurfaceEdges

```cpp
public void SurfaceEdges<value-parameter-0-0>(const SurfaceEdges<dimension> & )
```


### operator=

```cpp
public SurfaceEdges<dimension> & operator=(const SurfaceEdges<dimension> & )
```


### SurfaceEdges

```cpp
public void SurfaceEdges<value-parameter-0-0>()
```


### SurfaceEdges

```cpp
public void SurfaceEdges<value-parameter-0-0>(const SurfaceMesh<dimension> & surface)
```


### ~SurfaceEdges

```cpp
public void ~SurfaceEdges<value-parameter-0-0>()
```


### find_or_create_edge

```cpp
public index_t find_or_create_edge(std::array<index_t, 2> edge_vertices, SurfaceEdgesKey )
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
public std::optional<index_t> edge_from_vertices(const std::array<index_t, 2> & vertices)
```


 Get the index of edge corresponding to given vertices

**vertices** [in] Ordered vertex indices

### is_opposite

```cpp
public bool is_opposite(index_t edge_id, const std::array<index_t, 2> & vertices)
```


### edge_attribute_manager

```cpp
public AttributeManager & edge_attribute_manager()
```


 Access to the manager of attributes associated with edges.

### update_edge_vertices

```cpp
public void update_edge_vertices(absl::Span<const index_t> old2new, SurfaceEdgesKey )
```


### update_edge_vertex

```cpp
public BijectiveMapping<index_t> update_edge_vertex(std::array<index_t, 2> edge_vertices, index_t edge_vertex_id, index_t new_vertex_id, SurfaceEdgesKey )
```


### remove_edge

```cpp
public void remove_edge(std::array<index_t, 2> edge_vertices, SurfaceEdgesKey )
```


### delete_edges

```cpp
public std::vector<index_t> delete_edges(const std::vector<bool> & to_delete, SurfaceEdgesKey )
```


### remove_isolated_edges

```cpp
public std::vector<index_t> remove_isolated_edges(SurfaceEdgesKey )
```


### overwrite_edges

```cpp
public void overwrite_edges(const SurfaceEdges<dimension> & from, SurfaceEdgesKey )
```




