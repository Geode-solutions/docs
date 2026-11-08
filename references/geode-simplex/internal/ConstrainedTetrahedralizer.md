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

# class ConstrainedTetrahedralizer


 Constrained tetrahedralization of a set of input vertices, triangles and edges, without Steiner point on the constraints. Input vertices (constraint vertices) are tetrahedralized (Delaunay), constraints are recovered (interior Steiner points only when unavoidable), and the domain is carved by parity: crossing a triangle flagged as boundary toggles inside/outside, other triangles are internal constraints. Internal points are then inserted in the domain (constrained Bowyer-Watson), and degenerated tetrahedra (vertices in a slab thinner than GLOBAL_EPSILON) are removed by flips where the input does not force them. Bad internal points (duplicate, on a constraint or outside the domain) are dropped with a warning and have no mapping.



## Records

Mappings



## Functions

### ConstrainedTetrahedralizer

```cpp
protected void ConstrainedTetrahedralizer(std::unique_ptr<TetrahedralSolidBuilder3D> && mesh_builder, std::vector<Point3D> && internal_points)
```


### ~ConstrainedTetrahedralizer

```cpp
protected void ~ConstrainedTetrahedralizer()
```


### do_tetrahedralize

```cpp
protected void do_tetrahedralize()
```




**exception**if input vertices are duplicated, if constraints are invalid or cannot be recovered, if the boundary is not closed or if the domain is empty.

### create_input_vertices

```cpp
protected void create_input_vertices(index_t nb_vertices)
```


### set_input_point

```cpp
protected void set_input_point(index_t vertex_id, const Point3D & point)
```


### create_input_triangles

```cpp
protected void create_input_triangles(index_t nb_triangles)
```


### set_input_triangle

```cpp
protected void set_input_triangle(index_t triangle_id, const std::array<index_t, 3> & vertices, bool is_boundary)
```


### create_input_edges

```cpp
protected void create_input_edges(index_t nb_edges)
```


### set_input_edge

```cpp
protected void set_input_edge(index_t edge_id, index_t v0, index_t v1)
```


### assign_result

```cpp
protected Mappings assign_result()
```


 Write the vertices (input vertices, kept internal points, then Steiner points) and the tetrahedra (canonical order) with their adjacencies into the mesh builder.



