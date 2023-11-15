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

# struct SolidSplitInfo


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

### SolidSplitInfo

```cpp
public void SolidSplitInfo()
```


### SolidSplitInfo

```cpp
public void SolidSplitInfo(SolidSplitEdgeInfo && split_edge_info)
```




