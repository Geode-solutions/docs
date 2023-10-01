# class DoRepair

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#582
```

## Members

```cpp
protected RepairBRepSurfaces & repair_

```

```cpp
protected RepairSurface edge_surface_

```

```cpp
protected RepairSurface triangle_surface_

```

```cpp
protected int modified_surfaces_

```



## Records

RepairSurface



## Functions

### DoRepair

```cpp
protected void DoRepair(RepairBRepSurfaces & repair, const Surface3D & edge_surface, const PolygonEdge & edge, const Surface3D & triangle_surface, int triangle_edges)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#604
```

### is_edge_inverted

```cpp
public absl::optional<index_t> is_edge_inverted(const Surface3D & surface, const PolygonEdge & edge)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#619
```

### add_modified_surfaces

```cpp
protected void add_modified_surfaces(const class BRepGeometricModifier::BRepSplitPolygonEdgeInfo & output)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#675
```

### save

```cpp
protected void save(const TriangulatedSurface3D & mesh, basic_string suffix)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#685
```

### closest_point

```cpp
public std::pair<Point3D, index_t> closest_point(const RepairSurface & surface, const PolygonEdge & edge)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#699
```

### is_repair_split_edge_valid

```cpp
protected bool is_repair_split_edge_valid(const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#715
```

### intersection_plane

```cpp
protected OwnerPlane intersection_plane(const SurfaceMesh3D & mesh, const PolygonEdge & edge, const Point3D & opposite)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#741
```

### line_part

```cpp
protected int line_part(const Line3D & line, index_t start, index_t end)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#754
```

### new_triangle_edge_point

```cpp
public Point3D new_triangle_edge_point(RepairSurface & surface, const PolygonEdge & edge)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#801
```

### split_edge

```cpp
protected bool split_edge(const PolygonEdge & edge)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#863
```

### update_edges

```cpp
protected void update_edges(absl::Span<const TriangulatedSurfaceModifier3D::PolygonEdgeMapping> mappings)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#894
```

### update_edges

```cpp
protected void update_edges(const PolygonEdge & edge, absl::Span<const TriangulatedSurfaceModifier3D::PolygonEdgeMapping> mappings)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/repair_brep_surfaces.h#904
```



