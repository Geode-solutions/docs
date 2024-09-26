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
public index_t vertex

```

```cpp
public array edge_vertices

```

```cpp
public SidedSplitEdgeInfo left

```

```cpp
public SidedSplitEdgeInfo right

```

```cpp
public AlongSplitEdgeInfo along

```



## Functions

### SplitEdgeInfo

```cpp
public void SplitEdgeInfo()
```


### SplitEdgeInfo

```cpp
public void SplitEdgeInfo(index_t nb_tetrahedra, bool with_edges, bool with_facets)
```




