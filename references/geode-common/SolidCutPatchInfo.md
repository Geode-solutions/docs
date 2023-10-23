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

# struct SolidCutPatchInfo


## Members

```cpp
public vector vertices

```

```cpp
public vector facets_along

```

```cpp
public vector facets_across

```

```cpp
public vector edges

```

```cpp
public vector tetrahedra

```

```cpp
public vector small_edges

```



