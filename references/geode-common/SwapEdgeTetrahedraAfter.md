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

# struct SwapEdgeTetrahedraAfter


```cpp
Inherits from SwapTetrahedraAfter
```



## Members

```cpp
public FixedArray one_ring_vertices

```



## Functions

### SwapEdgeTetrahedraAfter

```cpp
public void SwapEdgeTetrahedraAfter(size_t nb_new_tetrahedra, size_t nb_old_tetrahedra, absl::FixedArray<index_t> && one_ring_vertices_in)
```




