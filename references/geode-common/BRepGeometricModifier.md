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

# class BRepGeometricModifier


## Records

AdvancedBRepMeshModifiers

CleanVerticesMappings

CleanElementsMappings

CleanMappings

BRepSplitTriangleInfo

BRepSplitTetrahedronInfo

BRepRemoveMultipleAdjacencyInfo

BRepSplitPolygonEdgeInfo

BRepCollapsePolygonEdgeInfo

BRepSwapEdgeInfo

BRepSwapFacetInfo



## Functions

### BRepGeometricModifier

```cpp
public void BRepGeometricModifier(const BRep & brep, BRepBuilder & builder)
```


### BRepGeometricModifier

```cpp
public void BRepGeometricModifier(BRepGeometricModifier && other)
```


### operator=

```cpp
public BRepGeometricModifier & operator=(BRepGeometricModifier && other)
```


### ~BRepGeometricModifier

```cpp
public void ~BRepGeometricModifier()
```


### advanced_mesh_modifiers

```cpp
public AdvancedBRepMeshModifiers & advanced_mesh_modifiers()
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


### collapse_edge

```cpp
public BRepCollapsePolygonEdgeInfo collapse_edge(index_t from_unique_vertex, index_t to_unique_vertex)
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


### swap_facet

```cpp
public BRepSwapFacetInfo swap_facet(const Block3D & block, const PolyhedronFacet & facet)
```


### swap_edge

```cpp
public BRepSwapEdgeInfo swap_edge(const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex)
```


### swap_edge

```cpp
public BRepSwapEdgeInfo swap_edge(const Surface3D & surface, const PolygonEdge & edge)
```


### remove_double_adjacency

```cpp
public BRepRemoveMultipleAdjacencyInfo remove_double_adjacency(const Block3D & block, const PolyhedronFacetEdge & edge)
```


### remove_triple_adjacency

```cpp
public BRepRemoveMultipleAdjacencyInfo remove_triple_adjacency(const Block3D & block, const PolyhedronVertex & vertex)
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
public std::optional<index_t> updated_vertex(const Line3D & line, index_t vertex)
```


### set_updated_vertex

```cpp
public void set_updated_vertex(const Line3D & line, const VertexMultiMapping & mapping)
```


### updated_edge

```cpp
public const SmallSet<index_t> & updated_edge(const Line3D & line, index_t edge)
```


### set_updated_edge

```cpp
public void set_updated_edge(const Line3D & line, const EdgeMapping & mapping)
```


### updated_vertex

```cpp
public std::optional<index_t> updated_vertex(const Surface3D & surface, index_t vertex)
```


### set_updated_vertex

```cpp
public void set_updated_vertex(const Surface3D & surface, const VertexMultiMapping & mapping)
```


### updated_edge

```cpp
public const SmallSet<index_t> & updated_edge(const Surface3D & surface, index_t edge)
```


### set_updated_edge

```cpp
public void set_updated_edge(const Surface3D & surface, const EdgeMapping & mapping)
```


### updated_triangle

```cpp
public const SmallSet<index_t> & updated_triangle(const Surface3D & surface, index_t triangle)
```


### set_updated_triangle

```cpp
public void set_updated_triangle(const Surface3D & surface, const TriangleMapping & mapping)
```


### updated_vertex

```cpp
public std::optional<index_t> updated_vertex(const Block3D & block, index_t vertex)
```


### set_updated_vertex

```cpp
public void set_updated_vertex(const Block3D & block, const VertexMultiMapping & mapping)
```


### updated_edge

```cpp
public const SmallSet<index_t> & updated_edge(const Block3D & block, index_t edge)
```


### set_updated_edge

```cpp
public void set_updated_edge(const Block3D & block, const EdgeMapping & mapping)
```


### updated_facet

```cpp
public const SmallSet<index_t> & updated_facet(const Block3D & block, index_t facet)
```


### set_updated_facet

```cpp
public void set_updated_facet(const Block3D & block, const FacetMapping & mapping)
```


### updated_tetrahedron

```cpp
public const SmallSet<index_t> & updated_tetrahedron(const Block3D & block, index_t tetrahedron)
```


### set_updated_tetrahedron

```cpp
public void set_updated_tetrahedron(const Block3D & block, const TetrahedronMapping & mapping)
```


### updated_unique_vertex

```cpp
public std::optional<index_t> updated_unique_vertex(index_t unique_vertex)
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


### inactive_edges

```cpp
public void inactive_edges(const Line3D & line, Span edges)
```


### inactive_triangles

```cpp
public void inactive_triangles(const Surface3D & surface, Span triangles)
```


### inactive_tetrahedra

```cpp
public void inactive_tetrahedra(const Block3D & block, Span tetrahedra)
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


### clean_tetrahedra_blocks

```cpp
public flat_hash_map clean_tetrahedra_blocks()
```


### clean_block_edges

```cpp
public flat_hash_map clean_block_edges()
```


### clean_block_facets

```cpp
public flat_hash_map clean_block_facets()
```


### clean_vertices_blocks

```cpp
public flat_hash_map clean_vertices_blocks()
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
protected const BRep & model()
```


### block_modifier

```cpp
protected TetrahedralSolidModifier & block_modifier(const Block3D & block)
```




