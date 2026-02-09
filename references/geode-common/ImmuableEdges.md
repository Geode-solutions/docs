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

# class ImmuableEdges


## Functions

### ImmuableEdges

```cpp
public void ImmuableEdges(const ImmuableEdges & )
```


### operator=

```cpp
public ImmuableEdges & operator=(const ImmuableEdges & )
```


### ImmuableEdges

```cpp
public void ImmuableEdges()
```


### ImmuableEdges

```cpp
public void ImmuableEdges(ImmuableEdges && other)
```


### operator=

```cpp
public ImmuableEdges & operator=(ImmuableEdges && other)
```


### ~ImmuableEdges

```cpp
public void ~ImmuableEdges()
```


### is_immuable

```cpp
public bool is_immuable(const std::array<index_t, 2> & edge_vertices, const VerticesModifier & vertices_modifier)
```


### add

```cpp
public void add(const std::array<index_t, 2> & edge_vertices)
```


### add

```cpp
public void add(const ImmuableEdges & immuables)
```


### empty

```cpp
public bool empty()
```


### clean

```cpp
public void clean()
```




