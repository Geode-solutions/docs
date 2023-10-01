# class SectionGeometricModifier

```cpp
Defined at ../include/geode/common/modifier/model/section_geometric_modifier.h#30
```

```cpp
Inherits from VerticesModifier
```



## Records

CleanVerticesMappings

CleanElementsMappings

CleanMappings

SectionSplitTriangleInfo

SectionSplitPolygonEdgeInfo

SectionCollapsePolygonEdgeInfo

Impl



## Functions

### SectionGeometricModifier

```cpp
public void SectionGeometricModifier(Section & section)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#133
```

### SectionGeometricModifier

```cpp
public void SectionGeometricModifier(SectionGeometricModifier && other)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#138
```

### ~SectionGeometricModifier

```cpp
public void ~SectionGeometricModifier()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#145
```

### split_triangle

```cpp
public SectionSplitTriangleInfo split_triangle(const Surface2D & surface, index_t triangle, const Point2D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#147
```

### collapse_edge

```cpp
public SectionCollapsePolygonEdgeInfo collapse_edge(const Surface2D & surface, const PolygonEdge & edge, const Point2D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#154
```

### collapse_edge

```cpp
public SectionCollapsePolygonEdgeInfo collapse_edge(const Line2D & line, index_t edge, const Point2D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#162
```

### split_edge

```cpp
public SectionSplitPolygonEdgeInfo split_edge(const Surface2D & surface, const PolygonEdge & edge, const Point2D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#169
```

### split_edge

```cpp
public SectionSplitPolygonEdgeInfo split_edge(const Line2D & line, index_t edge, const Point2D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#177
```

### swap_edge

```cpp
public void swap_edge(const Surface2D & surface, const PolygonEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#184
```

### move_point

```cpp
public void move_point(index_t unique_vertex, const Point2D & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#219
```

### translate_point

```cpp
public void translate_point(index_t unique_vertex, const Vector2D & translation)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#225
```

### rescale_point

```cpp
public void rescale_point(index_t unique_vertex, double scale)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#231
```

### rescale_point

```cpp
public void rescale_point(index_t unique_vertex, const std::array<double, 2> & scale)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#237
```

### updated_vertex

```cpp
public index_t updated_vertex(const Line2D & line, index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#270
```

### updated_vertex

```cpp
public index_t updated_vertex(const Surface2D & surface, index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#276
```

### updated_unique_vertex

```cpp
public index_t updated_unique_vertex(index_t unique_vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#282
```

### is_edge_active

```cpp
public bool is_edge_active(const Line2D & line, index_t edge)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#288
```

### is_triangle_active

```cpp
public bool is_triangle_active(const Surface2D & surface, index_t triangle)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#294
```

### clean

```cpp
public CleanMappings clean()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#243
```

### clean_vertices

```cpp
public CleanVerticesMappings clean_vertices()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#251
```

### clean_elements

```cpp
public CleanElementsMappings clean_elements()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#261
```

### clean_triangles_surfaces

```cpp
public flat_hash_map clean_triangles_surfaces()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#190
```

### clean_vertices_surfaces

```cpp
public flat_hash_map clean_vertices_surfaces()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#202
```

### clean_edges_lines

```cpp
public flat_hash_map clean_edges_lines()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#196
```

### clean_vertices_lines

```cpp
public flat_hash_map clean_vertices_lines()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#208
```

### clean_unique_vertices

```cpp
public vector clean_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/model/section_geometric_modifier.cpp#214
```



