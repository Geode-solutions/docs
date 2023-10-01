# class FrontalRemesher

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/frontal.h#29
```

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

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2302
```

### ~FrontalRemesher

```cpp
public void ~FrontalRemesher<>()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2316
```

### remesh

```cpp
public RemeshedSurface<dimension> remesh()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2321
```

### background_mesh

```cpp
public const TriangulatedSurface<dimension> & background_mesh()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2327
```

### is_macro_vertex

```cpp
public bool is_macro_vertex(index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2334
```

### is_edge_on_macro_edge

```cpp
public bool is_edge_on_macro_edge(const PolygonEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2341
```

### is_macro_triangle

```cpp
public bool is_macro_triangle(index_t triangle)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2348
```

### active_macro_edges

```cpp
public std::vector<index_t> active_macro_edges(const PolygonEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2362
```

### all_macro_edges

```cpp
public std::vector<index_t> all_macro_edges(const PolygonEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2355
```

### last_macro_edge_id

```cpp
public index_t last_macro_edge_id(const PolygonEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2369
```

### find_edges_around_vertex_on_macro_edge

```cpp
public absl::InlinedVector<OrientedPolygonEdge, 4> find_edges_around_vertex_on_macro_edge(index_t macro_edge_id, index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2376
```

### find_next_edge_on_macro_edge

```cpp
public absl::optional<OrientedPolygonEdge> find_next_edge_on_macro_edge(const OrientedPolygonEdge & edge, index_t macro_edge_id)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2386
```

### macro_edge_path

```cpp
public std::vector<OrientedPolygonEdge> macro_edge_path(index_t start, index_t end, index_t macro_edge_id)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2394
```

### last_active_macro_edge_id

```cpp
public optional last_active_macro_edge_id(const PolygonEdge & edge, index_t me)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2402
```

### target_point

```cpp
protected Point<dimension> target_point(const Point<dimension> & prev, const Point<dimension> & last, const Point<dimension> & origin, double target)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2410
```

### should_snap_on_macro_edge

```cpp
protected absl::optional<std::tuple<Point<dimension>, index_t> > should_snap_on_macro_edge(index_t triangle_id, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2420
```



# class FrontalRemesher

# class FrontalRemesher

