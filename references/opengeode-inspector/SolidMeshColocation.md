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

# class SolidMeshColocation


# class SolidMeshColocation


 Class for inspecting the colocation of points in a SolidMesh



## Functions

### SolidMeshColocation

```cpp
public void SolidMeshColocation<dimension>(const SolidMeshColocation<dimension> & )
```


### operator=

```cpp
public SolidMeshColocation<dimension> & operator=(const SolidMeshColocation<dimension> & )
```


### SolidMeshColocation

```cpp
public void SolidMeshColocation<dimension>(const SolidMesh<dimension> & mesh)
```


### ~SolidMeshColocation

```cpp
public void ~SolidMeshColocation<dimension>()
```


### mesh_has_colocated_points

```cpp
public bool mesh_has_colocated_points()
```


### colocated_points_groups

```cpp
public InspectionIssues colocated_points_groups()
```




