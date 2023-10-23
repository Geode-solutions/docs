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

# struct SolidPath


## Members

```cpp
public Position position

```

```cpp
public PolyhedronFacet facet

```

```cpp
public index_t vertex_id

```



## Functions

### SolidPath

```cpp
public void SolidPath(const TetrahedralSolid3D & solid, PolyhedronFacet facet_in, Position position_in)
```


### SolidPath

```cpp
public void SolidPath(index_t vertex_in)
```


### SolidPath

```cpp
public void SolidPath()
```


### is_vertex

```cpp
public bool is_vertex()
```


### is_facet_vertex

```cpp
public bool is_facet_vertex()
```


### is_edge

```cpp
public bool is_edge()
```


### is_facet

```cpp
public bool is_facet()
```


### are_same_paths

```cpp
public bool are_same_paths(const TetrahedralSolid3D & solid, const SolidPath & other)
```


### get_vertex_position

```cpp
public Position get_vertex_position(geode::local_index_t vertex)
```


### get_edge_position

```cpp
public Position get_edge_position(geode::local_index_t edge)
```


### get_edge_index

```cpp
public geode::local_index_t get_edge_index()
```


### get_vertex_index

```cpp
public geode::local_index_t get_vertex_index()
```


### get_edge_vertex_id

```cpp
public geode::local_index_t get_edge_vertex_id(geode::local_index_t vertex)
```




