# class MacroInfo2D

```cpp
Defined at ../include/geode/background/surface/private/macro_info.h#25
```

```cpp
Inherits from MacroInfo<2>
```



## Functions

### ~MacroInfo2D

```cpp
public void ~MacroInfo2D()
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info.cpp#172
```

### edge_configuration

```cpp
public EdgeMacroInfoConfig edge_configuration(index_t edge_id, const BackgroundSurface & background_surface)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info.cpp#206
```

### add_component_vertex_to_background_surface_vertex

```cpp
public void add_component_vertex_to_background_surface_vertex(const uuid & mesh_id, index_t vertex_id, index_t background_surface_vertex_id, MacroInfo2DKey )
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info.cpp#176
```

### add_component_edge_to_background_surface_edge

```cpp
public void add_component_edge_to_background_surface_edge(const uuid & mesh_id, index_t edge_id, index_t background_surface_edge_id, MacroInfo2DKey )
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info.cpp#186
```

### add_component_edge_to_background_surface_vertices

```cpp
public void add_component_edge_to_background_surface_vertices(const uuid & mesh_id, index_t edge_id, absl::Span<const index_t> background_surface_vertex_ids, MacroInfo2DKey )
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info.cpp#196
```

### clean_background_surface_attributes

```cpp
public void clean_background_surface_attributes(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info.cpp#213
```

### MacroInfo2D

```cpp
protected void MacroInfo2D()
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info.cpp#164
```

### MacroInfo2D

```cpp
protected void MacroInfo2D(MacroInfo2D && other)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/macro_info.cpp#166
```



