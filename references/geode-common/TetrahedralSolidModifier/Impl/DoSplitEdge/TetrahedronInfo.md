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
public index_t id

```

```cpp
public PolyhedronVertices vertices

```

```cpp
public array edge_vertex_num

```

```cpp
public array opposite_edge_vertex_num

```

```cpp
public std::array<absl::optional<PolyhedronFacet>, 4> tetrahedron_adjacents

```

```cpp
public array new_tetrahedra_ids

```



