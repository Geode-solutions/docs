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

# class DoSplitEdge


## Functions

### DoSplitEdge

```cpp
public void DoSplitEdge(EdgedCurveModifier<dimension>::Impl & modifier, index_t edge_id)
```


### edge_split

```cpp
public index_t edge_split(index_t split_vertex)
```




