# class SolidPatcher


## Functions

### SolidPatcher

```cpp
public void SolidPatcher()
```


### ~SolidPatcher

```cpp
public void ~SolidPatcher()
```


### patch

```cpp
public const TriangulatedSurface3D & patch()
```


### solid_patch

```cpp
public const SolidPatch & solid_patch(index_t patch_vertex)
```


### front_edge

```cpp
public absl::optional<FrontEdge> front_edge(Span patch_edge_vertices)
```


### is_vertex_in_patch

```cpp
public _Bool is_vertex_in_patch(index_t solid_vertex_id)
```


### is_facet_in_patch

```cpp
public _Bool is_facet_in_patch(const std::array<index_t, 3> & patch_vertices)
```


### patch_vertex_id

```cpp
public absl::optional<index_t> patch_vertex_id(index_t solid_vertex_id)
```


### initialize_front_edge

```cpp
public std::array<index_t, 2> initialize_front_edge(const PatchFrontEdge & edge, const std::array<index_t, 2> & solid_edge_vertices)
```


### skip

```cpp
public _Bool skip(Span patch_edge_vertices)
```


### find_or_create_patch_vertex_from_vertex

```cpp
public index_t find_or_create_patch_vertex_from_vertex(index_t solid_vertex)
```


### find_or_create_patch_vertex_from_edge

```cpp
public index_t find_or_create_patch_vertex_from_edge(const TetrahedralSolid3D & solid, index_t solid_edge)
```


### find_or_create_patch_vertex

```cpp
public index_t find_or_create_patch_vertex(const TetrahedralSolid3D & solid, const SolidPatch & patch)
```


### create_patch_triangle

```cpp
public index_t create_patch_triangle(const std::array<index_t, 2> edge_vertices, index_t third_vertex)
```


### set_patch_triangle_info

```cpp
public void set_patch_triangle_info(std::pair<PolygonEdge, PolygonEdge> & triangle_info, const PolygonEdge & polygon_edge)
```


### move_front_forward

```cpp
public void move_front_forward(index_t fv0, index_t fv1, index_t solid_vertex, index_t opp_front_vertex, const TetrahedralSolid3D & solid)
```




