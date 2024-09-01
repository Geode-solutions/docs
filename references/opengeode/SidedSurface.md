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

# struct SidedSurface


## Members

```cpp
public uuid id

```

```cpp
public local_index_t side

```

```cpp
public PolygonEdge edge

```



## Functions

### SidedSurface

```cpp
public void SidedSurface()
```


### SidedSurface

```cpp
public void SidedSurface(uuid id_in, local_index_t side_in, PolygonEdge edge_in)
```


### SidedSurface

```cpp
public void SidedSurface(uuid id_in, local_index_t side_in)
```


### operator==

```cpp
public bool operator==(const SidedSurface & other)
```


### operator!=

```cpp
public bool operator!=(const SidedSurface & other)
```




