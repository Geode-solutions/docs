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

# class SolidMeshInspector


```cpp
Inherits from AddInspectors<SolidMesh<3U>, SolidMeshAdjacency<3U>, SolidMeshColocation<3U>, SolidMeshDegeneration<3U>, SolidMeshVertexManifold<3U>, SolidMeshEdgeManifold<3U>, SolidMeshFacetManifold<3U>, SolidMeshNegativeElements<3U> >
```



# class SolidMeshInspector


 Class for inspecting a SolidMesh**extends** **extends** 



```cpp
Inherits from AddInspectors<SolidMesh<dimension>, SolidMeshAdjacency<dimension>, SolidMeshColocation<dimension>, SolidMeshDegeneration<dimension>, SolidMeshVertexManifold<dimension>, SolidMeshEdgeManifold<dimension>, SolidMeshFacetManifold<dimension>, SolidMeshNegativeElements<dimension> >
```



## Functions

### SolidMeshInspector

```cpp
public void SolidMeshInspector<dimension>(const SolidMeshInspector<dimension> & )
```


### operator=

```cpp
public SolidMeshInspector<dimension> & operator=(const SolidMeshInspector<dimension> & )
```


### SolidMeshInspector

```cpp
public void SolidMeshInspector<dimension>(const SolidMesh<dimension> & mesh)
```


### inspect_solid

```cpp
public SolidInspectionResult inspect_solid()
```




