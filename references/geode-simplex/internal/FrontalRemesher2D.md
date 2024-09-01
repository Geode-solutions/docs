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

# class FrontalRemesher2D


```cpp
Inherits from FrontalRemesher<2>
```



## Functions

### FrontalRemesher2D

```cpp
public void FrontalRemesher2D(const TriangulatedSurface2D & background_mesh, TriangulatedSurfaceBuilder2D & background_builder, TriangulatedSurfaceEpsilonModifier2D & background_modifier, const Metric2D & metric, Span lock_vertices)
```


### compute_intersection

```cpp
public Point compute_intersection(const InfiniteLine2D & line, const SurfacePath & path)
```




