# class DoRepair


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


### is_edge_inverted

```cpp
public absl::optional<index_t> is_edge_inverted(const Surface3D & surface, const PolygonEdge & edge)
```


### add_modified_surfaces

```cpp
protected void add_modified_surfaces(const class BRepGeometricModifier::BRepSplitPolygonEdgeInfo & output)
```


### save

```cpp
protected void save(const TriangulatedSurface3D & mesh, basic_string suffix)
```


### closest_point

```cpp
public std::pair<Point3D, index_t> closest_point(const RepairSurface & surface, const PolygonEdge & edge)
```


### is_repair_split_edge_valid

```cpp
protected bool is_repair_split_edge_valid(const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```


### intersection_plane

```cpp
protected OwnerPlane intersection_plane(const SurfaceMesh3D & mesh, const PolygonEdge & edge, const Point3D & opposite)
```


### line_part

```cpp
protected int line_part(const Line3D & line, index_t start, index_t end)
```


### new_triangle_edge_point

```cpp
public Point3D new_triangle_edge_point(RepairSurface & surface, const PolygonEdge & edge)
```


### split_edge

```cpp
protected bool split_edge(const PolygonEdge & edge)
```


### update_edges

```cpp
protected void update_edges(absl::Span<const TriangulatedSurfaceModifier3D::PolygonEdgeMapping> mappings)
```


### update_edges

```cpp
protected void update_edges(const PolygonEdge & edge, absl::Span<const TriangulatedSurfaceModifier3D::PolygonEdgeMapping> mappings)
```




