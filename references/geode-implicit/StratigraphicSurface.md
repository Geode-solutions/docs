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

# struct StratigraphicSurface


## Members

```cpp
public const uuid & xyz_surface_id

```

```cpp
public unique_ptr surface

```

```cpp
public const uuid & adjacent_block_id

```

```cpp
public SURFACE_ORIENTATION oriented_towards_block

```



## Functions

### StratigraphicSurface

```cpp
public void StratigraphicSurface(const uuid & xyz_surface_id_in, unique_ptr strati_surface_in, const uuid & adjacent_block_id_in, SURFACE_ORIENTATION orientation)
```




