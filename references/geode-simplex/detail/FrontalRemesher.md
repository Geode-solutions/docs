# class FrontalRemesher


```cpp
Inherits from RemeshAlgo<dimension>
```



## Records

MacroEdge

Apex

Impl



## Functions

### FrontalRemesher

```cpp
public void FrontalRemesher<>(const TriangulatedSurface<dimension> & background_mesh, TriangulatedSurfaceBuilder<dimension> & background_builder, TriangulatedSurfaceEpsilonModifier<dimension> & background_modifier, const Metric<dimension> & metric, absl::Span<const index_t> lock_vertices)
```


### ~FrontalRemesher

```cpp
public void ~FrontalRemesher<>()
```


### remesh

```cpp
public RemeshedSurface<dimension> remesh()
```


### background_mesh

```cpp
public const TriangulatedSurface<dimension> & background_mesh()
```


### is_macro_vertex

```cpp
public bool is_macro_vertex(index_t vertex)
```


### is_edge_on_macro_edge

```cpp
public bool is_edge_on_macro_edge(const PolygonEdge & edge)
```


### is_macro_triangle

```cpp
public bool is_macro_triangle(index_t triangle)
```


### active_macro_edges

```cpp
public std::vector<index_t> active_macro_edges(const PolygonEdge & edge)
```


### all_macro_edges

```cpp
public std::vector<index_t> all_macro_edges(const PolygonEdge & edge)
```


### last_macro_edge_id

```cpp
public index_t last_macro_edge_id(const PolygonEdge & edge)
```


### find_edges_around_vertex_on_macro_edge

```cpp
public absl::InlinedVector<OrientedPolygonEdge, 4> find_edges_around_vertex_on_macro_edge(index_t macro_edge_id, index_t vertex)
```


### find_next_edge_on_macro_edge

```cpp
public absl::optional<OrientedPolygonEdge> find_next_edge_on_macro_edge(const OrientedPolygonEdge & edge, index_t macro_edge_id)
```


### macro_edge_path

```cpp
public std::vector<OrientedPolygonEdge> macro_edge_path(index_t start, index_t end, index_t macro_edge_id)
```


### last_active_macro_edge_id

```cpp
public optional last_active_macro_edge_id(const PolygonEdge & edge, index_t me)
```


### target_point

```cpp
protected Point<dimension> target_point(const Point<dimension> & prev, const Point<dimension> & last, const Point<dimension> & origin, double target)
```


### should_snap_on_macro_edge

```cpp
protected absl::optional<std::tuple<Point<dimension>, index_t> > should_snap_on_macro_edge(index_t triangle_id, const Point<dimension> & point)
```




# class FrontalRemesher

# class FrontalRemesher

