# class SurfaceSegmentFinder

# class SurfaceSegmentFinder


 This class is able to find a rectilinear path between two vertices. This class may be derived for custom path findings.



```cpp
Inherits from SurfacePathFinder<dimension>
```



## Functions

### SurfaceSegmentFinder<dimension>

```cpp
public void SurfaceSegmentFinder<dimension>(const TriangulatedSurface<dimension> & surface, index_t begin, index_t end)
```


### ~SurfaceSegmentFinder<dimension>

```cpp
public void ~SurfaceSegmentFinder<dimension>()
```


### find_path

```cpp
public int find_path()
```


### stop_propagation

```cpp
protected _Bool stop_propagation(const SurfacePath & path)
```


### next_intersection

```cpp
protected SurfacePath next_intersection(const SurfacePath & previous_path, const SurfacePath & current_path)
```


### next_vertex_intersection

```cpp
protected SurfacePath next_vertex_intersection(const SurfacePath & previous_path, index_t vertex)
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
