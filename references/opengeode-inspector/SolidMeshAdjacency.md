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

# class SolidMeshAdjacency


 Class for inspecting the adjacency on the facets of a SolidMesh



## Functions

### SolidMeshAdjacency

```cpp
public void SolidMeshAdjacency<dimension>(const SolidMeshAdjacency<dimension> & )
```


### operator=

```cpp
public SolidMeshAdjacency<dimension> & operator=(const SolidMeshAdjacency<dimension> & )
```


### SolidMeshAdjacency

```cpp
public void SolidMeshAdjacency<dimension>(const SolidMesh<dimension> & mesh)
```


### ~SolidMeshAdjacency

```cpp
public void ~SolidMeshAdjacency<dimension>()
```


### mesh_has_wrong_adjacencies

```cpp
public bool mesh_has_wrong_adjacencies()
```


### polyhedron_facets_with_wrong_adjacency

```cpp
public InspectionIssues polyhedron_facets_with_wrong_adjacency()
```




# class SolidMeshAdjacency


