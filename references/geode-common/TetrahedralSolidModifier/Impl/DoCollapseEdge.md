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

# class DoCollapseEdge


## Records

TetrahedronInfo



## Functions

### DoCollapseEdge

```cpp
public void DoCollapseEdge(TetrahedralSolidModifier & modifier, index_t edge_id)
```


### DoCollapseEdge

```cpp
public void DoCollapseEdge(TetrahedralSolidModifier & modifier, const PolyhedronFacetEdge & edge, array edge_vertices)
```


### collapse

```cpp
public SolidCollapseEdgeInfo collapse(index_t collapse_vertex)
```


### get_preserved_facet_local_indices

```cpp
public std::array<local_index_t, 2> get_preserved_facet_local_indices(index_t tetrahedron_id, const std::array<index_t, 2> & edge_vertices)
```




