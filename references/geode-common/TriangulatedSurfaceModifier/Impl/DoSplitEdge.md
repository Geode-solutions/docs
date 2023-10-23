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
public void DoSplitEdge(TriangulatedSurfaceModifier<dimension>::Impl & modifier, const PolygonEdge & edge)
```


### split

```cpp
public SplitPolygonEdgeInfo split(index_t split_vertex)
```


### split_polygon_along_edge

```cpp
public std::tuple<index_t, index_t> split_polygon_along_edge(const PolygonEdge & polygon_edge, index_t new_point)
```




