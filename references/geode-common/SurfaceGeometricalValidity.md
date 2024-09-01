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

# struct SurfaceGeometricalValidity


## Members

```cpp
public bool is_geometrically_valid

```

```cpp
public std::vector<Triangle<dimension> > invalid_new_triangles

```

```cpp
public vector invalid_triangle_ids

```



## Functions

### operator bool

```cpp
public bool operator bool()
```




