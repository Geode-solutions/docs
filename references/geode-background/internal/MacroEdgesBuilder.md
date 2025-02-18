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

# class MacroEdgesBuilder


## Functions

### MacroEdgesBuilder

```cpp
public void MacroEdgesBuilder(MacroEdgesBuilder && )
```


### ~MacroEdgesBuilder

```cpp
public void ~MacroEdgesBuilder()
```


### add_macro_edge_info

```cpp
public void add_macro_edge_info(const MeshEdge & macro_edge, Span background_surface_edge_ids)
```


### add_macro_edge_info_on_vertex

```cpp
public void add_macro_edge_info_on_vertex(const MeshEdge & macro_edge, index_t background_surface_vertex_id)
```


### remove_macro_edge_info

```cpp
public void remove_macro_edge_info(const MeshEdge & macro_edge, index_t background_surface_edge_id)
```


### remove_macro_edge_info_on_edge

```cpp
public void remove_macro_edge_info_on_edge(const MeshEdge & macro_edge, index_t background_surface_edge_id)
```


### remove_macro_edge_info_on_vertex

```cpp
public void remove_macro_edge_info_on_vertex(const MeshEdge & macro_edge, index_t background_surface_vertex_id)
```


### update_edge_vertex

```cpp
public void update_edge_vertex(const VertexMultiMapping & mapping)
```


### update_edge_vertices

```cpp
public void update_edge_vertices(absl::Span<const VertexMultiMapping> mappings)
```


### update_edge

```cpp
public void update_edge(const EdgeMapping & edge)
```


### update_edges

```cpp
public void update_edges(absl::Span<const EdgeMapping> edges)
```


### update_edge

```cpp
public void update_edge(const EdgeMultiMapping & edge)
```


### update_edges

```cpp
public void update_edges(absl::Span<const EdgeMultiMapping> edges)
```


### MacroEdgesBuilder

```cpp
protected void MacroEdgesBuilder(MacroEdges & macro_edges)
```




