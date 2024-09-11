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

# class SurfaceMeshColocation


# class SurfaceMeshColocation


# class SurfaceMeshColocation


 Class for inspecting the colocation of points in a SurfaceMesh



## Functions

### SurfaceMeshColocation

```cpp
public void SurfaceMeshColocation<dimension>(const SurfaceMeshColocation<dimension> & )
```


### operator=

```cpp
public SurfaceMeshColocation<dimension> & operator=(const SurfaceMeshColocation<dimension> & )
```


### SurfaceMeshColocation

```cpp
public void SurfaceMeshColocation<dimension>(const SurfaceMesh<dimension> & mesh)
```


### ~SurfaceMeshColocation

```cpp
public void ~SurfaceMeshColocation<dimension>()
```


### mesh_has_colocated_points

```cpp
public bool mesh_has_colocated_points()
```


### colocated_points_groups

```cpp
public InspectionIssues colocated_points_groups()
```




