<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class MacroInfo


# class MacroInfo


# class MacroInfo


## Functions

### ~MacroInfo

```cpp
public void ~MacroInfo<dimension>()
```


### component_vertices

```cpp
public const std::vector<MeshVertex> & component_vertices(index_t background_mesh_vertex)
```


### component_edges

```cpp
public const std::vector<MeshEdge> & component_edges(index_t background_mesh_edge)
```


### incident_component_edges

```cpp
public const std::vector<MeshEdge> & incident_component_edges(index_t background_mesh_vertex)
```


### is_vertex_part_of_component_vertices

```cpp
public bool is_vertex_part_of_component_vertices(index_t background_mesh_vertex, const uuid & mesh_component_id)
```


### add_component_vertex_to_background_mesh_vertex

```cpp
public void add_component_vertex_to_background_mesh_vertex(const uuid & mesh_id, index_t vertex_id, index_t background_mesh_vertex_id, MacroInfoKey )
```


### remove_component_vertex_from_background_mesh_vertex

```cpp
public void remove_component_vertex_from_background_mesh_vertex(const uuid & mesh_id, index_t vertex_id, index_t background_mesh_vertex_id, MacroInfoKey )
```


### add_component_edge_to_background_mesh_edge

```cpp
public void add_component_edge_to_background_mesh_edge(const uuid & mesh_id, index_t edge_id, index_t background_mesh_edge_id, MacroInfoKey )
```


### add_component_edge_to_background_mesh_vertices

```cpp
public void add_component_edge_to_background_mesh_vertices(const uuid & mesh_id, index_t edge_id, Span background_mesh_vertex_ids, MacroInfoKey )
```


### remove_component_edge_from_background_mesh_edge

```cpp
public void remove_component_edge_from_background_mesh_edge(const uuid & mesh_id, index_t edge_id, index_t background_mesh_edge_id, MacroInfoKey )
```


### remove_component_edge_from_background_mesh_vertex

```cpp
public void remove_component_edge_from_background_mesh_vertex(const uuid & mesh_id, index_t edge_id, index_t background_mesh_vertex_id, MacroInfoKey )
```


### MacroInfo

```cpp
protected void MacroInfo<dimension>()
```


### MacroInfo

```cpp
protected void MacroInfo<dimension>(MacroInfo<dimension> && other)
```


### initialize_macro_info_data_base

```cpp
protected void initialize_macro_info_data_base(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager)
```


### add_component_vertex_to_background_mesh_vertex

```cpp
protected void add_component_vertex_to_background_mesh_vertex(const uuid & mesh_id, index_t vertex_id, index_t background_mesh_vertex_id)
```


### add_component_edge_to_background_mesh_edge

```cpp
protected void add_component_edge_to_background_mesh_edge(const uuid & mesh_id, index_t edge_id, index_t background_mesh_edge_id)
```


### add_component_edge_to_background_mesh_vertices

```cpp
protected void add_component_edge_to_background_mesh_vertices(const uuid & mesh_id, index_t edge_id, Span background_mesh_vertex_ids)
```


### remove_component_edge_from_background_mesh_edge

```cpp
protected void remove_component_edge_from_background_mesh_edge(const uuid & mesh_id, index_t edge_id, index_t background_mesh_edge_id)
```


### remove_component_edge_from_background_mesh_vertex

```cpp
protected void remove_component_edge_from_background_mesh_vertex(const uuid & mesh_id, index_t edge_id, index_t background_mesh_vertex_id)
```


### clean_background_mesh_attributes

```cpp
protected void clean_background_mesh_attributes(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager)
```




