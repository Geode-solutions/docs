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

# class VerticesModifier


## Functions

### VerticesModifier

```cpp
public void VerticesModifier(const VerticesModifier & )
```


### operator=

```cpp
public VerticesModifier & operator=(const VerticesModifier & )
```


### updated_vertex

```cpp
public index_t updated_vertex(index_t vertex_id)
```


### VerticesModifier

```cpp
protected void VerticesModifier()
```


### VerticesModifier

```cpp
protected void VerticesModifier(VerticesModifier && other)
```


### operator=

```cpp
protected VerticesModifier & operator=(VerticesModifier && other)
```


### ~VerticesModifier

```cpp
protected void ~VerticesModifier()
```


### set_updated_vertex

```cpp
protected void set_updated_vertex(const VertexMultiMapping & mapping)
```


### clean_vertices_modifier

```cpp
protected void clean_vertices_modifier()
```




