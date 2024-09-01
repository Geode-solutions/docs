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

# struct BlockPolyhedraFacetVertices


## Members

```cpp
public optional oriented_polyhedron_facet

```

```cpp
public optional opposite_polyhedron_facet

```



## Functions

### nb_facets

```cpp
public index_t nb_facets()
```




