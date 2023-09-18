# class TriangulatedSurfaceEpsilonModifier

# class TriangulatedSurfaceEpsilonModifier

# class TriangulatedSurfaceEpsilonModifier


```cpp
Inherits from TriangulatedSurfaceModifier<dimension>
```



## Functions

### TriangulatedSurfaceEpsilonModifier<dimension>

```cpp
public void TriangulatedSurfaceEpsilonModifier<dimension>(const SurfaceMesh<dimension> & surface, TriangulatedSurfaceBuilder<dimension> & builder)
```


### ~TriangulatedSurfaceEpsilonModifier<dimension>

```cpp
public void ~TriangulatedSurfaceEpsilonModifier<dimension>()
```


### insert_point_in_triangle

```cpp
public std::tuple<Position, SplitTriangleInfo> insert_point_in_triangle(index_t triangle_id, const Point<dimension> & point)
```


 Insert a point in a triangle either by spliting the triangle into three new ones, or by snapping the point on an edge (two new triangles) or a vertex (no new triangles).

**triangle_id** [in] Index of the triangle to split.

**point** [in] Coordinates of the split point.**<not a builtin command>**  Split triangle is set as inactive but not deleted.

**return** in the following order: the position of the split vertex, the information regarding the modifications.

### insert_point_on_edge

```cpp
public std::tuple<Position, SplitPolygonEdgeInfo> insert_point_on_edge(const PolygonEdge & edge, const Point<dimension> & point)
```


 Insert a point on an edge either by spliting the edge into two new ones, or by snapping the point on a vertex (no new edges).

**edge** [in] Index of the PolygonEdge to split.

**point** [in] Coordinates of the split point.**<not a builtin command>**  Potential split triangles are set as inactive but not deleted.

**return** in the following order: the position of the split vertex, the information regarding the modifications.


