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

# class BRepComponentMeshesAdjacency


 Class for inspecting the adjacency of the surface edges and solid facets in the Component Meshes of a BRep.



## Functions

### BRepComponentMeshesAdjacency

```cpp
public void BRepComponentMeshesAdjacency(const BRepComponentMeshesAdjacency & )
```


### operator=

```cpp
public BRepComponentMeshesAdjacency & operator=(const BRepComponentMeshesAdjacency & )
```


### BRepComponentMeshesAdjacency

```cpp
public void BRepComponentMeshesAdjacency(const BRep & model)
```


### ~BRepComponentMeshesAdjacency

```cpp
public void ~BRepComponentMeshesAdjacency()
```


### inspect_brep_meshes_adjacencies

```cpp
public BRepMeshesAdjacencyInspectionResult inspect_brep_meshes_adjacencies()
```




