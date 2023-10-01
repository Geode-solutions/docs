# class FrontalRemesher3D

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/frontal3d.h#28
```

```cpp
Inherits from FrontalRemesher<3>
```



## Functions

### FrontalRemesher3D

```cpp
public void FrontalRemesher3D(const TriangulatedSurface3D & background_mesh, TriangulatedSurfaceBuilder3D & background_builder, TriangulatedSurfaceEpsilonModifier3D & background_modifier, const Metric3D & metric, Span lock_vertices)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/frontal3d.h#31
```

### compute_intersection

```cpp
public Point compute_intersection(const Plane & plane, const SurfacePath & path)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/private/frontal3d.cpp#29
```

### propagate_along_path

```cpp
public absl::optional<geode::detail::PropagateAlongSurfaceMacroEdge<3>::Cuts> propagate_along_path(const MacroEdge & macro_edge, index_t begin, index_t end)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/private/frontal3d.cpp#48
```

### find_cuts

```cpp
public int find_cuts(index_t begin, index_t end, absl::Span<const SurfacePath> path_splits)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/private/frontal3d.cpp#101
```

### refined_cuts

```cpp
public int refined_cuts(index_t begin, index_t end, absl::Span<const GeometricSurfacePath<3> > cuts, double threshold)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/private/frontal3d.cpp#110
```

### apex_path

```cpp
public int apex_path(const MacroEdge & macro_edge, const Plane & plane)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/private/frontal3d.cpp#150
```

### compute_new_apex

```cpp
public absl::optional<Apex> compute_new_apex(const MacroEdge & macro_edge, const Point3D & origin)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/3d/private/frontal3d.cpp#161
```



