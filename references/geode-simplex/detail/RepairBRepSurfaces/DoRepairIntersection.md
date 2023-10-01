# class DoRepairIntersection

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#1064
```

```cpp
Inherits from DoRepair
```



## Functions

### DoRepairIntersection

```cpp
public void DoRepairIntersection(RepairBRepSurfaces & repair, const Surface3D & edge_surface, const PolygonEdge & edge, const Surface3D & triangles_surface, index_t triangle)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#1067
```

### apply

```cpp
public int apply()
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#1084
```

### process_inverted_edge

```cpp
public absl::optional<BRepGeometricModifier::BRepSplitPolygonEdgeInfo> process_inverted_edge(RepairSurface & surface, const PolygonEdge & edge)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#1171
```

### process_inverted_edge_on_border

```cpp
public absl::optional<BRepGeometricModifier::BRepSplitPolygonEdgeInfo> process_inverted_edge_on_border(RepairSurface & surface, const PolygonEdge & edge)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#1209
```

### process_inverted_edge_inside

```cpp
public absl::optional<BRepGeometricModifier::BRepSplitPolygonEdgeInfo> process_inverted_edge_inside(RepairSurface & surface, const PolygonEdge & edge)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#1220
```

### inverted_edges_to_split

```cpp
public std::array<PolygonEdge, 3> inverted_edges_to_split(const RepairSurface & surface, index_t trgl)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#1351
```

### do_split_triangle

```cpp
public absl::optional<std::pair<BRepGeometricModifier::BRepSplitPolygonEdgeInfo, Point3D> > do_split_triangle(const PolygonEdge & edge)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#1457
```

### new_triangle_point

```cpp
public Point3D new_triangle_point(RepairSurface & surface, const PolygonEdge & edge)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#1496
```



