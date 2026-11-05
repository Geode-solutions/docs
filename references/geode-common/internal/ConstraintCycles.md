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

# class ConstraintCycles


 Set of vertex cycles given in original vertex ids and queried in updated vertex ids. Updated cycles are cached for the last used VerticesModifier and kept up to date from its updates log: only cycles touching an updated vertex (as original or as current vertex) are recomputed. This relies on VerticesModifier::updated_vertex path compression: once resolved, an original vertex directly maps to its current vertex, so its result only changes if one of them is updated.



## Functions

### contains

```cpp
public bool contains(T vertices, const VerticesModifier & vertices_modifier)
```


### add

```cpp
public void add(T vertices)
```


### add

```cpp
public void add(const ConstraintCycles<T> & forbiddens)
```


### empty

```cpp
public bool empty()
```


### clean

```cpp
public void clean()
```


### filter

```cpp
public void filter(index_t moved_old_vertex_id, const VerticesModifier & vertices_modifier)
```




