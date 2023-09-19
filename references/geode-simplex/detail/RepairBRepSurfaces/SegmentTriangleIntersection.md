# class SegmentTriangleIntersection


## Functions

### SegmentTriangleIntersection

```cpp
```cpp
```cpp
```cpp
public void SegmentTriangleIntersection(RepairBRepSurfaces & repair, const Surface3D & edge_surface, const Surface3D & triangle_surface)
```
```
```
```


### operator()

```cpp
```cpp
```cpp
```cpp
public _Bool operator()(index_t edge_polygon, index_t triangle_polygon)
```
```
```
```


### edge_unique_ids

```cpp
```cpp
```cpp
```cpp
public array edge_unique_ids(const ComponentID & id, const SurfaceMesh3D & mesh, const PolygonEdge & edge)
```
```
```
```


### intersecting_triangles

```cpp
```cpp
```cpp
```cpp
public absl::Span<const Intersection> intersecting_triangles()
```
```
```
```


### duplicated_triangles

```cpp
```cpp
```cpp
```cpp
public absl::Span<const Duplication> duplicated_triangles()
```
```
```
```




