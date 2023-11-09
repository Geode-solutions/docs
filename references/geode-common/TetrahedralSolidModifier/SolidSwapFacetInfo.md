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

# struct SolidSwapFacetInfo


## Members

```cpp
public std::array<index_t, 2> inactive_tetrahedra

```

```cpp
public std::array<index_t, 3> new_tetrahedra

```

```cpp
public std::array<PolyhedronFacetMapping, 6> modified

```

```cpp
public std::array<PolyhedronFacet, 6> added

```

```cpp
public std::array<PolyhedronFacet, 2> removed

```

```cpp
public std::array<index_t, 2> edge_vertices

```



