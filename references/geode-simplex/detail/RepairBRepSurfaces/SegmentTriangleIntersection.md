# class SegmentTriangleIntersection

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#455
```

## Functions

### SegmentTriangleIntersection

```cpp
public void SegmentTriangleIntersection(RepairBRepSurfaces & repair, const Surface3D & edge_surface, const Surface3D & triangle_surface)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#458
```

### operator()

```cpp
public bool operator()(index_t edge_polygon, index_t triangle_polygon)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#473
```

### edge_unique_ids

```cpp
public array edge_unique_ids(const ComponentID & id, const SurfaceMesh3D & mesh, const PolygonEdge & edge)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#546
```

### intersecting_triangles

```cpp
public absl::Span<const Intersection> intersecting_triangles()
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#561
```

### duplicated_triangles

```cpp
public absl::Span<const Duplication> duplicated_triangles()
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#566
```



