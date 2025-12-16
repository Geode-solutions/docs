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

# class SectionGeometricModifier


## Records

AdvancedSectionMeshModifiers

CleanVerticesMappings

CleanElementsMappings

CleanMappings

SectionSplitTriangleInfo

SectionSplitPolygonEdgeInfo

SectionCollapsePolygonEdgeInfo

SectionSwapEdgeInfo



## Functions

### SectionGeometricModifier

```cpp
public void SectionGeometricModifier(const Section & section, SectionBuilder & builder)
```


### SectionGeometricModifier

```cpp
public void SectionGeometricModifier(SectionGeometricModifier && other)
```


### ~SectionGeometricModifier

```cpp
public void ~SectionGeometricModifier()
```


### advanced_mesh_modifiers

```cpp
public AdvancedSectionMeshModifiers & advanced_mesh_modifiers()
```

### split_triangle

```cpp
public SectionSplitTriangleInfo split_triangle(const Surface2D & surface, index_t triangle, const Point2D & point)
```


### collapse_edge

```cpp
public SectionCollapsePolygonEdgeInfo collapse_edge(const Surface2D & surface, const PolygonEdge & edge, const Point2D & point)
```


### collapse_edge

```cpp
public SectionCollapsePolygonEdgeInfo collapse_edge(const Line2D & line, index_t edge, const Point2D & point)
```


### split_edge

```cpp
public SectionSplitPolygonEdgeInfo split_edge(const Surface2D & surface, const PolygonEdge & edge, const Point2D & point)
```


### split_edge

```cpp
public SectionSplitPolygonEdgeInfo split_edge(const Line2D & line, index_t edge, const Point2D & point)
```


### swap_edge

```cpp
public SectionSwapEdgeInfo swap_edge(const Surface2D & surface, const PolygonEdge & edge)
```


### move_point

```cpp
public void move_point(index_t unique_vertex, const Point2D & point)
```


### translate_point

```cpp
public void translate_point(index_t unique_vertex, const Vector2D & translation)
```


### rescale_point

```cpp
public void rescale_point(index_t unique_vertex, double scale)
```


### rescale_point

```cpp
public void rescale_point(index_t unique_vertex, const std::array<double, 2> & scale)
```


### updated_vertex

```cpp
public index_t updated_vertex(const Line2D & line, index_t vertex)
```


### set_updated_vertex

```cpp
public void set_updated_vertex(const Line2D & line, const VertexMultiMapping & mapping)
```


### updated_edge

```cpp
public const SmallSet<index_t> & updated_edge(const Line2D & line, index_t edge)
```


### set_updated_edge

```cpp
public void set_updated_edge(const Line2D & line, const EdgeMapping & mapping)
```


### updated_vertex

```cpp
public index_t updated_vertex(const Surface2D & surface, index_t vertex)
```


### set_updated_vertex

```cpp
public void set_updated_vertex(const Surface2D & surface, const VertexMultiMapping & mapping)
```


### updated_edge

```cpp
public const SmallSet<index_t> & updated_edge(const Surface2D & surface, index_t edge)
```


### set_updated_edge

```cpp
public void set_updated_edge(const Surface2D & surface, const EdgeMapping & mapping)
```


### updated_triangle

```cpp
public const SmallSet<index_t> & updated_triangle(const Surface2D & surface, index_t triangle)
```


### set_updated_triangle

```cpp
public void set_updated_triangle(const Surface2D & surface, const TriangleMapping & mapping)
```


### updated_unique_vertex

```cpp
public index_t updated_unique_vertex(index_t unique_vertex)
```


### set_updated_unique_vertex

```cpp
public void set_updated_unique_vertex(const VertexMultiMapping & mapping)
```


### unique_vertices_modifier

```cpp
public const VerticesModifier & unique_vertices_modifier()
```


### is_edge_active

```cpp
public bool is_edge_active(const Line2D & line, index_t edge)
```


### is_edge_active

```cpp
public bool is_edge_active(const Surface2D & surface, index_t edge)
```


### is_triangle_active

```cpp
public bool is_triangle_active(const Surface2D & surface, index_t triangle)
```


### inactive_edges

```cpp
public void inactive_edges(const Line2D & line, Span edges)
```


### inactive_triangles

```cpp
public void inactive_triangles(const Surface2D & surface, Span triangles)
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


### clean_stamp

```cpp
public index_t clean_stamp()
```


### model

```cpp
protected const Section & model()
```


### line_modifier

```cpp
protected EdgedCurveModifier2D & line_modifier(const Line2D & line)
```


### surface_modifier

```cpp
protected TriangulatedSurfaceModifier2D & surface_modifier(const Surface2D & surface)
```




