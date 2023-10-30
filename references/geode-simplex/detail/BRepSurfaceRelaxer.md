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

# class BRepSurfaceRelaxer


## Functions

### BRepSurfaceRelaxer

```cpp
public void BRepSurfaceRelaxer(const BRep & model, BRepGeometricModifier & modifier, const Surface3D & surface, const SurfaceRelaxerOptions3D & options)
```


### ~BRepSurfaceRelaxer

```cpp
public void ~BRepSurfaceRelaxer()
```


### vertex_plane

```cpp
public absl::optional<Plane> vertex_plane(index_t vertex)
```


### vertex_normal

```cpp
public absl::optional<std::pair<Vector3D, index_t> > vertex_normal(index_t vertex, index_t p0, index_t p1)
```




