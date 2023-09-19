# class MacroInfo


# class MacroInfo


## Functions

### ~MacroInfo

```cpp
```cpp
public void ~MacroInfo<dimension>()
```
```


### component_vertices

```cpp
```cpp
public const int & component_vertices(index_t background_mesh_vertex)
```
```


### component_edges

```cpp
```cpp
public const int & component_edges(index_t background_mesh_edge)
```
```


### incident_component_edges

```cpp
```cpp
public const int & incident_component_edges(index_t background_mesh_vertex)
```
```


### is_vertex_part_of_component_vertices

```cpp
```cpp
public _Bool is_vertex_part_of_component_vertices(index_t background_mesh_vertex, const uuid & mesh_component_id)
```
```


### add_component_vertex_to_background_mesh_vertex

```cpp
```cpp
public void add_component_vertex_to_background_mesh_vertex(const uuid & mesh_id, index_t vertex_id, index_t background_mesh_vertex_id, MacroInfoKey )
```
```


### add_component_edge_to_background_mesh_edge

```cpp
```cpp
public void add_component_edge_to_background_mesh_edge(const uuid & mesh_id, index_t edge_id, index_t background_mesh_edge_id, MacroInfoKey )
```
```


### add_component_edge_to_background_mesh_vertices

```cpp
```cpp
public void add_component_edge_to_background_mesh_vertices(const uuid & mesh_id, index_t edge_id, absl::Span<const index_t> background_mesh_vertex_ids, MacroInfoKey )
```
```


### remove_component_edge_to_background_mesh_edge

```cpp
```cpp
public void remove_component_edge_to_background_mesh_edge(const uuid & mesh_id, index_t edge_id, index_t background_mesh_edge_id, MacroInfoKey )
```
```


### remove_component_edge_to_background_mesh_vertex

```cpp
```cpp
public void remove_component_edge_to_background_mesh_vertex(const uuid & mesh_id, index_t edge_id, index_t background_mesh_vertex_id, MacroInfoKey )
```
```


### MacroInfo

```cpp
```cpp
protected void MacroInfo<dimension>()
```
```


### MacroInfo

```cpp
```cpp
protected void MacroInfo<dimension>(MacroInfo<dimension> && other)
```
```


### initialize_macro_info_data_base

```cpp
```cpp
protected void initialize_macro_info_data_base(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager)
```
```


### add_component_vertex_to_background_mesh_vertex

```cpp
```cpp
protected void add_component_vertex_to_background_mesh_vertex(const uuid & mesh_id, index_t vertex_id, index_t background_mesh_vertex_id)
```
```


### add_component_edge_to_background_mesh_edge

```cpp
```cpp
protected void add_component_edge_to_background_mesh_edge(const uuid & mesh_id, index_t edge_id, index_t background_mesh_edge_id)
```
```


### add_component_edge_to_background_mesh_vertices

```cpp
```cpp
protected void add_component_edge_to_background_mesh_vertices(const uuid & mesh_id, index_t edge_id, absl::Span<const index_t> background_mesh_vertex_ids)
```
```


### remove_component_edge_to_background_mesh_edge

```cpp
```cpp
protected void remove_component_edge_to_background_mesh_edge(const uuid & mesh_id, index_t edge_id, index_t background_mesh_edge_id)
```
```


### remove_component_edge_to_background_mesh_vertex

```cpp
```cpp
protected void remove_component_edge_to_background_mesh_vertex(const uuid & mesh_id, index_t edge_id, index_t background_mesh_vertex_id)
```
```


### clean_background_mesh_attributes

```cpp
```cpp
protected void clean_background_mesh_attributes(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager)
```
```




# class MacroInfo


