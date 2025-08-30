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

# class ForbbidenImpl


## Functions

### is_forbidden

```cpp
public bool is_forbidden(T vertices, const VerticesModifier & vertices_modifier)
```


### add

```cpp
public void add(T vertices)
```


### add

```cpp
public void add(const ForbbidenImpl<T> & forbiddens)
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




