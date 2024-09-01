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
public void PropagateAlongPlane(const FrontalRemesher3D & remesher, const Plane & plane)
```


### along_plane

```cpp
public optional along_plane(const std::vector<OrientedPolygonEdge> & initial_edges, double target)
```


### find_first_path

```cpp
protected vector find_first_path(const std::vector<OrientedPolygonEdge> & initial_edges)
```


### stop_propagation

```cpp
protected bool stop_propagation(const SurfacePath & path, const Point3D & point, double target)
```


### next_intersection

```cpp
protected SurfacePath next_intersection(const PolygonEdge & adjacent_edge)
```


### oriented_edge_segment

```cpp
protected Segment oriented_edge_segment(const OrientedPolygonEdge & edge)
```




