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

# struct SplitEdgeInfo


## Members

```cpp
public array new_edges

```

```cpp
public index_t old_edge

```

```cpp
public index_t vertex

```



## Functions

### SplitEdgeInfo

```cpp
public void SplitEdgeInfo()
```




