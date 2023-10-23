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

# struct ModelSplitPolygonEdgeInfo


## Members

```cpp
public index_t unique_vertex

```

```cpp
public flat_hash_map line_info

```

```cpp
public absl::flat_hash_map<uuid, absl::InlinedVector<SplitPolygonEdgeInfo, 1> > surface_info

```



