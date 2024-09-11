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

# class SurfaceCurveIntersections


# class SurfaceCurveIntersections


 Class for inspecting the intersections of TriangulatedSurfacees



## Functions

### SurfaceCurveIntersections

```cpp
public void SurfaceCurveIntersections<dimension>(const SurfaceCurveIntersections<dimension> & )
```


### operator=

```cpp
public SurfaceCurveIntersections<dimension> & operator=(const SurfaceCurveIntersections<dimension> & )
```


### SurfaceCurveIntersections

```cpp
public void SurfaceCurveIntersections<dimension>(const TriangulatedSurface<dimension> & surface, const EdgedCurve<dimension> & curve)
```


### ~SurfaceCurveIntersections

```cpp
public void ~SurfaceCurveIntersections<dimension>()
```


### meshes_have_intersections

```cpp
public bool meshes_have_intersections()
```


### intersecting_elements

```cpp
public InspectionIssues intersecting_elements()
```




# class SurfaceCurveIntersections


