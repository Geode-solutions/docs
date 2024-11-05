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

# class SurfaceMeshIntersections


# class SurfaceMeshIntersections


# class SurfaceMeshIntersections


 Class for inspecting the intersections of SurfaceMeshes



## Functions

### SurfaceMeshIntersections

```cpp
public void SurfaceMeshIntersections<dimension>(const SurfaceMeshIntersections<dimension> & )
```


### operator=

```cpp
public SurfaceMeshIntersections<dimension> & operator=(const SurfaceMeshIntersections<dimension> & )
```


### SurfaceMeshIntersections

```cpp
public void SurfaceMeshIntersections<dimension>(const SurfaceMesh<dimension> & mesh)
```


### ~SurfaceMeshIntersections

```cpp
public void ~SurfaceMeshIntersections<dimension>()
```


### mesh_has_self_intersections

```cpp
public bool mesh_has_self_intersections()
```


### intersecting_elements

```cpp
public InspectionIssues intersecting_elements()
```




