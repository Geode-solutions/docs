<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class ModelGeometricModifier


## Functions

### ModelGeometricModifier

```cpp
public void ModelGeometricModifier<Model>(const Model & model, ModelBuilder & builder)
```


### ~ModelGeometricModifier

```cpp
public void ~ModelGeometricModifier<Model>()
```


### model

```cpp
public const Model & model()
```


### line_modifier

```cpp
public const EdgedCurveModifier<dimension> & line_modifier(const Line<dimension> & line)
```


### line_modifier

```cpp
public EdgedCurveModifier<dimension> & line_modifier(const Line<dimension> & line)
```


### surface_modifier

```cpp
public const TriangulatedSurfaceModifier<dimension> & surface_modifier(const Surface<dimension> & surface)
```


### surface_modifier

```cpp
public TriangulatedSurfaceModifier<dimension> & surface_modifier(const Surface<dimension> & surface)
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
public flat_hash_map clean_triangles_surfaces()
```


### clean_surface_edges

```cpp
public flat_hash_map clean_surface_edges()
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


### clean_unique_vertices

```cpp
public vector clean_unique_vertices()
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
public bool is_triangle_active(const Surface<dimension> & surface, index_t triangle)
```


### is_edge_active

```cpp
public bool is_edge_active(const Surface<dimension> & surface, index_t edge)
```


### is_edge_active

```cpp
public bool is_edge_active(const Line<dimension> & line, index_t edge)
```


### mutex

```cpp
protected absl::Mutex & mutex()
```


### builder

```cpp
protected ModelBuilder & builder()
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


### split_triangle_surfaces

```cpp
protected void split_triangle_surfaces(const struct ModelComponentMeshPolygons::SurfacePolygons & surface_polygons, const Point<dimension> & point, ModelSplitTriangleInfo<dimension> & info)
```


### split_triangle_surface

```cpp
protected void split_triangle_surface(const Surface<dimension> & surface, index_t triangle, const Point<dimension> & point, ModelSplitTriangleInfo<dimension> & info)
```


### swap_edge_surface

```cpp
protected void swap_edge_surface(const Surface<dimension> & surface, const PolygonEdge & edge, ModelSwapEdgeInfo<dimension> & info)
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




