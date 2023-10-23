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


## Records

TetrahedronInfo



## Functions

### DoSplitEdge

```cpp
public void DoSplitEdge(class TetrahedralSolidModifier::Impl & modifier, index_t edge_id, const std::array<index_t, 2> & vertices)
```


### DoSplitEdge

```cpp
public void DoSplitEdge(class TetrahedralSolidModifier::Impl & modifier, const PolyhedronFacetEdge & edge, array vertices)
```


### split

```cpp
public SolidSplitEdgeInfo split(index_t split_vertex)
```




