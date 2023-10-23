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


### SectionGeometricModifier

```cpp
public void SectionGeometricModifier(SectionGeometricModifier && other)
```


### ~SectionGeometricModifier

```cpp
public void ~SectionGeometricModifier()
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
public void swap_edge(const Surface2D & surface, const PolygonEdge & edge)
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


### updated_vertex

```cpp
public index_t updated_vertex(const Surface2D & surface, index_t vertex)
```


### updated_unique_vertex

```cpp
public index_t updated_unique_vertex(index_t unique_vertex)
```


### is_edge_active

```cpp
public bool is_edge_active(const Line2D & line, index_t edge)
```


### is_triangle_active

```cpp
public bool is_triangle_active(const Surface2D & surface, index_t triangle)
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


### clean_unique_vertices

```cpp
public vector clean_unique_vertices()
```




