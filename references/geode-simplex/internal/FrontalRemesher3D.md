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

# class FrontalRemesher3D


```cpp
Inherits from FrontalRemesher<3>
```



## Functions

### FrontalRemesher3D

```cpp
public void FrontalRemesher3D(const TriangulatedSurface3D & background_mesh, TriangulatedSurfaceBuilder3D & background_builder, TriangulatedSurfaceEpsilonModifier3D & background_modifier, const Metric3D & metric, Span lock_vertices)
```


### compute_intersection

```cpp
public Point compute_intersection(const Plane & plane, const SurfacePath & path)
```




