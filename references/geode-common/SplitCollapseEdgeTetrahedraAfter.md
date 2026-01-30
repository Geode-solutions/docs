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

# struct SplitCollapseEdgeTetrahedraAfter


```cpp
Inherits from SwapEdgeTetrahedraAfter
```



## Members

```cpp
public FixedArray modified

```



## Functions

### SplitCollapseEdgeTetrahedraAfter

```cpp
public void SplitCollapseEdgeTetrahedraAfter(SwapEdgeTetrahedraAfter && swap_tetrahedra_after, size_t nb_modified_tetrahedra)
```




