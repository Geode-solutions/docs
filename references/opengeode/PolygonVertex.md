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

# struct PolygonVertex


 This struct represents a local vertex in a polygon



## Members

```cpp
public index_t polygon_id

```

```cpp
public local_index_t vertex_id

```



## Functions

### PolygonVertex

```cpp
public void PolygonVertex()
```


### PolygonVertex

```cpp
public void PolygonVertex(index_t polygon_id_in, local_index_t vertex_id_in)
```


### PolygonVertex

```cpp
public void PolygonVertex(const PolygonEdge & polygon_edge)
```


### operator==

```cpp
public bool operator==(const PolygonVertex & other)
```


### operator!=

```cpp
public bool operator!=(const PolygonVertex & other)
```


### operator<

```cpp
public bool operator<(const PolygonVertex & other)
```


### string

```cpp
public basic_string string()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




