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

# struct TetrahedronInfo


## Members

```cpp
public index_t tetrahedron_id

```

```cpp
public index_t adj_tetrahedron_id

```

```cpp
public absl::optional<PolyhedronFacet> opposite_facet_adjacent

```

```cpp
public absl::optional<PolyhedronFacet> adj_opposite_facet_adjacent

```



