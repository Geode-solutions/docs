# class BRepGeometricModifier

```cpp
Defined at ../include/geode/common/modifier/model/brep_geometric_modifier.h#34
```

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

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#585
```

### BRepGeometricModifier

```cpp
public void BRepGeometricModifier(BRepGeometricModifier && other)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#589
```

### ~BRepGeometricModifier

```cpp
public void ~BRepGeometricModifier()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#596
```

### split_tetrahedron

```cpp
public BRepSplitTetrahedronInfo split_tetrahedron(const Block3D & block, index_t tetrahedron, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#613
```

### split_facet

```cpp
public BRepSplitTriangleInfo split_facet(const Block3D & block, const PolyhedronFacet & facet, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#605
```

### split_triangle

```cpp
public BRepSplitTriangleInfo split_triangle(const Surface3D & surface, index_t triangle, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#598
```

### collapse_edge

```cpp
public BRepCollapsePolygonEdgeInfo collapse_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#635
```

### collapse_edge

```cpp
public BRepCollapsePolygonEdgeInfo collapse_edge(const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#620
```

### collapse_edge

```cpp
public BRepCollapsePolygonEdgeInfo collapse_edge(const Line3D & line, index_t edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#628
```

### split_edge

```cpp
public BRepSplitPolygonEdgeInfo split_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#643
```

### split_edge

```cpp
public BRepSplitPolygonEdgeInfo split_edge(const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#651
```

### split_edge

```cpp
public BRepSplitPolygonEdgeInfo split_edge(const Line3D & line, index_t edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#659
```

### swap_edge

```cpp
public BRepSwapEdgeInfo swap_edge(const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#666
```

### swap_edge

```cpp
public BRepSwapEdgeInfo swap_edge(const Surface3D & surface, const PolygonEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#672
```

### move_point

```cpp
public void move_point(index_t unique_vertex, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#718
```

### translate_point

```cpp
public void translate_point(index_t unique_vertex, const Vector3D & translation)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#724
```

### rescale_point

```cpp
public void rescale_point(index_t unique_vertex, double scale)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#730
```

### rescale_point

```cpp
public void rescale_point(index_t unique_vertex, const std::array<double, 3> & scale)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#736
```

### updated_vertex

```cpp
public index_t updated_vertex(const Line3D & line, index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#771
```

### updated_vertex

```cpp
public index_t updated_vertex(const Surface3D & surface, index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#777
```

### updated_vertex

```cpp
public index_t updated_vertex(const Block3D & block, index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#783
```

### updated_unique_vertex

```cpp
public index_t updated_unique_vertex(index_t unique_vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#789
```

### is_edge_active

```cpp
public bool is_edge_active(const Line3D & line, index_t edge)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#795
```

### is_edge_active

```cpp
public bool is_edge_active(const Surface3D & surface, index_t edge)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#801
```

### is_triangle_active

```cpp
public bool is_triangle_active(const Surface3D & surface, index_t triangle)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#807
```

### is_tetrahedron_active

```cpp
public bool is_tetrahedron_active(const Block3D & block, index_t tetrahedron)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#813
```

### clean

```cpp
public CleanMappings clean()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#742
```

### clean_vertices

```cpp
public CleanVerticesMappings clean_vertices()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#750
```

### clean_elements

```cpp
public CleanElementsMappings clean_elements()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#761
```

### clean_triangles_surfaces

```cpp
public flat_hash_map clean_triangles_surfaces()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#678
```

### clean_vertices_surfaces

```cpp
public flat_hash_map clean_vertices_surfaces()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#689
```

### clean_edges_lines

```cpp
public flat_hash_map clean_edges_lines()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#684
```

### clean_vertices_lines

```cpp
public flat_hash_map clean_vertices_lines()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#695
```

### clean_tetrahedra_blocks

```cpp
public flat_hash_map clean_tetrahedra_blocks()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#707
```

### clean_vertices_blocks

```cpp
public flat_hash_map clean_vertices_blocks()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#701
```

### clean_unique_vertices

```cpp
public vector clean_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/brep_geometric_modifier.cpp#713
```



