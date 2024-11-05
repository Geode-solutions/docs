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

# class SurfaceMeshInspector


```cpp
Inherits from AddInspectors<SurfaceMesh<3U>, SurfaceMeshAdjacency<3U>, SurfaceMeshColocation<3U>, SurfaceMeshDegeneration<3U>, SurfaceMeshEdgeManifold<3U>, SurfaceMeshVertexManifold<3U>, SurfaceMeshIntersections<3U> >
```



# class SurfaceMeshInspector


```cpp
Inherits from AddInspectors<SurfaceMesh<2U>, SurfaceMeshAdjacency<2U>, SurfaceMeshColocation<2U>, SurfaceMeshDegeneration<2U>, SurfaceMeshEdgeManifold<2U>, SurfaceMeshVertexManifold<2U>, SurfaceMeshIntersections<2U> >
```



# class SurfaceMeshInspector


 Class for inspecting a SurfaceMesh**extends** **extends** **extends** **extends** **extends** 



```cpp
Inherits from AddInspectors<SurfaceMesh<dimension>, SurfaceMeshAdjacency<dimension>, SurfaceMeshColocation<dimension>, SurfaceMeshDegeneration<dimension>, SurfaceMeshEdgeManifold<dimension>, SurfaceMeshVertexManifold<dimension>, SurfaceMeshIntersections<dimension> >
```



## Functions

### SurfaceMeshInspector

```cpp
public void SurfaceMeshInspector<dimension>(const SurfaceMeshInspector<dimension> & )
```


### operator=

```cpp
public SurfaceMeshInspector<dimension> & operator=(const SurfaceMeshInspector<dimension> & )
```


### SurfaceMeshInspector

```cpp
public void SurfaceMeshInspector<dimension>(const SurfaceMesh<dimension> & mesh)
```


### ~SurfaceMeshInspector

```cpp
public void ~SurfaceMeshInspector<dimension>()
```


### inspect_surface

```cpp
public SurfaceInspectionResult inspect_surface()
```




