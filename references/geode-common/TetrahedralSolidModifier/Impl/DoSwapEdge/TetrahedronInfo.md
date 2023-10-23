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
public std::array<local_index_t, 2> opposite_facets

```

```cpp
public std::array<absl::optional<PolyhedronFacet>, 2> opposite_facets_adjacents

```

```cpp
public array one_ring_vertex_pair

```

```cpp
public std::array<local_index_t, 2> one_ring_vertex_pair_facets

```



