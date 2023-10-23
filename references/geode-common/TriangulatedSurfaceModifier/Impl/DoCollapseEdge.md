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

PolygonEdgeGroup



## Functions

### DoCollapseEdge

```cpp
public void DoCollapseEdge(TriangulatedSurfaceModifier<dimension> & modifier, index_t edge_id)
```


### DoCollapseEdge

```cpp
public void DoCollapseEdge(TriangulatedSurfaceModifier<dimension> & modifier, const PolygonEdge & edge)
```


### polygon_edge_collapse

```cpp
public CollapsePolygonEdgeInfo polygon_edge_collapse(index_t collapse_vertex)
```


### edge_collapse

```cpp
public CollapseEdgeInfo edge_collapse(index_t collapse_vertex)
```




