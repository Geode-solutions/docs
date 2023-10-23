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
public std::array<local_index_t, 2> preserved_facet_ids

```

```cpp
public std::array<absl::optional<PolyhedronFacet>, 2> adjacent_facet_ids

```



