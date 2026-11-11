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

# class SolidMeshIsolation


# class SolidMeshIsolation


 Class for inspecting the vertices of a SolidMesh that are not in any polyhedron



## Functions

### SolidMeshIsolation

```cpp
public void SolidMeshIsolation<dimension>(const SolidMeshIsolation<dimension> & )
```


### operator=

```cpp
public SolidMeshIsolation<dimension> & operator=(const SolidMeshIsolation<dimension> & )
```


### SolidMeshIsolation

```cpp
public void SolidMeshIsolation<dimension>(const SolidMesh<dimension> & mesh)
```


### ~SolidMeshIsolation

```cpp
public void ~SolidMeshIsolation<dimension>()
```


### mesh_has_isolated_vertices

```cpp
public bool mesh_has_isolated_vertices()
```


### isolated_vertices

```cpp
public InspectionIssues<index_t> isolated_vertices()
```




