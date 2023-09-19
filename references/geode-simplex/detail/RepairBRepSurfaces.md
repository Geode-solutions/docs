# class RepairBRepSurfaces


## Records

SegmentTriangleIntersection

DoRepair

DoRepairDuplication

DoRepairIntersection



## Functions

### RepairBRepSurfaces

```cpp
```cpp
public void RepairBRepSurfaces(BRepRemeshingData & data)
```
```


### repair

```cpp
```cpp
public void repair()
```
```


### ray_intersection

```cpp
```cpp
public absl::optional<Point3D> ray_intersection(const Surface3D & surface, const TriangulatedSurface3D & input_mesh, const Vector3D & direction, const Point3D & origin)
```
```


### segment

```cpp
```cpp
public Segment3D segment(const SurfaceMesh3D & mesh, const PolygonEdge & edge)
```
```




