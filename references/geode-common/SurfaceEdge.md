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

# struct SurfaceEdge


## Members

```cpp
public PolygonEdge edge

```

```cpp
public array vertices

```



## Functions

### SurfaceEdge

```cpp
public void SurfaceEdge<dimension>(const SurfaceMesh<dimension> & surface, PolygonEdge edge_in)
```


### operator==

```cpp
public bool operator==(const SurfaceEdge<dimension> & other)
```


### string

```cpp
public basic_string string()
```




