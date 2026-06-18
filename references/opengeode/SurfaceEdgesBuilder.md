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
public void SurfaceEdgesBuilder<value-parameter-0-0>(SurfaceEdges<dimension> & edges)
```


### delete_isolated_edges

```cpp
public std::vector<index_t> delete_isolated_edges()
```


 Delete all the isolated edges (not used as polygon edges)

**return** the mapping between old edge indices to new ones. Deleted edges new index is NO_ID

### SurfaceEdgesBuilder

```cpp
public void SurfaceEdgesBuilder<value-parameter-0-0>(SurfaceEdgesBuilder<dimension> && )
```


### find_or_create_edge

```cpp
public index_t find_or_create_edge(std::array<index_t, 2> edge_vertices)
```


### delete_edges

```cpp
public std::vector<index_t> delete_edges(const std::vector<bool> & to_delete)
```


### remove_edge

```cpp
public void remove_edge(std::array<index_t, 2> edge_vertices)
```


### update_edge_vertices

```cpp
public void update_edge_vertices(absl::Span<const index_t> old2new)
```


### update_edge_vertex

```cpp
public geode::BijectiveMapping<index_t> update_edge_vertex(std::array<index_t, 2> edge_vertices, index_t edge_vertex_id, index_t new_vertex_id)
```


### copy

```cpp
public void copy(const SurfaceEdges<dimension> & edges)
```




# class SurfaceEdgesBuilder


# class SurfaceEdgesBuilder


