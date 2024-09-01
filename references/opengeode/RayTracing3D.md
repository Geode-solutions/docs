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

# class RayTracing3D


## Records

PolygonDistance



## Functions

### RayTracing3D

```cpp
public void RayTracing3D(const SurfaceMesh3D & mesh, const Ray3D & ray)
```


### RayTracing3D

```cpp
public void RayTracing3D(const SurfaceMesh3D & mesh, const InfiniteLine3D & infinite_line)
```


### RayTracing3D

```cpp
public void RayTracing3D(RayTracing3D && other)
```


### ~RayTracing3D

```cpp
public void ~RayTracing3D()
```


### closest_polygon

```cpp
public optional closest_polygon()
```


### closest_polygons

```cpp
public optional closest_polygons(index_t size)
```


### all_intersections

```cpp
public vector all_intersections()
```


### operator()

```cpp
public bool operator()(index_t polygon_id)
```




