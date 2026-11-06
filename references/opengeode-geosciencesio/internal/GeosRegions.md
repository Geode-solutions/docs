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

# struct GeosRegions


 GEOS cell regions of the exported Blocks



## Members

```cpp
public vector solid_regions

```

```cpp
public flat_hash_map block_regions

```

```cpp
public flat_hash_map regions_by_uuid

```

```cpp
public flat_hash_map merged_blocks

```



