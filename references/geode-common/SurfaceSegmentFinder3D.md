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

# class SurfaceSegmentFinder3D


```cpp
Inherits from SurfaceSegmentFinder<3>
```



## Functions

### SurfaceSegmentFinder3D

```cpp
public void SurfaceSegmentFinder3D(const TriangulatedSurface3D & surface, index_t begin, index_t end, const Plane & plane)
```


### next_vertex_intersection

```cpp
protected optional next_vertex_intersection(const SurfacePath & previous_path, index_t vertex)
```


### next_edge_intersection

```cpp
protected SurfacePath next_edge_intersection(const PolygonEdge & adjacent_edge)
```




