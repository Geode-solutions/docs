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

# struct ForbiddenSolidElements


## Members

```cpp
public int edges

```

```cpp
public int facets

```



## Functions

### is_edge_forbidden

```cpp
public bool is_edge_forbidden(const EdgeVertices & edge, const VerticesModifier & vertices_modifier)
```


### is_facet_forbidden

```cpp
public bool is_facet_forbidden(const int & facet, const VerticesModifier & vertices_modifier)
```

### is_facet_forbidden

```cpp
public bool is_facet_forbidden(const FacetVertices & facet, const VerticesModifier & vertices_modifier)
```




