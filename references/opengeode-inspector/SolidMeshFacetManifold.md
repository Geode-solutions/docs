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

# class SolidMeshFacetManifold


 Class for inspecting the manifold property of a SolidMesh



## Functions

### SolidMeshFacetManifold

```cpp
public void SolidMeshFacetManifold<dimension>(const SolidMeshFacetManifold<dimension> & )
```


### operator=

```cpp
public SolidMeshFacetManifold<dimension> & operator=(const SolidMeshFacetManifold<dimension> & )
```


### SolidMeshFacetManifold

```cpp
public void SolidMeshFacetManifold<dimension>(const SolidMesh<dimension> & mesh)
```


### ~SolidMeshFacetManifold

```cpp
public void ~SolidMeshFacetManifold<dimension>()
```


### mesh_facets_are_manifold

```cpp
public bool mesh_facets_are_manifold()
```


### non_manifold_facets

```cpp
public InspectionIssues non_manifold_facets()
```




# class SolidMeshFacetManifold


