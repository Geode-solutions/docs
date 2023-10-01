# class PropagateAlongPlane

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/propagate_along_plane.h#25
```

```cpp
Inherits from SurfacePathFinder<3>
```



## Functions

### PropagateAlongPlane

```cpp
public void PropagateAlongPlane(const FrontalRemesher3D & remesher, const Plane & plane)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/private/propagate_along_plane.cpp#20
```

### along_plane

```cpp
public optional along_plane(const std::vector<OrientedPolygonEdge> & initial_edges, double target)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/private/propagate_along_plane.cpp#28
```

### find_first_path

```cpp
protected vector find_first_path(const std::vector<OrientedPolygonEdge> & initial_edges)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/private/propagate_along_plane.cpp#112
```

### stop_propagation

```cpp
protected bool stop_propagation(const SurfacePath & path, const Point3D & point, double target)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/private/propagate_along_plane.cpp#49
```

### next_intersection

```cpp
protected SurfacePath next_intersection(const PolygonEdge & adjacent_edge)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/private/propagate_along_plane.cpp#172
```

### oriented_edge_segment

```cpp
protected Segment oriented_edge_segment(const OrientedPolygonEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/private/propagate_along_plane.cpp#97
```

### along_plane

```cpp
public int along_plane(const int & initial_edges, double target)
```

### find_first_path

```cpp
protected int find_first_path(const int & initial_edges)
```



