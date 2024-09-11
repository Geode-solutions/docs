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

# class BRepComponentMeshesManifold


 Class for inspecting the manifold property in the Component Meshes of a BRep.



## Functions

### BRepComponentMeshesManifold

```cpp
public void BRepComponentMeshesManifold(const BRepComponentMeshesManifold & )
```


### operator=

```cpp
public BRepComponentMeshesManifold & operator=(const BRepComponentMeshesManifold & )
```


### BRepComponentMeshesManifold

```cpp
public void BRepComponentMeshesManifold(const BRep & brep)
```


### ~BRepComponentMeshesManifold

```cpp
public void ~BRepComponentMeshesManifold()
```


### inspect_brep_manifold

```cpp
public BRepMeshesManifoldInspectionResult inspect_brep_manifold()
```




