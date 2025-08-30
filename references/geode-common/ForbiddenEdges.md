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

# class ForbiddenEdges


## Functions

### ForbiddenEdges

```cpp
public void ForbiddenEdges(const ForbiddenEdges & )
```


### operator=

```cpp
public ForbiddenEdges & operator=(const ForbiddenEdges & )
```


### ForbiddenEdges

```cpp
public void ForbiddenEdges()
```


### ForbiddenEdges

```cpp
public void ForbiddenEdges(ForbiddenEdges && other)
```


### operator=

```cpp
public ForbiddenEdges & operator=(ForbiddenEdges && other)
```


### ~ForbiddenEdges

```cpp
public void ~ForbiddenEdges()
```


### is_forbidden

```cpp
public bool is_forbidden(const std::array<index_t, 2> & edge_vertices, const VerticesModifier & vertices_modifier)
```


### add

```cpp
public void add(const std::array<index_t, 2> & edge_vertices)
```


### add

```cpp
public void add(const ForbiddenEdges & forbiddens)
```


### empty

```cpp
public bool empty()
```


### filter

```cpp
public void filter(index_t moved_old_vertex_id, const VerticesModifier & vertices_modifier)
```


### clean

```cpp
public void clean()
```




