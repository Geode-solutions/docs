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

# class LSCMRemesher


```cpp
Inherits from RemeshAlgo<3>
```



## Functions

### LSCMRemesher

```cpp
public void LSCMRemesher(const TriangulatedSurface3D & input_mesh, const Metric3D & metric, Span lock_vertices, Span outside_polygons, int macro_edges)
```


### remesh

```cpp
public RemeshedSurface3D remesh()
```


### remesh_in_2d

```cpp
public RemeshedSurface2D remesh_in_2d()
```




