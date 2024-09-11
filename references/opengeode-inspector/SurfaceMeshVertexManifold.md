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

# class SurfaceMeshVertexManifold


# class SurfaceMeshVertexManifold


 Class for inspecting the manifold property of a SurfaceMesh



## Functions

### SurfaceMeshVertexManifold

```cpp
public void SurfaceMeshVertexManifold<dimension>(const SurfaceMeshVertexManifold<dimension> & )
```


### operator=

```cpp
public SurfaceMeshVertexManifold<dimension> & operator=(const SurfaceMeshVertexManifold<dimension> & )
```


### SurfaceMeshVertexManifold

```cpp
public void SurfaceMeshVertexManifold<dimension>(const SurfaceMesh<dimension> & mesh)
```


### ~SurfaceMeshVertexManifold

```cpp
public void ~SurfaceMeshVertexManifold<dimension>()
```


### mesh_vertices_are_manifold

```cpp
public bool mesh_vertices_are_manifold()
```


### non_manifold_vertices

```cpp
public InspectionIssues non_manifold_vertices()
```




# class SurfaceMeshVertexManifold


