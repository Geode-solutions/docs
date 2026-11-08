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

# namespace exact_geometry



## Functions

### to_int

```cpp
int to_int(GEO::SIGN value)
```


### projection_axis

```cpp
std::optional<local_index_t> projection_axis(const Point3D & a, const Point3D & b, const Point3D & c)
```


 First coordinate axis whose removal keeps the triangle non degenerate (dropping a coordinate is exact), std::nullopt if degenerate.

### is_on_closed_segment_2d

```cpp
bool is_on_closed_segment_2d(const Point2D & x, const Point2D & p, const Point2D & q)
```


### closed_segments_intersect_2d

```cpp
bool closed_segments_intersect_2d(const Point2D & p, const Point2D & q, const Point2D & r, const Point2D & s)
```


### is_in_closed_triangle_2d

```cpp
bool is_in_closed_triangle_2d(const Point2D & x, const Point2D & a, const Point2D & b, const Point2D & c)
```


### coplanar_segment_meets_triangle

```cpp
bool coplanar_segment_meets_triangle(const Point3D & p0, const Point3D & p1, const Point3D & a, const Point3D & b, const Point3D & c)
```


### closed_segment_meets_closed_triangle

```cpp
bool closed_segment_meets_closed_triangle(const Point3D & p0, const Point3D & p1, const Point3D & a, const Point3D & b, const Point3D & c)
```


 Closed segment against closed (non degenerate) triangle.

### is_in_coplanar_sector

```cpp
bool is_in_coplanar_sector(const Point3D & apex, const Point3D & u, const Point3D & w, const Point3D & other)
```


 The open segment from apex (a vertex of the triangle (apex, u, w)) to other meets the closed triangle iff other is coplanar and in the closed angular sector of the triangle at apex.

### position_of

```cpp
local_index_t position_of(const std::array<index_t, N> & simplex, index_t vertex)
```




