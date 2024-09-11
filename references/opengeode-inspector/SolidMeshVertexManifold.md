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

# class SolidMeshVertexManifold


# class SolidMeshVertexManifold


 Class for inspecting the manifold property of a SolidMesh



## Functions

### SolidMeshVertexManifold

```cpp
public void SolidMeshVertexManifold<dimension>(const SolidMeshVertexManifold<dimension> & )
```


### operator=

```cpp
public SolidMeshVertexManifold<dimension> & operator=(const SolidMeshVertexManifold<dimension> & )
```


### SolidMeshVertexManifold

```cpp
public void SolidMeshVertexManifold<dimension>(const SolidMesh<dimension> & mesh)
```


### ~SolidMeshVertexManifold

```cpp
public void ~SolidMeshVertexManifold<dimension>()
```


### mesh_vertices_are_manifold

```cpp
public bool mesh_vertices_are_manifold()
```


### non_manifold_vertices

```cpp
public InspectionIssues non_manifold_vertices()
```




