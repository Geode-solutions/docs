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

# struct MeshElements


## Members

```cpp
public flat_hash_map surface_polygons

```

```cpp
public flat_hash_map curve_edges

```

```cpp
public flat_hash_map point_set_points

```



## Functions

### MeshElements

```cpp
public void MeshElements()
```


### empty

```cpp
public bool empty()
```


### size

```cpp
public index_t size()
```




