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

# class SurfaceMeshEdgeManifold


# class SurfaceMeshEdgeManifold


# class SurfaceMeshEdgeManifold


 Class for inspecting the manifold property of a SurfaceMesh



## Functions

### SurfaceMeshEdgeManifold

```cpp
public void SurfaceMeshEdgeManifold<dimension>(const SurfaceMeshEdgeManifold<dimension> & )
```


### operator=

```cpp
public SurfaceMeshEdgeManifold<dimension> & operator=(const SurfaceMeshEdgeManifold<dimension> & )
```


### SurfaceMeshEdgeManifold

```cpp
public void SurfaceMeshEdgeManifold<dimension>(const SurfaceMesh<dimension> & mesh)
```


### ~SurfaceMeshEdgeManifold

```cpp
public void ~SurfaceMeshEdgeManifold<dimension>()
```


### mesh_edges_are_manifold

```cpp
public bool mesh_edges_are_manifold()
```


### non_manifold_edges

```cpp
public InspectionIssues non_manifold_edges()
```




