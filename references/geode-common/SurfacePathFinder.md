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

# class SurfacePathFinder


 The objective of this class is to find paths inside TrianguledSurface< dimension >. This class may be derived for custom path findings.



## Functions

### SurfacePathFinder

```cpp
public void SurfacePathFinder<dimension>(const SurfacePathFinder<dimension> & )
```


### operator=

```cpp
public SurfacePathFinder<dimension> & operator=(const SurfacePathFinder<dimension> & )
```


### SurfacePathFinder

```cpp
public void SurfacePathFinder<dimension>(SurfacePathFinder<dimension> && )
```


### operator=

```cpp
public SurfacePathFinder<dimension> & operator=(SurfacePathFinder<dimension> && )
```


### ~SurfacePathFinder

```cpp
public void ~SurfacePathFinder<dimension>()
```


### SurfacePathFinder

```cpp
protected void SurfacePathFinder<dimension>(const TriangulatedSurface<dimension> & surface)
```


### adjacent_opposite_vertex

```cpp
protected std::optional<PolygonVertex> adjacent_opposite_vertex(const PolygonEdge & edge)
```


### edge_segment

```cpp
protected Segment<dimension> edge_segment(const PolygonEdge & edge)
```


### surface

```cpp
protected const TriangulatedSurface<dimension> & surface()
```




# class SurfacePathFinder


# class SurfacePathFinder


