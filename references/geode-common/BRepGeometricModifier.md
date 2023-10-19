# class BRepGeometricModifier


```cpp
Inherits from VerticesModifier
```



## Records

CleanVerticesMappings

CleanElementsMappings

CleanMappings

BRepSplitTriangleInfo

BRepSplitTetrahedronInfo

BRepSplitPolygonEdgeInfo

BRepCollapsePolygonEdgeInfo

BRepSwapEdgeInfo

Impl



## Functions

### BRepGeometricModifier

```cpp
public void BRepGeometricModifier(BRep & brep)
```


### BRepGeometricModifier

```cpp
public void BRepGeometricModifier(BRepGeometricModifier && other)
```


### ~BRepGeometricModifier

```cpp
public void ~BRepGeometricModifier()
```


### split_tetrahedron

```cpp
public BRepSplitTetrahedronInfo split_tetrahedron(const Block3D & block, index_t tetrahedron, const Point3D & point)
```


### split_facet

```cpp
public BRepSplitTriangleInfo split_facet(const Block3D & block, const PolyhedronFacet & facet, const Point3D & point)
```


### split_triangle

```cpp
public BRepSplitTriangleInfo split_triangle(const Surface3D & surface, index_t triangle, const Point3D & point)
```


### collapse_edge

```cpp
public BRepCollapsePolygonEdgeInfo collapse_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & point)
```


### collapse_edge

```cpp
public BRepCollapsePolygonEdgeInfo collapse_edge(const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```


### collapse_edge

```cpp
public BRepCollapsePolygonEdgeInfo collapse_edge(const Line3D & line, index_t edge, const Point3D & point)
```


### split_edge

```cpp
public BRepSplitPolygonEdgeInfo split_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & point)
```


### split_edge

```cpp
public BRepSplitPolygonEdgeInfo split_edge(const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```


### split_edge

```cpp
public BRepSplitPolygonEdgeInfo split_edge(const Line3D & line, index_t edge, const Point3D & point)
```


### swap_edge

```cpp
public BRepSwapEdgeInfo swap_edge(const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex)
```


### swap_edge

```cpp
public BRepSwapEdgeInfo swap_edge(const Surface3D & surface, const PolygonEdge & edge)
```


### move_point

```cpp
public void move_point(index_t unique_vertex, const Point3D & point)
```


### translate_point

```cpp
public void translate_point(index_t unique_vertex, const Vector3D & translation)
```


### rescale_point

```cpp
public void rescale_point(index_t unique_vertex, double scale)
```


### rescale_point

```cpp
public void rescale_point(index_t unique_vertex, const std::array<double, 3> & scale)
```


### updated_vertex

```cpp
public index_t updated_vertex(const Line3D & line, index_t vertex)
```


### updated_vertex

```cpp
public index_t updated_vertex(const Surface3D & surface, index_t vertex)
```


### updated_vertex

```cpp
public index_t updated_vertex(const Block3D & block, index_t vertex)
```


### updated_unique_vertex

```cpp
public index_t updated_unique_vertex(index_t unique_vertex)
```


### is_edge_active

```cpp
public bool is_edge_active(const Line3D & line, index_t edge)
```


### is_edge_active

```cpp
public bool is_edge_active(const Surface3D & surface, index_t edge)
```


### is_triangle_active

```cpp
public bool is_triangle_active(const Surface3D & surface, index_t triangle)
```


### is_tetrahedron_active

```cpp
public bool is_tetrahedron_active(const Block3D & block, index_t tetrahedron)
```


### clean

```cpp
public CleanMappings clean()
```


### clean_vertices

```cpp
public CleanVerticesMappings clean_vertices()
```


### clean_elements

```cpp
public CleanElementsMappings clean_elements()
```


### clean_triangles_surfaces

```cpp
public flat_hash_map clean_triangles_surfaces()
```


### clean_vertices_surfaces

```cpp
public flat_hash_map clean_vertices_surfaces()
```


### clean_edges_lines

```cpp
public flat_hash_map clean_edges_lines()
```


### clean_vertices_lines

```cpp
public flat_hash_map clean_vertices_lines()
```


### clean_tetrahedra_blocks

```cpp
public flat_hash_map clean_tetrahedra_blocks()
```


### clean_vertices_blocks

```cpp
public flat_hash_map clean_vertices_blocks()
```


### clean_unique_vertices

```cpp
public vector clean_unique_vertices()
```




