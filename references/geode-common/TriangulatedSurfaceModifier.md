# class TriangulatedSurfaceModifier

# class TriangulatedSurfaceModifier

# class TriangulatedSurfaceModifier


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



## Functions

### TriangulatedSurfaceModifier<dimension>

```cpp
public void TriangulatedSurfaceModifier<dimension>(const SurfaceMesh<dimension> & surface, TriangulatedSurfaceBuilder<dimension> & builder)
```


### TriangulatedSurfaceModifier<dimension>

```cpp
public void TriangulatedSurfaceModifier<dimension>(TriangulatedSurfaceModifier<dimension> && other)
```


### ~TriangulatedSurfaceModifier<dimension>

```cpp
public void ~TriangulatedSurfaceModifier<dimension>()
```


### is_triangle_active

```cpp
public _Bool is_triangle_active(index_t triangle_id)
```


### is_edge_active

```cpp
public _Bool is_edge_active(index_t edge_id)
```


### is_edge_active

```cpp
public _Bool is_edge_active(const PolygonEdge & edge)
```


### split_triangle

```cpp
public SplitTriangleInfo split_triangle(index_t triangle_id, const Point<dimension> & point)
```


 Split a triangle into three new triangles.

**triangle_id** [in] Index of the triangle to split.

**point** [in] Coordinates of the split point.**<not a builtin command>**  Given triangle is set as inactive but not deleted.

### split_edge

```cpp
public SplitPolygonEdgeInfo split_edge(const PolygonEdge & edge, const Point<dimension> & point)
```


 Split an edge into two new edges. The triangles incident to this edge are also split into two new triangles.

**edge** [in] Index of the PolygonEdge to split.

**point** [in] Coordinates of the split point.**<not a builtin command>**  Split triangles are set as inactive but not deleted.

### collapse_edge

```cpp
public CollapsePolygonEdgeInfo collapse_edge(const PolygonEdge & edge, const Point<dimension> & point)
```


 Collapse an edge. The triangles incident to this edge are set as inactive but not deleted.

**edge** [in] Index of the PolygonEdge to collapse.

**point** [in] Coordinates of the collapse point.

### collapse_edge

```cpp
public CollapseEdgeInfo collapse_edge(index_t edge_id, const Point<dimension> & point)
```


 Collapse an edge. The triangles incident to this edge are set as inactive but not deleted.

**edge_id** [in] Unique index of the edge to collapse.

**point** [in] Coordinates of the collapse point.

### swap_edge

```cpp
public void swap_edge(const PolygonEdge & edge)
```


 Swap an edge.

**edge** [in] The edge to swap.

### clean_triangles

```cpp
public std::vector<index_t> clean_triangles()
```


 Clean up the mesh removing inactive triangles

**return** old2new mappings for triangles

### clean_vertices

```cpp
public std::vector<index_t> clean_vertices()
```


 Clean up the mesh removing isolated vertices

**return** old2new mappings for vertices

**warning** This method should be called after clean_triangles()

### clean_edges

```cpp
public std::vector<index_t> clean_edges()
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




