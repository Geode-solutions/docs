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

# class FacetEdgesImpl


```cpp
Inherits from detail::FacetStorage<std::array<index_t, 2> >
```



## Functions

### FacetEdgesImpl

```cpp
public void FacetEdgesImpl<dimension>()
```


### find_edge

```cpp
public optional find_edge(const std::array<index_t, 2> & edge_vertices)
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
public vector update_edge_vertices(Span old2new)
```


### remove_edge

```cpp
public void remove_edge(array edge_vertices)
```


### delete_edges

```cpp
public vector delete_edges(const std::vector<bool> & to_delete)
```


### remove_isolated_edges

```cpp
public vector remove_isolated_edges()
```


### is_edge_isolated

```cpp
public bool is_edge_isolated(index_t edge_id)
```


### edge_attribute_manager

```cpp
public AttributeManager & edge_attribute_manager()
```


### overwrite_edges

```cpp
public void overwrite_edges(const detail::FacetStorage<std::array<index_t, 2> > & from)
```




