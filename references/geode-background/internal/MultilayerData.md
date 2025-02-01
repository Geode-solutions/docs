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

# struct MultilayerData


## Members

```cpp
public vector modified_tetrahedra

```

```cpp
public array edge_to_split

```

```cpp
public Point split_point

```

```cpp
public MultilayerStatus status

```



## Enums

| enum class MultilayerStatus |

--

| forbidden_edges_created |
| forbidden_split_done |
| merge_failed |
| sucess |





