# class OpenGeodePolygonalSurface

# class OpenGeodePolygonalSurface

# class OpenGeodePolygonalSurface

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polygonal_surface.h#41
```

```cpp
Inherits from PolygonalSurface<dimension>
```



## Records

Impl



## Functions

### OpenGeodePolygonalSurface

```cpp
public void OpenGeodePolygonalSurface<dimension>(const OpenGeodePolygonalSurface<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polygonal_surface.h#43
```

### operator=

```cpp
public OpenGeodePolygonalSurface<dimension> & operator=(const OpenGeodePolygonalSurface<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polygonal_surface.h#43
```

### OpenGeodePolygonalSurface

```cpp
public void OpenGeodePolygonalSurface<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polygonal_surface.cpp#218
```

### OpenGeodePolygonalSurface

```cpp
public void OpenGeodePolygonalSurface<dimension>(OpenGeodePolygonalSurface<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polygonal_surface.cpp#224
```

### operator=

```cpp
public OpenGeodePolygonalSurface<dimension> & operator=(OpenGeodePolygonalSurface<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polygonal_surface.cpp#232
```

### ~OpenGeodePolygonalSurface

```cpp
public void ~OpenGeodePolygonalSurface<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polygonal_surface.cpp#242
```

### impl_name_static

```cpp
public NamedType impl_name_static()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polygonal_surface.h#57
```

### impl_name

```cpp
public NamedType impl_name()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polygonal_surface.h#63
```

### type_name

```cpp
public NamedType type_name()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polygonal_surface.h#68
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polygonal_surface.h#73
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polygonal_surface.h#80
```

### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGPolygonalSurfaceKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polygonal_surface.cpp#248
```

### set_polygon_vertex

```cpp
public void set_polygon_vertex(const PolygonVertex & polygon_vertex, index_t vertex_id, OGPolygonalSurfaceKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polygonal_surface.cpp#297
```

### set_polygon_adjacent

```cpp
public void set_polygon_adjacent(const PolygonEdge & polygon_edge, index_t adjacent_id, OGPolygonalSurfaceKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polygonal_surface.cpp#327
```

### add_polygon

```cpp
public void add_polygon(Span vertices, OGPolygonalSurfaceKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polygonal_surface.cpp#306
```

### remove_polygons

```cpp
public void remove_polygons(const std::vector<bool> & to_delete, OGPolygonalSurfaceKey )
```

### permute_polygons

```cpp
public void permute_polygons(Span permutation, OGPolygonalSurfaceKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polygonal_surface.cpp#320
```

### copy_polygons

```cpp
public void copy_polygons(const OpenGeodePolygonalSurface<dimension> & surface_mesh, OGPolygonalSurfaceKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polygonal_surface.cpp#336
```

### get_polygon_adjacent

```cpp
public absl::optional<index_t> get_polygon_adjacent(const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polygonal_surface.cpp#270
```

### remove_polygons

```cpp
public void remove_polygons(const int & to_delete, OGPolygonalSurfaceKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polygonal_surface.cpp#313
```



