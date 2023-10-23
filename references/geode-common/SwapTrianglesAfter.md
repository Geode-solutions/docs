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

# struct SwapTrianglesAfter


## Members

```cpp
public absl::FixedArray<Triangle<dimension> > new_triangles

```

```cpp
public FixedArray old_triangles_ids

```



## Functions

### SwapTrianglesAfter

```cpp
public void SwapTrianglesAfter<dimension>(size_t nb_new_triangles, size_t nb_old_triangles)
```




