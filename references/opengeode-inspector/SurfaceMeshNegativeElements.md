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

# class SurfaceMeshNegativeElements


 Class for inspecting the negative elements of a SurfaceMesh



## Functions

### SurfaceMeshNegativeElements

```cpp
public void SurfaceMeshNegativeElements<dimension>(const SurfaceMeshNegativeElements<dimension> & )
```


### operator=

```cpp
public SurfaceMeshNegativeElements<dimension> & operator=(const SurfaceMeshNegativeElements<dimension> & )
```


### SurfaceMeshNegativeElements

```cpp
public void SurfaceMeshNegativeElements<dimension>(const SurfaceMesh<dimension> & mesh)
```


### ~SurfaceMeshNegativeElements

```cpp
public void ~SurfaceMeshNegativeElements<dimension>()
```


### mesh_has_negative_elements

```cpp
public bool mesh_has_negative_elements()
```


### negative_polygons

```cpp
public InspectionIssues negative_polygons()
```




# class SurfaceMeshNegativeElements


