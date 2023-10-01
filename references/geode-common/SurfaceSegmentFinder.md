# class SurfaceSegmentFinder

# class SurfaceSegmentFinder

```cpp
Defined at ../include/geode/common/cutter/surface/surface_segment_finder.h#25
```

 This class is able to find a rectilinear path between two vertices. This class may be derived for custom path findings.



```cpp
Inherits from SurfacePathFinder<dimension>
```



## Functions

### SurfaceSegmentFinder

```cpp
public void SurfaceSegmentFinder<dimension>(const TriangulatedSurface<dimension> & surface, index_t begin, index_t end)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_segment_finder.cpp#13
```

### ~SurfaceSegmentFinder

```cpp
public void ~SurfaceSegmentFinder<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_segment_finder.cpp#25
```

### find_path

```cpp
public int find_path()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_segment_finder.cpp#56
```

### stop_propagation

```cpp
protected bool stop_propagation(const SurfacePath & path)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_segment_finder.cpp#30
```

### next_intersection

```cpp
protected SurfacePath next_intersection(const SurfacePath & previous_path, const SurfacePath & current_path)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_segment_finder.cpp#78
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

```cpp
Defined at ../include/geode/common/cutter/surface/surface_segment_finder.h#48
```

### end

```cpp
protected index_t end()
```

```cpp
Defined at ../include/geode/common/cutter/surface/surface_segment_finder.h#53
```

### segment

```cpp
protected const Segment<dimension> & segment()
```

```cpp
Defined at ../include/geode/common/cutter/surface/surface_segment_finder.h#58
```



# class SurfaceSegmentFinder

