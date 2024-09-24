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

# struct BMeshEdgeOnIntersection


## Members

```cpp
public index_t bmesh_edge_id

```

```cpp
public PolygonEdge edge_in_cut_surface

```

```cpp
public bool opposite_bmesh_and_surface_edge

```

```cpp
public index_t cutting_triangle_id

```



## Functions

### BMeshEdgeOnIntersection

```cpp
public void BMeshEdgeOnIntersection(index_t bmesh_edge_id_in, const PolygonEdge & edge_in_cut_surface_in, bool opposite_in, index_t cutting_triangle_in)
```


### operator==

```cpp
public bool operator==(const BMeshEdgeOnIntersection & other)
```


### string

```cpp
public basic_string string()
```




