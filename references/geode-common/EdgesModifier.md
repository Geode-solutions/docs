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

# class EdgesModifier


## Functions

### EdgesModifier

```cpp
public void EdgesModifier(const EdgesModifier & )
```


### operator=

```cpp
public EdgesModifier & operator=(const EdgesModifier & )
```


### ~EdgesModifier

```cpp
public void ~EdgesModifier()
```


### updated_edge

```cpp
public const SmallSet<index_t> & updated_edge(index_t edge_id)
```


### set_updated_edge

```cpp
public void set_updated_edge(const EdgeMapping & mapping)
```


### set_updated_edge

```cpp
public void set_updated_edge(const EdgeMultiMapping & mapping)
```


### EdgesModifier

```cpp
protected void EdgesModifier()
```


### EdgesModifier

```cpp
protected void EdgesModifier(EdgesModifier && other)
```


### operator=

```cpp
protected EdgesModifier & operator=(EdgesModifier && other)
```


### clean_edges_modifier

```cpp
protected void clean_edges_modifier()
```




