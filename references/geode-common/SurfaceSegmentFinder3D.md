# class SurfaceSegmentFinder3D

```cpp
Defined at ../include/geode/common/cutter/surface/surface_segment_finder3d.h#19
```

```cpp
Inherits from SurfaceSegmentFinder<3>
```



## Functions

### SurfaceSegmentFinder3D

```cpp
public void SurfaceSegmentFinder3D(const TriangulatedSurface3D & surface, index_t begin, index_t end, const Plane & plane)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_segment_finder3d.cpp#21
```

### next_vertex_intersection

```cpp
protected SurfacePath next_vertex_intersection(const SurfacePath & previous_path, index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_segment_finder3d.cpp#49
```

### next_edge_intersection

```cpp
protected SurfacePath next_edge_intersection(const PolygonEdge & adjacent_edge)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_segment_finder3d.cpp#30
```



