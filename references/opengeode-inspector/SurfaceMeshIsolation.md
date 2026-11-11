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

# class SurfaceMeshIsolation


# class SurfaceMeshIsolation


 Class for inspecting the vertices of a SurfaceMesh that are not in any polygon



## Functions

### SurfaceMeshIsolation

```cpp
public void SurfaceMeshIsolation<dimension>(const SurfaceMeshIsolation<dimension> & )
```


### operator=

```cpp
public SurfaceMeshIsolation<dimension> & operator=(const SurfaceMeshIsolation<dimension> & )
```


### SurfaceMeshIsolation

```cpp
public void SurfaceMeshIsolation<dimension>(const SurfaceMesh<dimension> & mesh)
```


### ~SurfaceMeshIsolation

```cpp
public void ~SurfaceMeshIsolation<dimension>()
```


### mesh_has_isolated_vertices

```cpp
public bool mesh_has_isolated_vertices()
```


### isolated_vertices

```cpp
public InspectionIssues<index_t> isolated_vertices()
```




# class SurfaceMeshIsolation


