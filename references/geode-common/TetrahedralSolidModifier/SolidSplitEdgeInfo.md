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

# struct SolidSplitEdgeInfo


## Members

```cpp
public index_t vertex

```

```cpp
public SidedSolidSplitEdgeInfo left

```

```cpp
public SidedSolidSplitEdgeInfo right

```

```cpp
public AlongSolidSplitEdgeInfo along

```



## Functions

### SolidSplitEdgeInfo

```cpp
public void SolidSplitEdgeInfo()
```


### SolidSplitEdgeInfo

```cpp
public void SolidSplitEdgeInfo(index_t nb_tetrahedra, bool with_edges, bool with_facets)
```




