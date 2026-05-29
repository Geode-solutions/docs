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

# struct UniqueEdgeCatalog


## Members

```cpp
public linked_hash_map unique_edge_indexation

```

```cpp
public linked_hash_map unique_edge_to_surface_edges

```

```cpp
public linked_hash_map unique_edge_to_unique_polygon_vertices

```



