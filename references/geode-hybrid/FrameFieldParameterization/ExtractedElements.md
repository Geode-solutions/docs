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

# struct ExtractedElements


## Members

```cpp
public BRep elements

```

```cpp
public ModelMapping copy_mapping

```

```cpp
public flat_hash_map line_mapping

```

```cpp
public flat_hash_map surface_mapping

```

```cpp
public flat_hash_map block_mapping

```



