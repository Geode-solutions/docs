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

# namespace steiner_impl



## Records

* [ConstraintLocator](ConstraintLocator.md)
* [RelocationSide](RelocationSide.md)
* [SegmentCavity](SegmentCavity.md)
* [TemporarySplits](TemporarySplits.md)


## Functions

### bounding_box

```cpp
BoundingBox3D bounding_box(const std::vector<Point3D> & points, const std::array<index_t, N> & simplex)
```


### vertex_star

```cpp
std::vector<index_t> vertex_star(const DelaunayTriangulation & mesh, index_t vertex)
```


 Tetrahedra of the star of a used vertex, sorted.

### inner_cavity_vertices

```cpp
std::vector<index_t> inner_cavity_vertices(const DelaunayTriangulation & mesh, absl::Span<const index_t> tets, absl::Span<const Triangle> boundary)
```


 Vertices of the tetrahedra not on the boundary triangles, sorted.

### check_segment

```cpp
void check_segment(const DelaunayTriangulation & mesh, const std::array<index_t, 2> & segment, index_t id)
```


### throw_not_recovered

```cpp
void throw_not_recovered()
```


### add_finite_neighbors

```cpp
void add_finite_neighbors(const DelaunayTriangulation & mesh, std::vector<index_t> & tets)
```


 Add the finite neighbors of the tetrahedra (kept sorted and unique).

### remove_vertex

```cpp
bool remove_vertex(DelaunayTriangulation & mesh, index_t vertex, const ConstraintSet & constraints)
```


 Re-tetrahedralize the star of the vertex without it (advancing front or cone from one of its neighbors, no Steiner point), keeping the constraints. True if done.

### add_edge_ring

```cpp
void add_edge_ring(const DelaunayTriangulation & mesh, const std::array<index_t, 2> & edge, std::vector<index_t> & tets)
```


 Add the tetrahedra around the edge, if it is a mesh edge (kept sorted and unique).

### relocation_cavity

```cpp
std::vector<index_t> relocation_cavity(const DelaunayTriangulation & mesh, index_t vertex, const std::array<index_t, 2> & segment)
```


 The star of the temporary vertex and, if the split segment is an edge (through flat tetrahedra), every tetrahedron around it: the faces containing the segment, almost through the vertex, are then inside. Sorted.

### canonical

```cpp
Triangle canonical(const Triangle & triangle)
```


 Same oriented triangle whatever its first vertex: the smallest first.

### relocation_sides

```cpp
std::optional<std::vector<RelocationSide>> relocation_sides(const DelaunayTriangulation & mesh, absl::Span<const index_t> cavity, index_t vertex, absl::Span<const Triangle> parents, absl::Span<const Triangle> children)
```


 Sides of the relocation cavity: tetrahedra connected without crossing a split or parent triangle. A split triangle is replaced by its parent with the same orientation (the temporary vertex replaced by the missing end of the segment).

**return** std::nullopt if a split triangle has no parent.

### cone_from_segment_end

```cpp
bool cone_from_segment_end(const DelaunayTriangulation & mesh, const std::array<index_t, 2> & segment, absl::Span<const Triangle> faces, std::vector<std::array<index_t, 4>> & tets)
```


 Cone from one end of the segment over the faces not containing it, if every one of them is seen strictly positively from it: the segment is then an edge of the cone (appended to tets).

### check_recovered

```cpp
void check_recovered(const DelaunayTriangulation & mesh, absl::Span<const std::array<index_t, 2>> segments, absl::Span<const Triangle> triangles, index_t nb_input_points, const SteinerFilter & steiner_filter)
```


 Every input segment is a mesh edge, every input triangle a mesh facet and no created vertex lies on one of them.

**exception**otherwise.



