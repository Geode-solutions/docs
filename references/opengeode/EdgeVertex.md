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

# struct EdgeVertex


 This struct represents a graph edge endpoint



## Members

```cpp
public index_t edge_id

```

```cpp
public local_index_t vertex_id

```



## Functions

### EdgeVertex

```cpp
public void EdgeVertex()
```


### EdgeVertex

```cpp
public void EdgeVertex(index_t edge_id_in, local_index_t vertex_id_in)
```


### operator==

```cpp
public bool operator==(const EdgeVertex & other)
```


### operator!=

```cpp
public bool operator!=(const EdgeVertex & other)
```


### operator<

```cpp
public bool operator<(const EdgeVertex & other)
```


### opposite

```cpp
public EdgeVertex opposite()
```


### string

```cpp
public basic_string string()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




