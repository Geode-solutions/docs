# class DoRepairIntersection


```cpp
```cpp
```cpp
```cpp
Inherits from DoRepair
```
```
```
```



## Functions

### DoRepairIntersection

```cpp
```cpp
```cpp
```cpp
public void DoRepairIntersection(RepairBRepSurfaces & repair, const Surface3D & edge_surface, const PolygonEdge & edge, const Surface3D & triangles_surface, index_t triangle)
```
```
```
```


### apply

```cpp
```cpp
```cpp
```cpp
public int apply()
```
```
```
```


### process_inverted_edge

```cpp
```cpp
```cpp
```cpp
public absl::optional<BRepGeometricModifier::BRepSplitPolygonEdgeInfo> process_inverted_edge(RepairSurface & surface, const PolygonEdge & edge)
```
```
```
```


### process_inverted_edge_on_border

```cpp
```cpp
```cpp
```cpp
public absl::optional<BRepGeometricModifier::BRepSplitPolygonEdgeInfo> process_inverted_edge_on_border(RepairSurface & surface, const PolygonEdge & edge)
```
```
```
```


### process_inverted_edge_inside

```cpp
```cpp
```cpp
```cpp
public absl::optional<BRepGeometricModifier::BRepSplitPolygonEdgeInfo> process_inverted_edge_inside(RepairSurface & surface, const PolygonEdge & edge)
```
```
```
```


### inverted_edges_to_split

```cpp
```cpp
```cpp
```cpp
public std::array<PolygonEdge, 3> inverted_edges_to_split(const RepairSurface & surface, index_t trgl)
```
```
```
```


### do_split_triangle

```cpp
```cpp
```cpp
```cpp
public absl::optional<std::pair<BRepGeometricModifier::BRepSplitPolygonEdgeInfo, Point3D> > do_split_triangle(const PolygonEdge & edge)
```
```
```
```


### new_triangle_point

```cpp
```cpp
```cpp
```cpp
public Point3D new_triangle_point(RepairSurface & surface, const PolygonEdge & edge)
```
```
```
```




