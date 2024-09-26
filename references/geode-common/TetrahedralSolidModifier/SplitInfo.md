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

# struct SplitInfo


## Members

```cpp
public index_t vertex

```

```cpp
public InlinedVector tetrahedra

```

```cpp
public InlinedVector facets

```

```cpp
public InlinedVector edges

```



## Functions

### SplitInfo

```cpp
public void SplitInfo()
```


### SplitInfo

```cpp
public void SplitInfo(SplitEdgeInfo && split_edge_info)
```




