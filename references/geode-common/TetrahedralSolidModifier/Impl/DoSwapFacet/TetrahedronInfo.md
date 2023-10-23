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
public PolyhedronFacetVertices facet_vertices

```

```cpp
public std::array<local_index_t, 3> local_facet_vertices

```

```cpp
public std::array<local_index_t, 3> adj_local_facet_vertices

```

```cpp
public array opposite_vertices

```

```cpp
public std::array<absl::optional<PolyhedronFacet>, 3> tetrahedron_adjacents

```

```cpp
public std::array<absl::optional<PolyhedronFacet>, 3> adj_tetrahedron_adjacents

```

```cpp
public array new_tetrahedra_ids

```



