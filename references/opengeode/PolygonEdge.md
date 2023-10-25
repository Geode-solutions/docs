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

# struct PolygonEdge


 This struct represents an edge in a polygon



## Members

```cpp
public index_t polygon_id

```

```cpp
public local_index_t edge_id

```



## Functions

### PolygonEdge

```cpp
public void PolygonEdge()
```


### PolygonEdge

```cpp
public void PolygonEdge(index_t polygon_id_in, local_index_t edge_id_in)
```


### PolygonEdge

```cpp
public void PolygonEdge(PolygonVertex polygon_vertex)
```


### operator==

```cpp
public bool operator==(const PolygonEdge & other)
```


### operator!=

```cpp
public bool operator!=(const PolygonEdge & other)
```


### operator<

```cpp
public bool operator<(const PolygonEdge & other)
```


### string

```cpp
public basic_string string()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




