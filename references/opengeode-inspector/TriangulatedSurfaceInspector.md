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

# class TriangulatedSurfaceInspector


```cpp
Inherits from SurfaceMeshInspector<3U>, AddInspectors<TriangulatedSurface<3U>, TriangulatedSurfaceIntersections<3U> >
```



# class TriangulatedSurfaceInspector


```cpp
Inherits from SurfaceMeshInspector<2U>, AddInspectors<TriangulatedSurface<2U>, TriangulatedSurfaceIntersections<2U> >
```



# class TriangulatedSurfaceInspector


 Class for inspecting a TriangulatedSurface**extends** **extends** 



```cpp
Inherits from SurfaceMeshInspector<dimension>, AddInspectors<TriangulatedSurface<dimension>, TriangulatedSurfaceIntersections<dimension> >
```



## Functions

### TriangulatedSurfaceInspector

```cpp
public void TriangulatedSurfaceInspector<dimension>(const TriangulatedSurface<dimension> & mesh)
```


### ~TriangulatedSurfaceInspector

```cpp
public void ~TriangulatedSurfaceInspector<dimension>()
```


### inspect_surface

```cpp
public SurfaceInspectionResult inspect_surface()
```




