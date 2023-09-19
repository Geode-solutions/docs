# class DoRepair


## Members

```cpp
```cpp
```cpp
```cpp
protected RepairBRepSurfaces & repair_
```
```
```
```

```cpp
```cpp
```cpp
```cpp
protected RepairSurface edge_surface_
```
```
```
```

```cpp
```cpp
```cpp
```cpp
protected RepairSurface triangle_surface_
```
```
```
```

```cpp
```cpp
```cpp
```cpp
protected int modified_surfaces_
```
```
```
```



## Records

RepairSurface



## Functions

### DoRepair

```cpp
```cpp
```cpp
```cpp
protected void DoRepair(RepairBRepSurfaces & repair, const Surface3D & edge_surface, const PolygonEdge & edge, const Surface3D & triangle_surface, int triangle_edges)
```
```
```
```


### is_edge_inverted

```cpp
```cpp
```cpp
```cpp
public absl::optional<index_t> is_edge_inverted(const Surface3D & surface, const PolygonEdge & edge)
```
```
```
```


### add_modified_surfaces

```cpp
```cpp
```cpp
```cpp
protected void add_modified_surfaces(const class BRepGeometricModifier::BRepSplitPolygonEdgeInfo & output)
```
```
```
```


### save

```cpp
```cpp
```cpp
```cpp
protected void save(const TriangulatedSurface3D & mesh, basic_string suffix)
```
```
```
```


### closest_point

```cpp
```cpp
```cpp
```cpp
public std::pair<Point3D, index_t> closest_point(const RepairSurface & surface, const PolygonEdge & edge)
```
```
```
```


### is_repair_split_edge_valid

```cpp
```cpp
```cpp
```cpp
protected _Bool is_repair_split_edge_valid(const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```
```
```
```


### intersection_plane

```cpp
```cpp
```cpp
```cpp
protected OwnerPlane intersection_plane(const SurfaceMesh3D & mesh, const PolygonEdge & edge, const Point3D & opposite)
```
```
```
```


### line_part

```cpp
```cpp
```cpp
```cpp
protected int line_part(const Line3D & line, index_t start, index_t end)
```
```
```
```


### new_triangle_edge_point

```cpp
```cpp
```cpp
```cpp
public Point3D new_triangle_edge_point(RepairSurface & surface, const PolygonEdge & edge)
```
```
```
```


### split_edge

```cpp
```cpp
```cpp
```cpp
protected _Bool split_edge(const PolygonEdge & edge)
```
```
```
```


### update_edges

```cpp
```cpp
```cpp
```cpp
protected void update_edges(absl::Span<const TriangulatedSurfaceModifier3D::PolygonEdgeMapping> mappings)
```
```
```
```


### update_edges

```cpp
```cpp
```cpp
```cpp
protected void update_edges(const PolygonEdge & edge, absl::Span<const TriangulatedSurfaceModifier3D::PolygonEdgeMapping> mappings)
```
```
```
```




