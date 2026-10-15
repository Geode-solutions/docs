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

# struct ModelToMeshMappings


## Members

```cpp
public BijectiveMapping corner_vertices_mapping

```

```cpp
public BijectiveMapping line_edges_mapping

```

```cpp
public BijectiveMapping surface_polygons_mapping

```

```cpp
public BijectiveMapping solid_polyhedra_mapping

```

```cpp
public BijectiveMapping unique_vertices_mapping

```



