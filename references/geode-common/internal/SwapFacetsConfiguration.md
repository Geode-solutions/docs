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

# struct SwapFacetsConfiguration


 Topology of a multi-face removal (swap of several facets): the given facets are seen from the tetrahedra containing the first apex (the vertex opposite to each facet), the tetrahedra across the facets contain the second apex. The facets form a triangulated polygon whose vertices are all on its border.



## Members

```cpp
public array apexes

```

```cpp
public vector adjacent_facets

```

```cpp
public vector facets_vertices

```

```cpp
public vector border_edges

```

```cpp
public vector inner_edges

```

```cpp
public vector ring_vertices

```



## Records

BorderEdge



