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
public void EdgesImpl(Graph & graph)
```


### get_edge_vertex

```cpp
public index_t get_edge_vertex(const EdgeVertex & edge_vertex)
```


### set_edge_vertex

```cpp
public void set_edge_vertex(const EdgeVertex & edge_vertex, const index_t vertex_id)
```


### register_attributes

```cpp
public void register_attributes(Graph & graph)
```


### EdgesImpl

```cpp
protected void EdgesImpl()
```




