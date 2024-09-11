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

# class SurfaceMeshAdjacency


 Class for inspecting the adjacency on the edges of a SurfaceMesh



## Functions

### SurfaceMeshAdjacency

```cpp
public void SurfaceMeshAdjacency<dimension>(const SurfaceMeshAdjacency<dimension> & )
```


### operator=

```cpp
public SurfaceMeshAdjacency<dimension> & operator=(const SurfaceMeshAdjacency<dimension> & )
```


### SurfaceMeshAdjacency

```cpp
public void SurfaceMeshAdjacency<dimension>(const SurfaceMesh<dimension> & mesh)
```


### ~SurfaceMeshAdjacency

```cpp
public void ~SurfaceMeshAdjacency<dimension>()
```


### mesh_has_wrong_adjacencies

```cpp
public bool mesh_has_wrong_adjacencies()
```


### polygon_edges_with_wrong_adjacency

```cpp
public InspectionIssues polygon_edges_with_wrong_adjacency()
```




# class SurfaceMeshAdjacency


# class SurfaceMeshAdjacency


