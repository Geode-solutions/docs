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

# class BRepComponentMeshesNegativeElements


 Class for inspecting the negative elements in the Component Meshes of a BRep .



## Functions

### BRepComponentMeshesNegativeElements

```cpp
public void BRepComponentMeshesNegativeElements(const BRepComponentMeshesNegativeElements & )
```


### operator=

```cpp
public BRepComponentMeshesNegativeElements & operator=(const BRepComponentMeshesNegativeElements & )
```


### BRepComponentMeshesNegativeElements

```cpp
public void BRepComponentMeshesNegativeElements(const BRep & brep)
```


### ~BRepComponentMeshesNegativeElements

```cpp
public void ~BRepComponentMeshesNegativeElements()
```


### inspect_negative_elements

```cpp
public BRepMeshesNegativeElementsInspectionResult inspect_negative_elements()
```




