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

# class RayTracing2D


## Records

EdgeDistance



## Functions

### RayTracing2D

```cpp
public void RayTracing2D(const EdgedCurve2D & mesh, const Ray2D & ray)
```


### RayTracing2D

```cpp
public void RayTracing2D(const EdgedCurve2D & mesh, const InfiniteLine2D & infinite_line)
```


### RayTracing2D

```cpp
public void RayTracing2D(const EdgedCurve2D & mesh, const Point2D & origin, const OwnerSegment2D & segment)
```


### RayTracing2D

```cpp
public void RayTracing2D(RayTracing2D && other)
```


### ~RayTracing2D

```cpp
public void ~RayTracing2D()
```


### closest_edge

```cpp
public optional closest_edge()
```


### closest_edges

```cpp
public optional closest_edges(index_t nb_closest_wanted)
```


### all_intersections

```cpp
public vector all_intersections()
```


### operator()

```cpp
public bool operator()(index_t edge_id)
```




