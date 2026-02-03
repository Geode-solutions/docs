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

# class SurfaceEdgesBuilder


 Interface class to represent the builder of a SurfaceEdges



## Functions

### SurfaceEdgesBuilder

```cpp
public void SurfaceEdgesBuilder<>(SurfaceEdges<dimension> & edges)
```


### SurfaceEdgesBuilder

```cpp
public void SurfaceEdgesBuilder<>(SurfaceEdgesBuilder<> && )
```


### delete_isolated_edges

```cpp
public vector delete_isolated_edges()
```


 Delete all the isolated edges (not used as polygon edges)

**return** the mapping between old edge indices to new ones. Deleted edges new index is NO_ID

### find_or_create_edge

```cpp
public index_t find_or_create_edge(array edge_vertices)
```


### delete_edges

```cpp
public vector delete_edges(const std::vector<bool> & to_delete)
```


### remove_edge

```cpp
public void remove_edge(array edge_vertices)
```


### update_edge_vertices

```cpp
public void update_edge_vertices(Span old2new)
```


### update_edge_vertex

```cpp
public BijectiveMapping update_edge_vertex(array edge_vertices, index_t edge_vertex_id, index_t new_vertex_id)
```


### copy

```cpp
public void copy(const SurfaceEdges<dimension> & edges)
```




# class SurfaceEdgesBuilder


# class SurfaceEdgesBuilder


