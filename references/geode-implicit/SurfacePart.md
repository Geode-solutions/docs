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

# struct SurfacePart


## Members

```cpp
public unique_ptr surface

```

```cpp
public flat_hash_map intersections_towards_interior

```

```cpp
public flat_hash_map intersections_towards_exterior

```

```cpp
public index_t final_surface_id

```



## Functions

### SurfacePart

```cpp
public void SurfacePart(unique_ptr surface_in, flat_hash_map intersections_towards_interior_in, flat_hash_map intersections_towards_exterior_in)
```




