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

# class SurfaceMeshDegeneration


 Class for inspecting the degeneration of a SurfaceMesh



## Functions

### SurfaceMeshDegeneration

```cpp
public void SurfaceMeshDegeneration<dimension>(const SurfaceMeshDegeneration<dimension> & )
```


### operator=

```cpp
public SurfaceMeshDegeneration<dimension> & operator=(const SurfaceMeshDegeneration<dimension> & )
```


### SurfaceMeshDegeneration

```cpp
public void SurfaceMeshDegeneration<dimension>(const SurfaceMesh<dimension> & mesh)
```


### ~SurfaceMeshDegeneration

```cpp
public void ~SurfaceMeshDegeneration<dimension>()
```


### is_mesh_degenerated

```cpp
public bool is_mesh_degenerated()
```


### small_edges

```cpp
public InspectionIssues small_edges(double threshold)
```


### degenerated_edges

```cpp
public InspectionIssues degenerated_edges()
```


### small_height_polygons

```cpp
public InspectionIssues small_height_polygons(double threshold)
```


### degenerated_polygons

```cpp
public InspectionIssues degenerated_polygons()
```




# class SurfaceMeshDegeneration


# class SurfaceMeshDegeneration


