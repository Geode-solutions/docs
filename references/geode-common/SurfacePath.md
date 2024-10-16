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

# struct SurfacePath


## Members

```cpp
public PolygonEdge edge

```

```cpp
public POSITION position

```

```cpp
public index_t vertex_id

```

```cpp
public bool opposite_side

```



## Functions

### SurfacePath

```cpp
public void SurfacePath(const TriangulatedSurface<dimension> & surface, PolygonEdge edge_in, POSITION position_in)
```


### SurfacePath

```cpp
public void SurfacePath(index_t vertex_in)
```


### SurfacePath

```cpp
public void SurfacePath()
```


### operator==

```cpp
public bool operator==(const SurfacePath & rhs)
```


### are_same_path

```cpp
public bool are_same_path(const TriangulatedSurface<dimension> & surface, const SurfacePath & other)
```


### is_vertex

```cpp
public bool is_vertex()
```


### string

```cpp
public basic_string string()
```




