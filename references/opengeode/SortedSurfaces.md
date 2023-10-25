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

# struct SortedSurfaces


## Members

```cpp
public FixedArray surfaces

```



## Functions

### SortedSurfaces

```cpp
public void SortedSurfaces(index_t nb_surfaces)
```


### find

```cpp
public InlinedVector find(const SidedSurface & surface)
```


### opposite

```cpp
public index_t opposite(index_t position)
```


### next

```cpp
public index_t next(index_t position)
```




