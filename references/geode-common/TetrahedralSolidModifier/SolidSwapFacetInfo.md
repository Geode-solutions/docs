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

# struct SolidSwapFacetInfo


## Members

```cpp
public array inactive_tetrahedra

```

```cpp
public array new_tetrahedra

```

```cpp
public array modified

```

```cpp
public array added

```

```cpp
public array removed

```

```cpp
public array edge_vertices

```



