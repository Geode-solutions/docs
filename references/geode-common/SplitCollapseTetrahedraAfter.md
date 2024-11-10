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

# struct SplitCollapseTetrahedraAfter


```cpp
Inherits from SwapTetrahedraAfter
```



## Members

```cpp
public FixedArray modified

```



## Functions

### SplitCollapseTetrahedraAfter

```cpp
public void SplitCollapseTetrahedraAfter(SwapTetrahedraAfter && swap_tetrahedra_after, size_t nb_modified_tetrahedra)
```


### SplitCollapseTetrahedraAfter

```cpp
public void SplitCollapseTetrahedraAfter(size_t nb_new_tetrahedra, size_t nb_old_tetrahedra, size_t nb_modified_tetrahedra)
```




