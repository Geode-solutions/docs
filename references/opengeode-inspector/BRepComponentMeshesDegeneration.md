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

# class BRepComponentMeshesDegeneration


 Class for inspecting the degeneration of elements in the Component Meshes of a BRep .



## Functions

### BRepComponentMeshesDegeneration

```cpp
public void BRepComponentMeshesDegeneration(const BRepComponentMeshesDegeneration & )
```


### operator=

```cpp
public BRepComponentMeshesDegeneration & operator=(const BRepComponentMeshesDegeneration & )
```


### BRepComponentMeshesDegeneration

```cpp
public void BRepComponentMeshesDegeneration(const BRep & brep)
```


### ~BRepComponentMeshesDegeneration

```cpp
public void ~BRepComponentMeshesDegeneration()
```


### inspect_elements_degeneration

```cpp
public BRepMeshesDegenerationInspectionResult inspect_elements_degeneration()
```


### inspect_edges_degeneration

```cpp
public BRepMeshesDegenerationInspectionResult inspect_edges_degeneration(double threshold)
```


### inspect_polygons_degeneration

```cpp
public BRepMeshesDegenerationInspectionResult inspect_polygons_degeneration(double threshold)
```


### inspect_polyhedra_degeneration

```cpp
public BRepMeshesDegenerationInspectionResult inspect_polyhedra_degeneration(double threshold)
```




