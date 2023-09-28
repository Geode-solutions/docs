# class MacroInfo

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#367
```

# class MacroInfo

```cpp
Defined at ../include/geode/background/common/private/macro_info.h#45
```

## Functions

### ~MacroInfo

```cpp
public void ~MacroInfo<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#206
```

### component_vertices

```cpp
public const int & component_vertices(index_t background_mesh_vertex)
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#211
```

### component_edges

```cpp
public const int & component_edges(index_t background_mesh_edge)
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#219
```

### incident_component_edges

```cpp
public const int & incident_component_edges(index_t background_mesh_vertex)
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#226
```

### is_vertex_part_of_component_vertices

```cpp
public bool is_vertex_part_of_component_vertices(index_t background_mesh_vertex, const uuid & mesh_component_id)
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#234
```

### add_component_vertex_to_background_mesh_vertex

```cpp
public void add_component_vertex_to_background_mesh_vertex(const uuid & mesh_id, index_t vertex_id, index_t background_mesh_vertex_id, MacroInfoKey )
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#242
```

### add_component_edge_to_background_mesh_edge

```cpp
public void add_component_edge_to_background_mesh_edge(const uuid & mesh_id, index_t edge_id, index_t background_mesh_edge_id, MacroInfoKey )
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#253
```

### add_component_edge_to_background_mesh_vertices

```cpp
public void add_component_edge_to_background_mesh_vertices(const uuid & mesh_id, index_t edge_id, absl::Span<const index_t> background_mesh_vertex_ids, MacroInfoKey )
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#264
```

### remove_component_edge_to_background_mesh_edge

```cpp
public void remove_component_edge_to_background_mesh_edge(const uuid & mesh_id, index_t edge_id, index_t background_mesh_edge_id, MacroInfoKey )
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#275
```

### remove_component_edge_to_background_mesh_vertex

```cpp
public void remove_component_edge_to_background_mesh_vertex(const uuid & mesh_id, index_t edge_id, index_t background_mesh_vertex_id, MacroInfoKey )
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#286
```

### MacroInfo

```cpp
protected void MacroInfo<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#195
```

### MacroInfo

```cpp
protected void MacroInfo<dimension>(MacroInfo<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#200
```

### initialize_macro_info_data_base

```cpp
protected void initialize_macro_info_data_base(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager)
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#349
```

### add_component_vertex_to_background_mesh_vertex

```cpp
protected void add_component_vertex_to_background_mesh_vertex(const uuid & mesh_id, index_t vertex_id, index_t background_mesh_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#298
```

### add_component_edge_to_background_mesh_edge

```cpp
protected void add_component_edge_to_background_mesh_edge(const uuid & mesh_id, index_t edge_id, index_t background_mesh_edge_id)
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#308
```

### add_component_edge_to_background_mesh_vertices

```cpp
protected void add_component_edge_to_background_mesh_vertices(const uuid & mesh_id, index_t edge_id, absl::Span<const index_t> background_mesh_vertex_ids)
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#318
```

### remove_component_edge_to_background_mesh_edge

```cpp
protected void remove_component_edge_to_background_mesh_edge(const uuid & mesh_id, index_t edge_id, index_t background_mesh_edge_id)
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#328
```

### remove_component_edge_to_background_mesh_vertex

```cpp
protected void remove_component_edge_to_background_mesh_vertex(const uuid & mesh_id, index_t edge_id, index_t background_mesh_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#338
```

### clean_background_mesh_attributes

```cpp
protected void clean_background_mesh_attributes(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager)
```

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#358
```



# class MacroInfo

```cpp
Defined at /github/workspace/src/geode/background/common/macro_info.cpp#368
```

