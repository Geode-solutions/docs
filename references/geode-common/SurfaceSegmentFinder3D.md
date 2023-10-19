# class SurfaceSegmentFinder3D


```cpp
Inherits from SurfaceSegmentFinder<3>
```



## Functions

### SurfaceSegmentFinder3D

```cpp
public void SurfaceSegmentFinder3D(const TriangulatedSurface3D & surface, index_t begin, index_t end, const Plane & plane)
```


### next_vertex_intersection

```cpp
protected SurfacePath next_vertex_intersection(const SurfacePath & previous_path, index_t vertex)
```


### next_edge_intersection

```cpp
protected SurfacePath next_edge_intersection(const PolygonEdge & adjacent_edge)
```




