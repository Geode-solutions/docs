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

# class ComponentMeshesColocation


 Class for inspecting the colocation of points in the Component Meshes of a Model (BRep or Section).



## Functions

### ComponentMeshesColocation

```cpp
public void ComponentMeshesColocation<Model>(const ComponentMeshesColocation<Model> & )
```


### operator=

```cpp
public ComponentMeshesColocation<Model> & operator=(const ComponentMeshesColocation<Model> & )
```


### ComponentMeshesColocation

```cpp
public void ComponentMeshesColocation<Model>(const Model & model)
```


### ~ComponentMeshesColocation

```cpp
public void ~ComponentMeshesColocation<Model>()
```


### inspect_meshes_point_colocations

```cpp
public MeshesColocationInspectionResult inspect_meshes_point_colocations()
```




# class ComponentMeshesColocation


# class ComponentMeshesColocation


