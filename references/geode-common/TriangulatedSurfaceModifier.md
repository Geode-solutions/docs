# class TriangulatedSurfaceModifier

# class TriangulatedSurfaceModifier

# class TriangulatedSurfaceModifier

```cpp
Defined at ../include/geode/common/modifier/surface/triangulated_surface_modifier.h#26
```

```cpp
Inherits from VerticesModifier
```



## Records

PolygonEdgeInfo

SplitPolygonEdgeInfo

SplitTriangleInfo

SurfaceCollapseInfo

CollapsePolygonEdgeInfo

CollapseEdgeInfo

SwapEdgeInfo



## Functions

### TriangulatedSurfaceModifier

```cpp
public void TriangulatedSurfaceModifier<dimension>(const SurfaceMesh<dimension> & surface, TriangulatedSurfaceBuilder<dimension> & builder)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1145
```

### TriangulatedSurfaceModifier

```cpp
public void TriangulatedSurfaceModifier<dimension>(TriangulatedSurfaceModifier<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1153
```

### ~TriangulatedSurfaceModifier

```cpp
public void ~TriangulatedSurfaceModifier<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1161
```

### is_triangle_active

```cpp
public bool is_triangle_active(index_t triangle_id)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1174
```

### is_edge_active

```cpp
public bool is_edge_active(index_t edge_id)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1181
```

### is_edge_active

```cpp
public bool is_edge_active(const PolygonEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1188
```

### split_triangle

```cpp
public SplitTriangleInfo split_triangle(index_t triangle_id, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1195
```

 Split a triangle into three new triangles.

**triangle_id** [in] Index of the triangle to split.

**point** [in] Coordinates of the split point.

**warning** Given triangle is set as inactive but not deleted.

### split_edge

```cpp
public SplitPolygonEdgeInfo split_edge(const PolygonEdge & edge, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1203
```

 Split an edge into two new edges. The triangles incident to this edge are also split into two new triangles.

**edge** [in] Index of the PolygonEdge to split.

**point** [in] Coordinates of the split point.

**warning** Split triangles are set as inactive but not deleted.

### collapse_edge

```cpp
public CollapsePolygonEdgeInfo collapse_edge(const PolygonEdge & edge, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1211
```

 Collapse an edge. The triangles incident to this edge are set as inactive but not deleted.

**edge** [in] Index of the PolygonEdge to collapse.

**point** [in] Coordinates of the collapse point.

### collapse_edge

```cpp
public CollapseEdgeInfo collapse_edge(index_t edge_id, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1219
```

 Collapse an edge. The triangles incident to this edge are set as inactive but not deleted.

**edge_id** [in] Unique index of the edge to collapse.

**point** [in] Coordinates of the collapse point.

### swap_edge

```cpp
public SwapEdgeInfo swap_edge(const PolygonEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1257
```

 Swap an edge.

**edge** [in] The edge to swap.

### clean_triangles

```cpp
public std::vector<index_t> clean_triangles()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1227
```

 Clean up the mesh removing inactive triangles

**return** old2new mappings for triangles

### clean_vertices

```cpp
public std::vector<index_t> clean_vertices()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1234
```

 Clean up the mesh removing isolated vertices

**return** old2new mappings for vertices

**warning** This method should be called after clean_triangles()

### clean_edges

```cpp
public std::vector<index_t> clean_edges()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1241
```

 Clean up the mesh removing edges

**return** old2new mappings for edges

**warning** This method should be called after clean_triangles()

### clean

```cpp
public std::tuple<std::vector<index_t>, std::vector<index_t>, std::vector<index_t> > clean()
```

 Clean up the mesh removing inactive triangles, isolated vertices and edges.

**return** old2new mappings for triangles, vertices and edges.

### surface

```cpp
protected const SurfaceMesh<dimension> & surface()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/surface/triangulated_surface_modifier.cpp#1167
```



