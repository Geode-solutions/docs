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

# class TriangulatedSurfaceIntersections


# class TriangulatedSurfaceIntersections


# class TriangulatedSurfaceIntersections


 Class for inspecting the intersections of TriangulatedSurfaces



## Functions

### TriangulatedSurfaceIntersections

```cpp
public void TriangulatedSurfaceIntersections<dimension>(const TriangulatedSurfaceIntersections<dimension> & )
```


### operator=

```cpp
public TriangulatedSurfaceIntersections<dimension> & operator=(const TriangulatedSurfaceIntersections<dimension> & )
```


### TriangulatedSurfaceIntersections

```cpp
public void TriangulatedSurfaceIntersections<dimension>(const TriangulatedSurface<dimension> & mesh)
```


### ~TriangulatedSurfaceIntersections

```cpp
public void ~TriangulatedSurfaceIntersections<dimension>()
```


### mesh_has_self_intersections

```cpp
public bool mesh_has_self_intersections()
```


### intersecting_elements

```cpp
public InspectionIssues intersecting_elements()
```




