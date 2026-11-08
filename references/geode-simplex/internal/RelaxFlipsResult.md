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

# struct RelaxFlipsResult


## Members

```cpp
public index_t nb_processed

```

```cpp
public index_t nb_single_flips

```

```cpp
public index_t nb_multi_face_removals

```

```cpp
public index_t nb_nested_flips

```



