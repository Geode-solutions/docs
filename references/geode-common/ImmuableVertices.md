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

# class ImmuableVertices


## Functions

### ImmuableVertices

```cpp
public void ImmuableVertices(const ImmuableVertices & )
```


### operator=

```cpp
public ImmuableVertices & operator=(const ImmuableVertices & )
```


### ImmuableVertices

```cpp
public void ImmuableVertices()
```


### ImmuableVertices

```cpp
public void ImmuableVertices(ImmuableVertices && other)
```


### operator=

```cpp
public ImmuableVertices & operator=(ImmuableVertices && other)
```


### ~ImmuableVertices

```cpp
public void ~ImmuableVertices()
```


### is_immuable

```cpp
public bool is_immuable(index_t vertex, const VerticesModifier & vertices_modifier)
```


### add

```cpp
public void add(index_t vertex)
```


### add

```cpp
public void add(const ImmuableVertices & immuables)
```


### empty

```cpp
public bool empty()
```


### clean

```cpp
public void clean()
```




