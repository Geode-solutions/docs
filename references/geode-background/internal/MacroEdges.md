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

# class MacroEdges


## Functions

### ~MacroEdges

```cpp
public void ~MacroEdges()
```


### macro_edges

```cpp
public const std::vector<MeshEdge> & macro_edges(index_t background_mesh_edge)
```


### incident_macro_edges

```cpp
public const std::vector<MeshEdge> & incident_macro_edges(index_t background_mesh_vertex)
```


### edge_vertices

```cpp
public const std::array<index_t, 2> & edge_vertices(index_t edge_id)
```

### add_macro_edge_to_background_mesh_edge

```cpp
public void add_macro_edge_to_background_mesh_edge(const MeshEdge & macro_edge, index_t background_mesh_edge_id, MacroEdgesKey )
```


### add_macro_edge_to_background_mesh_vertices

```cpp
public void add_macro_edge_to_background_mesh_vertices(const MeshEdge & macro_edge, Span background_mesh_vertex_ids, MacroEdgesKey )
```


### remove_macro_edge_from_background_mesh_edge

```cpp
public void remove_macro_edge_from_background_mesh_edge(const MeshEdge & macro_edge, index_t background_mesh_edge_id, MacroEdgesKey )
```


### remove_macro_edge_from_background_mesh_vertex

```cpp
public void remove_macro_edge_from_background_mesh_vertex(const MeshEdge & macro_edge, index_t background_mesh_vertex_id, MacroEdgesKey )
```


### MacroEdges

```cpp
protected void MacroEdges()
```


### MacroEdges

```cpp
protected void MacroEdges(MacroEdges && other)
```


### operator=

```cpp
protected MacroEdges & operator=(MacroEdges && other)
```


### initialize_macro_edges_data_base

```cpp
protected void initialize_macro_edges_data_base(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager)
```


### clean_macro_edges_data_base

```cpp
protected void clean_macro_edges_data_base(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager)
```




