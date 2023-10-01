# class PropagateAlongLine2D

```cpp
Defined at ../../include/geode/simplex/private/surface/2d/private/propagate_along_line.h#24
```

```cpp
Inherits from SurfacePathFinder<2>
```



## Functions

### PropagateAlongLine2D

```cpp
public void PropagateAlongLine2D(const FrontalRemesher2D & remesher, const InfiniteLine2D & line)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/2d/private/propagate_along_line.cpp#20
```

### along_line

```cpp
public optional along_line(const std::vector<OrientedPolygonEdge> & initial_edges, double target)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/2d/private/propagate_along_line.cpp#28
```

### find_first_path

```cpp
protected vector find_first_path(const std::vector<OrientedPolygonEdge> & initial_edges)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/2d/private/propagate_along_line.cpp#131
```

### stop_propagation

```cpp
protected bool stop_propagation(const SurfacePath & path, const Point2D & point, double target)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/2d/private/propagate_along_line.cpp#49
```

### oriented_edge_segment

```cpp
protected Segment oriented_edge_segment(const OrientedPolygonEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/2d/private/propagate_along_line.cpp#97
```

### next_intersection

```cpp
protected SurfacePath next_intersection(const PolygonEdge & adjacent_edge)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/2d/private/propagate_along_line.cpp#112
```



