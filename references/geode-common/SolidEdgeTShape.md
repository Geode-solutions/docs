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

# struct SolidEdgeTShape


## Members

```cpp
public index_t polyhedron

```

```cpp
public local_index_t apex

```

```cpp
public local_index_t opposite

```



## Functions

### SolidEdgeTShape

```cpp
public void SolidEdgeTShape()
```




