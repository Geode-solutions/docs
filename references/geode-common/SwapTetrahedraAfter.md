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

# struct SwapTetrahedraAfter


## Members

```cpp
public FixedArray new_tetrahedra

```

```cpp
public FixedArray old_tetrahedra_ids

```



## Functions

### SwapTetrahedraAfter

```cpp
public void SwapTetrahedraAfter(size_t nb_new_tetrahedra, size_t nb_old_tetrahedra)
```




