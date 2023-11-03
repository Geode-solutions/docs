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

# struct SurfaceTopologicalValidity


## Members

```cpp
public bool is_topologically_valid

```

```cpp
public bool new_vertex_is_manifold

```

```cpp
public int vertices_creating_non_manifold_edges

```



## Functions

### operator bool

```cpp
public bool operator bool()
```




