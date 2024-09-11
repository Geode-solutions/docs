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

# class SolidMeshDegeneration


 Class for inspecting the degeneration of a SolidMesh



## Functions

### SolidMeshDegeneration

```cpp
public void SolidMeshDegeneration<dimension>(const SolidMeshDegeneration<dimension> & )
```


### operator=

```cpp
public SolidMeshDegeneration<dimension> & operator=(const SolidMeshDegeneration<dimension> & )
```


### SolidMeshDegeneration

```cpp
public void SolidMeshDegeneration<dimension>(const SolidMesh<dimension> & mesh)
```


### ~SolidMeshDegeneration

```cpp
public void ~SolidMeshDegeneration<dimension>()
```


### is_mesh_degenerated

```cpp
public bool is_mesh_degenerated()
```


### degenerated_edges

```cpp
public InspectionIssues degenerated_edges()
```


### degenerated_polyhedra

```cpp
public InspectionIssues degenerated_polyhedra()
```




# class SolidMeshDegeneration


