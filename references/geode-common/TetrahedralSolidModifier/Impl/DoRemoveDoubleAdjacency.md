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

# class DoRemoveDoubleAdjacency


## Records

TetrahedronInfo



## Functions

### DoRemoveDoubleAdjacency

```cpp
public void DoRemoveDoubleAdjacency(class TetrahedralSolidModifier::Impl & modifier, const PolyhedronFacetEdge & edge)
```


### remove

```cpp
public SolidRemoveMultipleAdjacencyInfo remove()
```


### opposite_edge_local_vertices

```cpp
public std::array<local_index_t, 2> opposite_edge_local_vertices(const std::array<local_index_t, 2> & edge)
```




