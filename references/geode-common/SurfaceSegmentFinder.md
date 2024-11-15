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

# class SurfaceSegmentFinder


```cpp
Inherits from SurfacePathFinder<2U>
```



# class SurfaceSegmentFinder


 This class is able to find a rectilinear path between two vertices. This class may be derived for custom path findings.



```cpp
Inherits from SurfacePathFinder<dimension>
```



## Functions

### SurfaceSegmentFinder

```cpp
public void SurfaceSegmentFinder<dimension>(const TriangulatedSurface<dimension> & surface, index_t begin, index_t end)
```


### ~SurfaceSegmentFinder

```cpp
public void ~SurfaceSegmentFinder<dimension>()
```


### find_path

```cpp
public optional find_path()
```


### stop_propagation

```cpp
protected optional stop_propagation(const SurfacePath & path)
```


### next_intersection

```cpp
protected optional next_intersection(const SurfacePath & previous_path, const SurfacePath & current_path)
```


### next_vertex_intersection

```cpp
protected optional next_vertex_intersection(const SurfacePath & previous_path, index_t vertex)
```

### next_edge_intersection

```cpp
protected SurfacePath next_edge_intersection(const PolygonEdge & adjacent_edge)
```

### begin

```cpp
protected index_t begin()
```


### end

```cpp
protected index_t end()
```


### segment

```cpp
protected const Segment<dimension> & segment()
```




# class SurfaceSegmentFinder


```cpp
Inherits from SurfacePathFinder<3U>
```



