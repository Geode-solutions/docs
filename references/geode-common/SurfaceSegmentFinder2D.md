# class SurfaceSegmentFinder2D

```cpp
Defined at ../include/geode/common/cutter/surface/surface_segment_finder2d.h#23
```

 The objective of this class is to find paths inside TrianguledSurface2D. As an example, this class is able to find a rectilinear path between two vertices. This class may be derived for custom path findings.



```cpp
Inherits from SurfaceSegmentFinder<2>
```



## Functions

### SurfaceSegmentFinder2D

```cpp
public void SurfaceSegmentFinder2D(const TriangulatedSurface2D & surface, index_t begin, index_t end)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_segment_finder2d.cpp#21
```

### next_vertex_intersection

```cpp
protected SurfacePath next_vertex_intersection(const SurfacePath & previous_path, index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_segment_finder2d.cpp#27
```

### next_edge_intersection

```cpp
protected SurfacePath next_edge_intersection(const PolygonEdge & adjacent_edge)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_segment_finder2d.cpp#55
```



