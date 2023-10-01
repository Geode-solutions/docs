# class ModelGeometricModifier

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#43
```

## Functions

### ModelGeometricModifier

```cpp
public void ModelGeometricModifier<Model, ModelBuilder, dimension>(Model & model)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#58
```

### ~ModelGeometricModifier

```cpp
public void ~ModelGeometricModifier<Model, ModelBuilder, dimension>()
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#67
```

### move_point

```cpp
public void move_point(index_t unique_vertex, const Point<dimension> & point)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#69
```

### translate_point

```cpp
public void translate_point(index_t unique_vertex, const Vector<dimension> & translation)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#75
```

### rescale_point

```cpp
public void rescale_point(index_t unique_vertex, const std::array<double, dimension> & scale)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#83
```

### rescale_point

```cpp
public void rescale_point(index_t unique_vertex, double scale)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#95
```

### clean_triangles_surfaces

```cpp
public int clean_triangles_surfaces()
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#102
```

### clean_vertices_surfaces

```cpp
public int clean_vertices_surfaces()
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#122
```

### clean_edges_lines

```cpp
public int clean_edges_lines()
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#146
```

### clean_vertices_lines

```cpp
public int clean_vertices_lines()
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#166
```

### clean_unique_vertices

```cpp
public int clean_unique_vertices()
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#190
```

### updated_line_vertex

```cpp
public index_t updated_line_vertex(const Line<dimension> & line, index_t vertex)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#195
```

### updated_surface_vertex

```cpp
public index_t updated_surface_vertex(const Surface<dimension> & surface, index_t vertex)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#206
```

### is_triangle_active

```cpp
public bool is_triangle_active(const Surface<dimension> & surface, index_t triangle)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#217
```

### is_edge_active

```cpp
public bool is_edge_active(const Surface<dimension> & surface, index_t edge)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#228
```

### is_edge_active

```cpp
public bool is_edge_active(const Line<dimension> & line, index_t edge)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#239
```

### builder

```cpp
protected ModelBuilder & builder()
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#251
```

### model

```cpp
protected const Model & model()
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#256
```

### model_point

```cpp
protected const Point<dimension> & model_point(const ComponentMeshVertex & cmv)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#261
```

### set_point

```cpp
protected void set_point(const ComponentMeshVertex & cmv, const Point<dimension> & point)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#283
```

### collapse_vertex_identifier

```cpp
protected void collapse_vertex_identifier(const ModelCollapsePolygonEdgeInfo<dimension> & info, const Point<dimension> & point)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#306
```

### collapse_edge_surfaces

```cpp
protected void collapse_edge_surfaces(const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<dimension> & point, ModelCollapsePolygonEdgeInfo<dimension> & info)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#317
```

### split_triangle_surface

```cpp
protected void split_triangle_surface(const Surface<dimension> & surface, index_t triangle, const Point<dimension> & point, ModelSplitTriangleInfo<dimension> & info)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#343
```

### swap_edge_surface

```cpp
protected void swap_edge_surface(const Surface<dimension> & surface, const PolygonEdge & edge)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#362
```

### split_edge_surfaces

```cpp
protected void split_edge_surfaces(const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<dimension> & point, ModelSplitPolygonEdgeInfo<dimension> & info)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#373
```

### collapse_edge_lines

```cpp
protected void collapse_edge_lines(const struct ModelComponentMeshEdges::LineEdges & line_edges, const Point<dimension> & point, ModelCollapsePolygonEdgeInfo<dimension> & info)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#403
```

### split_edge_lines

```cpp
protected void split_edge_lines(const struct ModelComponentMeshEdges::LineEdges & line_edges, const Point<dimension> & point, ModelSplitPolygonEdgeInfo<dimension> & info)
```

```cpp
Defined at ../include/geode/common/modifier/model/private/model_geometric_modifier.h#433
```



