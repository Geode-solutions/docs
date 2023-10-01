# class RepairBRepSurfaces

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#58
```

## Records

SegmentTriangleIntersection

DoRepair

DoRepairDuplication

DoRepairIntersection



## Functions

### RepairBRepSurfaces

```cpp
public void RepairBRepSurfaces(BRepRemeshingData & data)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#64
```

### repair

```cpp
public void repair()
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#148
```

### ray_intersection

```cpp
public absl::optional<Point3D> ray_intersection(const Surface3D & surface, const TriangulatedSurface3D & input_mesh, const Vector3D & direction, const Point3D & origin)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#238
```

### segment

```cpp
public Segment3D segment(const SurfaceMesh3D & mesh, const PolygonEdge & edge)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#444
```



