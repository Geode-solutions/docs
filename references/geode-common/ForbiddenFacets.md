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

# class ForbiddenFacets


## Functions

### ForbiddenFacets

```cpp
public void ForbiddenFacets(const ForbiddenFacets & )
```


### operator=

```cpp
public ForbiddenFacets & operator=(const ForbiddenFacets & )
```


### ForbiddenFacets

```cpp
public void ForbiddenFacets()
```


### ForbiddenFacets

```cpp
public void ForbiddenFacets(ForbiddenFacets && other)
```


### operator=

```cpp
public ForbiddenFacets & operator=(ForbiddenFacets && other)
```


### ~ForbiddenFacets

```cpp
public void ~ForbiddenFacets()
```


### is_forbidden

```cpp
public bool is_forbidden(InlinedVector facet_vertices, const VerticesModifier & vertices_modifier)
```


### add

```cpp
public void add(InlinedVector facet_vertices)
```


### add

```cpp
public void add(const ForbiddenFacets & forbiddens)
```


### empty

```cpp
public bool empty()
```


### filter

```cpp
public void filter(index_t moved_old_vertex_id, const VerticesModifier & vertices_modifier)
```




