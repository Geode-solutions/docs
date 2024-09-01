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

# struct SolidPatch


## Members

```cpp
public POSITION position

```

```cpp
public index_t edge_id

```

```cpp
public index_t vertex_id

```



## Functions

### SolidPatch

```cpp
public void SolidPatch(const TetrahedralSolid3D & solid, index_t edge_in, POSITION position_in)
```


### SolidPatch

```cpp
public void SolidPatch(index_t vertex_in)
```


### SolidPatch

```cpp
public void SolidPatch()
```


### is_vertex

```cpp
public bool is_vertex()
```


### is_edge_vertex

```cpp
public bool is_edge_vertex()
```


### is_edge

```cpp
public bool is_edge()
```


### are_same_paths

```cpp
public bool are_same_paths(const SolidPatch & other)
```


### get_vertex_position

```cpp
public POSITION get_vertex_position(geode::index_t vertex)
```


### get_vertex_index

```cpp
public geode::index_t get_vertex_index()
```




