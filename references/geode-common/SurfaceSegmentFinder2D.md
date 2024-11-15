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

# class SurfaceSegmentFinder2D


 The objective of this class is to find paths inside TrianguledSurface2D. As an example, this class is able to find a rectilinear path between two vertices. This class may be derived for custom path findings.



```cpp
Inherits from SurfaceSegmentFinder<2>
```



## Functions

### SurfaceSegmentFinder2D

```cpp
public void SurfaceSegmentFinder2D(const TriangulatedSurface2D & surface, index_t begin, index_t end)
```


### next_vertex_intersection

```cpp
protected optional next_vertex_intersection(const SurfacePath & previous_path, index_t vertex)
```


### next_edge_intersection

```cpp
protected SurfacePath next_edge_intersection(const PolygonEdge & adjacent_edge)
```




