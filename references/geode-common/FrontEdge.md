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

# struct FrontEdge


## Members

```cpp
public geode::index_t solid_edge_id

```

```cpp
public array patch_vertices

```

```cpp
public PolyhedronFacet hint_facet

```

```cpp
public pair hint_edge

```

```cpp
public geode::index_t triangle_info_ptr

```



## Functions

### FrontEdge

```cpp
public void FrontEdge(array patch_vertices_in, PolyhedronFacet hint_facet_in, geode::index_t triangle_info_ptr_in)
```


### FrontEdge

```cpp
public void FrontEdge(geode::index_t solid_edge_in, array patch_vertices_in, geode::index_t triangle_info_ptr_in)
```




