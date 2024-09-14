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

# struct InternalDistance


## Members

```cpp
public CONFIGURATION_TYPE type

```

```cpp
public double distance

```

```cpp
public local_index_t vertex

```

```cpp
public array vertices

```

```cpp
public Point base_point

```



## Records

Options



## Functions

### InternalDistance

```cpp
public void InternalDistance(const InternalDistance & )
```


### operator=

```cpp
public InternalDistance & operator=(const InternalDistance & )
```


### InternalDistance

```cpp
public void InternalDistance()
```


### InternalDistance

```cpp
public void InternalDistance(double distance_in, array vertices_in)
```


### InternalDistance

```cpp
public void InternalDistance(array vertices_in)
```


### InternalDistance

```cpp
public void InternalDistance(double distance_in, local_index_t vertex_in, array edge_in)
```


### InternalDistance

```cpp
public void InternalDistance(double distance_in, local_index_t vertex_in)
```


### InternalDistance

```cpp
public void InternalDistance(local_index_t vertex_in)
```


### InternalDistance

```cpp
public void InternalDistance(double distance_in, array edge_in, Point base_point_in)
```


### InternalDistance

```cpp
public void InternalDistance(InternalDistance && other)
```


### operator=

```cpp
public InternalDistance & operator=(InternalDistance && other)
```


### ~InternalDistance

```cpp
public void ~InternalDistance()
```


### operator<

```cpp
public bool operator<(const InternalDistance & other)
```




## Enums

| enum class CONFIGURATION_TYPE |

--

| vertex_vertex |
| edge_vertex |
| facet_vertex |
| edge_edge |
| double_adjacency |
| triple_adjacency |
| no_type |




