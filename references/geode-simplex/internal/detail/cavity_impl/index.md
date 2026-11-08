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

# namespace cavity_impl



## Records

* [FrontFacet](FrontFacet.md)
* [KernelPolytope](KernelPolytope.md)
* [RegionFiller](RegionFiller.md)


## Functions

### edge_key

```cpp
std::pair<index_t, index_t> edge_key(index_t v0, index_t v1)
```


### same_oriented

```cpp
bool same_oriented(const Triangle & lhs, const Triangle & rhs)
```


 True if lhs and rhs are the same oriented triangle (cyclic rotation).

### reversed

```cpp
Triangle reversed(const Triangle & triangle)
```


### lifted

```cpp
Tet lifted(const Triangle & triangle, index_t apex)
```


### rotated_key

```cpp
Triangle rotated_key(const Triangle & triangle)
```


 Oriented triangle rotated to start with its smallest vertex: the same key for every rotation of the same oriented triangle.

### closes

```cpp
bool closes(absl::Span<const Triangle> boundary, absl::Span<const Tet> tets)
```


 True if the tetrahedra fill exactly the region bounded by the oriented triangles (region on their positive side, a wall being given in both orientations): each boundary triangle is a facet of one tetrahedron lying on its positive side, every other facet is shared by two tetrahedra.

### to_vec

```cpp
Vec to_vec(const Point3D & point)
```


### is_finite

```cpp
bool is_finite(const Vec & vector)
```


### sub

```cpp
Vec sub(const Vec & lhs, const Vec & rhs)
```


### cross

```cpp
Vec cross(const Vec & lhs, const Vec & rhs)
```


### dot

```cpp
double dot(const Vec & lhs, const Vec & rhs)
```


### middle

```cpp
Point3D middle(const Point3D & lhs, const Point3D & rhs)
```


### average

```cpp
Point3D average(absl::Span<const Vec> points)
```


### record_replacement

```cpp
FlipUndo record_replacement(const DelaunayTriangulation & mesh, absl::Span<const index_t> old_tets, index_t nb_new_tets)
```


 Everything replace_tets may modify, in the FlipUndo format (same recipe as apply_flip_with_undo).

### ear_clipping

```cpp
std::optional<std::vector<std::array<index_t, 3>>> ear_clipping(const std::vector<Point3D> & points, std::vector<index_t> polygon, local_index_t axis, GEO::SIGN orientation_sign)
```


 Ear clipping of a simple polygon given by its vertices, oriented with the sign orientation in the 2D projection along axis. Each step removes one vertex. std::nullopt if no ear is found.

### insert_in_triangulation

```cpp
bool insert_in_triangulation(const std::vector<Point3D> & points, std::vector<std::array<index_t, 3>> & triangles, index_t vertex, local_index_t axis, GEO::SIGN orientation_sign)
```


 Insert a vertex strictly inside the 2D triangulation (oriented with orientation_sign): split of the triangle containing it, or of the two triangles sharing the edge containing it. False if not found.

### triangulate_sleeve_impl

```cpp
std::optional<std::vector<std::array<index_t, 3>>> triangulate_sleeve_impl(const std::vector<Point3D> & points, absl::Span<const std::array<index_t, 3>> triangles, index_t a, index_t b)
```


 Triangulation, with the same orientation, of the planar polygon made of the given consistently oriented coplanar triangles, containing the segment (a, b) between two of its boundary vertices. std::nullopt if the polygon boundary is not a simple loop through a and b.



