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

# class BRepMeshesInspector


 Class for inspecting a BRep model**extends** 



```cpp
Inherits from BRepUniqueVerticesColocation, BRepComponentMeshesAdjacency, BRepComponentMeshesColocation, BRepComponentMeshesDegeneration, BRepComponentMeshesManifold, BRepComponentMeshesNegativeElements, BRepMeshesIntersections
```



## Functions

### BRepMeshesInspector

```cpp
public void BRepMeshesInspector(const BRepMeshesInspector & )
```


### operator=

```cpp
public BRepMeshesInspector & operator=(const BRepMeshesInspector & )
```


### BRepMeshesInspector

```cpp
public void BRepMeshesInspector(const BRep & brep)
```


### inspect_brep_meshes

```cpp
public BRepMeshesInspectionResult inspect_brep_meshes()
```




