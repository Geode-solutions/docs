# class ModelGeometricModifier


## Functions

### ModelGeometricModifier<Model, ModelBuilder, dimension>

```cpp
public void ModelGeometricModifier<Model, ModelBuilder, dimension>(Model & model)
```


### ~ModelGeometricModifier<Model, ModelBuilder, dimension>

```cpp
public void ~ModelGeometricModifier<Model, ModelBuilder, dimension>()
```


### move_point

```cpp
public void move_point(index_t unique_vertex, const Point<dimension> & point)
```


### translate_point

```cpp
public void translate_point(index_t unique_vertex, const Vector<dimension> & translation)
```


### rescale_point

```cpp
public void rescale_point(index_t unique_vertex, const std::array<double, dimension> & scale)
```


### rescale_point

```cpp
public void rescale_point(index_t unique_vertex, double scale)
```


### clean_triangles_surfaces

```cpp
public int clean_triangles_surfaces()
```


### clean_vertices_surfaces

```cpp
public int clean_vertices_surfaces()
```


### clean_edges_lines

```cpp
public int clean_edges_lines()
```


### clean_vertices_lines

```cpp
public int clean_vertices_lines()
```


### clean_unique_vertices

```cpp
public int clean_unique_vertices()
```


### updated_line_vertex

```cpp
public index_t updated_line_vertex(const Line<dimension> & line, index_t vertex)
```


### updated_surface_vertex

```cpp
public index_t updated_surface_vertex(const Surface<dimension> & surface, index_t vertex)
```


### is_triangle_active

```cpp
public _Bool is_triangle_active(const Surface<dimension> & surface, index_t triangle)
```


### is_edge_active

```cpp
public _Bool is_edge_active(const Surface<dimension> & surface, index_t edge)
```


### is_edge_active

```cpp
public _Bool is_edge_active(const Line<dimension> & line, index_t edge)
```


### builder

```cpp
protected ModelBuilder & builder()
```


### model

```cpp
protected const Model & model()
```


### model_point

```cpp
protected const Point<dimension> & model_point(const ComponentMeshVertex & cmv)
```


### set_point

```cpp
protected void set_point(const ComponentMeshVertex & cmv, const Point<dimension> & point)
```


### collapse_vertex_identifier

```cpp
protected void collapse_vertex_identifier(const ModelCollapsePolygonEdgeInfo<dimension> & info, const Point<dimension> & point)
```


### collapse_edge_surfaces

```cpp
protected void collapse_edge_surfaces(const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<dimension> & point, ModelCollapsePolygonEdgeInfo<dimension> & info)
```


### split_triangle_surface

```cpp
protected void split_triangle_surface(const Surface<dimension> & surface, index_t triangle, const Point<dimension> & point, ModelSplitTriangleInfo<dimension> & info)
```


### swap_edge_surface

```cpp
protected void swap_edge_surface(const Surface<dimension> & surface, const PolygonEdge & edge)
```


### split_edge_surfaces

```cpp
protected void split_edge_surfaces(const struct ModelComponentMeshEdges::SurfaceEdges & surface_edges, const Point<dimension> & point, ModelSplitPolygonEdgeInfo<dimension> & info)
```


### collapse_edge_lines

```cpp
protected void collapse_edge_lines(const struct ModelComponentMeshEdges::LineEdges & line_edges, const Point<dimension> & point, ModelCollapsePolygonEdgeInfo<dimension> & info)
```


### split_edge_lines

```cpp
protected void split_edge_lines(const struct ModelComponentMeshEdges::LineEdges & line_edges, const Point<dimension> & point, ModelSplitPolygonEdgeInfo<dimension> & info)
```




