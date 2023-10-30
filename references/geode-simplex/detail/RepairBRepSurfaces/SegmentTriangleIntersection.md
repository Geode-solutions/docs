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

# class SegmentTriangleIntersection


## Functions

### SegmentTriangleIntersection

```cpp
public void SegmentTriangleIntersection(RepairBRepSurfaces & repair, const Surface3D & edge_surface, const Surface3D & triangle_surface)
```


### operator()

```cpp
public bool operator()(index_t edge_polygon, index_t triangle_polygon)
```


### edge_unique_ids

```cpp
public array edge_unique_ids(const ComponentID & id, const SurfaceMesh3D & mesh, const PolygonEdge & edge)
```


### intersecting_triangles

```cpp
public absl::Span<const Intersection> intersecting_triangles()
```


### duplicated_triangles

```cpp
public absl::Span<const Duplication> duplicated_triangles()
```




