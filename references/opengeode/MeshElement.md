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

# struct MeshElement


## Members

```cpp
public uuid mesh_id

```

```cpp
public index_t element_id

```



## Functions

### MeshElement

```cpp
public void MeshElement()
```


### MeshElement

```cpp
public void MeshElement(uuid mesh_id_in, index_t element_id_in)
```


### operator==

```cpp
public bool operator==(const MeshElement & other)
```


### operator!=

```cpp
public bool operator!=(const MeshElement & other)
```


### serialize

```cpp
public void serialize(Archive & archive)
```


### string

```cpp
public basic_string string()
```




