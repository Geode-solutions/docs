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

# class SolidMeshEdgeManifold


 Class for inspecting the manifold property of a SolidMesh



## Functions

### SolidMeshEdgeManifold

```cpp
public void SolidMeshEdgeManifold<dimension>(const SolidMeshEdgeManifold<dimension> & )
```


### operator=

```cpp
public SolidMeshEdgeManifold<dimension> & operator=(const SolidMeshEdgeManifold<dimension> & )
```


### SolidMeshEdgeManifold

```cpp
public void SolidMeshEdgeManifold<dimension>(const SolidMesh<dimension> & mesh)
```


### ~SolidMeshEdgeManifold

```cpp
public void ~SolidMeshEdgeManifold<dimension>()
```


### mesh_edges_are_manifold

```cpp
public bool mesh_edges_are_manifold()
```


### non_manifold_edges

```cpp
public InspectionIssues non_manifold_edges()
```




# class SolidMeshEdgeManifold


