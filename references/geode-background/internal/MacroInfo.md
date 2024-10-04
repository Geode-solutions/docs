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


### macro_vertices

```cpp
public const std::vector<MeshVertex> & macro_vertices(index_t background_mesh_vertex)
```


### macro_edges

```cpp
public const std::vector<MeshEdge> & macro_edges(index_t background_mesh_edge)
```


### incident_macro_edges

```cpp
public const std::vector<MeshEdge> & incident_macro_edges(index_t background_mesh_vertex)
```


### is_macro_info_mandatory

```cpp
public bool is_macro_info_mandatory(const uuid & mesh_id)
```


### edge_vertices

```cpp
public const std::array<index_t, 2> & edge_vertices(index_t edge_id)
```

### add_macro_vertex_to_background_mesh_vertex

```cpp
public void add_macro_vertex_to_background_mesh_vertex(const MeshVertex & macro_vertex, index_t background_mesh_vertex_id, MacroInfoKey )
```


### remove_macro_vertex_from_background_mesh_vertex

```cpp
public void remove_macro_vertex_from_background_mesh_vertex(const MeshVertex & macro_vertex, index_t background_mesh_vertex_id, MacroInfoKey )
```


### add_macro_edge_to_background_mesh_edge

```cpp
public void add_macro_edge_to_background_mesh_edge(const MeshEdge & macro_edge, index_t background_mesh_edge_id, MacroInfoKey )
```


### add_macro_edge_to_background_mesh_vertices

```cpp
public void add_macro_edge_to_background_mesh_vertices(const MeshEdge & macro_edge, Span background_mesh_vertex_ids, MacroInfoKey )
```


### remove_macro_edge_from_background_mesh_edge

```cpp
public void remove_macro_edge_from_background_mesh_edge(const MeshEdge & macro_edge, index_t background_mesh_edge_id, MacroInfoKey )
```


### remove_macro_edge_from_background_mesh_vertex

```cpp
public void remove_macro_edge_from_background_mesh_vertex(const MeshEdge & macro_edge, index_t background_mesh_vertex_id, MacroInfoKey )
```


### set_macro_info_mandatory

```cpp
public void set_macro_info_mandatory(const uuid & mesh_id, MacroInfoKey )
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


### add_macro_vertex_to_background_mesh_vertex

```cpp
protected void add_macro_vertex_to_background_mesh_vertex(const MeshVertex & macro_vertex, index_t background_mesh_vertex_id)
```


### add_macro_edge_to_background_mesh_edge

```cpp
protected void add_macro_edge_to_background_mesh_edge(const MeshEdge & macro_edge, index_t background_mesh_edge_id)
```


### add_macro_edge_to_background_mesh_vertices

```cpp
protected void add_macro_edge_to_background_mesh_vertices(const MeshEdge & macro_edge, Span background_mesh_vertex_ids)
```


### remove_macro_edge_from_background_mesh_edge

```cpp
protected void remove_macro_edge_from_background_mesh_edge(const MeshEdge & macro_edge, index_t background_mesh_edge_id)
```


### remove_macro_edge_from_background_mesh_vertex

```cpp
protected void remove_macro_edge_from_background_mesh_vertex(const MeshEdge & macro_edge, index_t background_mesh_vertex_id)
```


### clean_background_mesh_attributes

```cpp
protected void clean_background_mesh_attributes(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager)
```




