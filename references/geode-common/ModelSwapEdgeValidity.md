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

# struct ModelSwapEdgeValidity


## Members

```cpp
public bool edge_is_on_line

```

```cpp
public SurfaceSwapEdgeValidities<dimension> surface_validities

```



## Functions

### operator bool

```cpp
public bool operator bool()
```




