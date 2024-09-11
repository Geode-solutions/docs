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

# class SolidMeshNegativeElements


# class SolidMeshNegativeElements


 Class for inspecting the negative elements of a SolidMesh



## Functions

### SolidMeshNegativeElements

```cpp
public void SolidMeshNegativeElements<dimension>(const SolidMeshNegativeElements<dimension> & )
```


### operator=

```cpp
public SolidMeshNegativeElements<dimension> & operator=(const SolidMeshNegativeElements<dimension> & )
```


### SolidMeshNegativeElements

```cpp
public void SolidMeshNegativeElements<dimension>(const SolidMesh<dimension> & mesh)
```


### ~SolidMeshNegativeElements

```cpp
public void ~SolidMeshNegativeElements<dimension>()
```


### mesh_has_negative_elements

```cpp
public bool mesh_has_negative_elements()
```


### negative_polyhedra

```cpp
public InspectionIssues negative_polyhedra()
```




