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

# class EdgesImpl


## Functions

### EdgesImpl

```cpp
public void EdgesImpl()
```


### get_edge_vertex

```cpp
public index_t get_edge_vertex(const EdgeVertex & edge_vertex)
```


### set_edge_vertex

```cpp
public void set_edge_vertex(const EdgeVertex & edge_vertex, const index_t vertex_id)
```


### add_edge

```cpp
public void add_edge()
```


### add_edges

```cpp
public void add_edges(const index_t nb)
```


### remove_edges

```cpp
public void remove_edges(const std::vector<bool> & to_delete)
```


### permute_edges

```cpp
public void permute_edges(absl::Span<const index_t> permutation)
```


### copy_edges

```cpp
public void copy_edges(const EdgesImpl & impl)
```


### remove_legacy_attributes

```cpp
public void remove_legacy_attributes(AttributeManager & manager)
```


### check_edges_number

```cpp
public void check_edges_number(index_t nb_edges)
```




