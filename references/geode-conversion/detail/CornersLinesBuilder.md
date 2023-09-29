# class CornersLinesBuilder

```cpp
Defined at ../include/geode/conversion/model/detail/corners_lines_builder.h#28
```

## Records

Impl



## Functions

### ~CornersLinesBuilder

```cpp
public void ~CornersLinesBuilder<Model>()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#364
```

### wireframe

```cpp
public const EdgedCurve<dimension> & wireframe()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#369
```

### build

```cpp
public void build()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#417
```

### build_wireframe_step

```cpp
public void build_wireframe_step()
```

### build_corners_step

```cpp
public void build_corners_step()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#405
```

### build_lines_step

```cpp
public void build_lines_step()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#411
```

### add_corner

```cpp
public void add_corner(index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#425
```

### wireframe_edge_id

```cpp
public absl::optional<index_t> wireframe_edge_id(const std::array<index_t, 2> & edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#376
```

### vertex_id

```cpp
public index_t vertex_id(index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#399
```

### line_uuid

```cpp
public const uuid & line_uuid(index_t edge)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#431
```

### corner_uuid

```cpp
public absl::optional<uuid> corner_uuid(index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#438
```

### line_edge_id

```cpp
public index_t line_edge_id(index_t edge)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#445
```

### line_vertex_id

```cpp
public index_t line_vertex_id(index_t vertex, const uuid & output_line_uuid)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#451
```

### CornersLinesBuilder

```cpp
protected void CornersLinesBuilder<Model>(Model & model)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#358
```

### find_or_create_edge

```cpp
protected index_t find_or_create_edge(const std::array<index_t, 2> & edge_vertices, const std::array<Point<dimension>, 2> & edge_points)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#384
```

### find_or_create_corner

```cpp
protected index_t find_or_create_corner(index_t corner_vertex, const Point<dimension> & corner_point)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/corners_lines_builder.cpp#392
```



# class CornersLinesBuilder

# class CornersLinesBuilder

