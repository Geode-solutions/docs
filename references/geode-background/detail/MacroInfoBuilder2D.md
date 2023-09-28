# class MacroInfoBuilder2D

```cpp
Defined at ../include/geode/background/surface/private/macro_info_builder.h#27
```

```cpp
Inherits from MacroInfoBuilder<2>
```



## Functions

### ~MacroInfoBuilder2D

```cpp
public void ~MacroInfoBuilder2D()
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info_builder.cpp#223
```

### add_macro_edge_info

```cpp
public void add_macro_edge_info(const uuid & component_uuid, index_t macro_edge_id, absl::Span<const index_t> background_surface_edge_ids)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info_builder.cpp#227
```

### add_macro_edge_info_on_vertex

```cpp
public void add_macro_edge_info_on_vertex(const uuid & component_uuid, index_t macro_edge_id, index_t background_surface_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info_builder.cpp#236
```

### remove_macro_edge_info_on_edge

```cpp
public void remove_macro_edge_info_on_edge(const uuid & component_uuid, index_t macro_edge_id, index_t background_surface_edge_id)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info_builder.cpp#245
```

### remove_macro_edge_info_on_vertex

```cpp
public void remove_macro_edge_info_on_vertex(const uuid & component_uuid, index_t macro_edge_id, index_t background_surface_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info_builder.cpp#254
```

### update_information

```cpp
public void update_information(const int & split_info)
```

### update_edges

```cpp
public void update_edges(absl::Span<const EdgeMapping> edges)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info_builder.cpp#263
```

### update_edges

```cpp
public void update_edges(absl::Span<const EdgeMultiMapping> edges)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info_builder.cpp#269
```

### MacroInfoBuilder2D

```cpp
protected void MacroInfoBuilder2D(BackgroundSurface & background)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info_builder.cpp#218
```

### update_information

```cpp
public void update_information(const TriangulatedSurfaceModifier2D::SplitTriangleInfo & split_info)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info_builder.cpp#275
```

### update_information

```cpp
public void update_information(const TriangulatedSurfaceModifier2D::SplitPolygonEdgeInfo & split_info)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info_builder.cpp#281
```

### update_information

```cpp
public void update_information(const TriangulatedSurfaceModifier2D::CollapseEdgeInfo & collapse_info)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info_builder.cpp#288
```



