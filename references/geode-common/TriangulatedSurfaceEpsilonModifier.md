# class TriangulatedSurfaceEpsilonModifier

# class TriangulatedSurfaceEpsilonModifier

# class TriangulatedSurfaceEpsilonModifier

```cpp
Defined at ../include/geode/common/modifier/surface/triangulated_surface_epsilon_modifier.h#21
```

```cpp
Inherits from TriangulatedSurfaceModifier<dimension>
```



## Functions

### TriangulatedSurfaceEpsilonModifier

```cpp
public void TriangulatedSurfaceEpsilonModifier<dimension>(const SurfaceMesh<dimension> & surface, TriangulatedSurfaceBuilder<dimension> & builder)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_epsilon_modifier.cpp#32
```

### ~TriangulatedSurfaceEpsilonModifier

```cpp
public void ~TriangulatedSurfaceEpsilonModifier<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_epsilon_modifier.cpp#41
```

### insert_point_in_triangle

```cpp
public std::tuple<Position, SplitTriangleInfo> insert_point_in_triangle(index_t triangle_id, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_epsilon_modifier.cpp#47
```

 Insert a point in a triangle either by spliting the triangle into three new ones, or by snapping the point on an edge (two new triangles) or a vertex (no new triangles).

**triangle_id** [in] Index of the triangle to split.

**point** [in] Coordinates of the split point.

**warning** Split triangle is set as inactive but not deleted.

**return** in the following order: the position of the split vertex, the information regarding the modifications.

### insert_point_on_edge

```cpp
public std::tuple<Position, SplitPolygonEdgeInfo> insert_point_on_edge(const PolygonEdge & edge, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_epsilon_modifier.cpp#67
```

 Insert a point on an edge either by spliting the edge into two new ones, or by snapping the point on a vertex (no new edges).

**edge** [in] Index of the PolygonEdge to split.

**point** [in] Coordinates of the split point.

**warning** Potential split triangles are set as inactive but not deleted.

**return** in the following order: the position of the split vertex, the information regarding the modifications.



