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

# class PropagateAlongPlane


```cpp
Inherits from SurfacePathFinder<3>
```



## Functions

### PropagateAlongPlane

```cpp
public void PropagateAlongPlane(const StructuralModel & model, const TriangulatedSurface3D & surface, const OwnerPlane & plane, Span top_surfaces, Span bottom_surfaces, bool same_orientation)
```


### along_plane

```cpp
public optional along_plane(const SurfacePath & first_path)
```


### stop_propagation

```cpp
protected bool stop_propagation(const SurfacePath & path)
```


### next_intersection

```cpp
protected optional next_intersection(const SurfacePath & path, bool is_first_path)
```


### next_vertex_intersection

```cpp
protected optional next_vertex_intersection(const index_t vertex)
```


### next_edge_intersection

```cpp
protected optional next_edge_intersection(const PolygonEdge & adjacent_edge)
```


### oriented_edge_segment

```cpp
protected Segment oriented_edge_segment(const OrientedPolygonEdge & edge)
```



