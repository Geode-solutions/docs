# class OpenGeodeTriangulatedSurface

# class OpenGeodeTriangulatedSurface

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_triangulated_surface.h#43
```

```cpp
Inherits from TriangulatedSurface<dimension>
```



## Records

Impl



## Functions

### OpenGeodeTriangulatedSurface

```cpp
public void OpenGeodeTriangulatedSurface<dimension>(const OpenGeodeTriangulatedSurface<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_triangulated_surface.h#45
```

### operator=

```cpp
public OpenGeodeTriangulatedSurface<dimension> & operator=(const OpenGeodeTriangulatedSurface<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_triangulated_surface.h#45
```

### OpenGeodeTriangulatedSurface

```cpp
public void OpenGeodeTriangulatedSurface<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_triangulated_surface.cpp#134
```

### OpenGeodeTriangulatedSurface

```cpp
public void OpenGeodeTriangulatedSurface<dimension>(OpenGeodeTriangulatedSurface<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_triangulated_surface.cpp#140
```

### operator=

```cpp
public OpenGeodeTriangulatedSurface<dimension> & operator=(OpenGeodeTriangulatedSurface<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_triangulated_surface.cpp#148
```

### ~OpenGeodeTriangulatedSurface

```cpp
public void ~OpenGeodeTriangulatedSurface<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_triangulated_surface.cpp#158
```

### impl_name_static

```cpp
public NamedType impl_name_static()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_triangulated_surface.h#59
```

### impl_name

```cpp
public NamedType impl_name()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_triangulated_surface.h#65
```

### type_name

```cpp
public NamedType type_name()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_triangulated_surface.h#70
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_triangulated_surface.h#75
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_triangulated_surface.h#82
```

### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGTriangulatedSurfaceKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_triangulated_surface.cpp#164
```

### set_polygon_vertex

```cpp
public void set_polygon_vertex(const PolygonVertex & polygon_vertex, index_t vertex_id, OGTriangulatedSurfaceKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_triangulated_surface.cpp#207
```

### set_polygon_adjacent

```cpp
public void set_polygon_adjacent(const PolygonEdge & polygon_edge, index_t adjacent_id, OGTriangulatedSurfaceKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_triangulated_surface.cpp#223
```

### add_triangle

```cpp
public void add_triangle(const std::array<index_t, 3> & vertices, OGTriangulatedSurfaceKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_triangulated_surface.cpp#216
```

### get_polygon_adjacent

```cpp
public absl::optional<index_t> get_polygon_adjacent(const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_triangulated_surface.cpp#178
```



# class OpenGeodeTriangulatedSurface

