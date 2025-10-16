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

# class MacroInfoBuilder


## Functions

### MacroInfoBuilder

```cpp
public void MacroInfoBuilder(MacroInfoBuilder && )
```


### ~MacroInfoBuilder

```cpp
public void ~MacroInfoBuilder()
```


### add_macro_vertex_info

```cpp
public void add_macro_vertex_info(const MeshVertex & macro_vertex, index_t background_mesh_vertex_id)
```


### remove_macro_vertex_info

```cpp
public void remove_macro_vertex_info(const MeshVertex & macro_vertex, index_t background_mesh_vertex_id)
```


### add_macro_element_info

```cpp
public void add_macro_element_info(const MeshElement & macro_element, index_t background_mesh_element_id)
```


### remove_macro_element_info

```cpp
public void remove_macro_element_info(const MeshElement & macro_element, index_t background_mesh_element_id)
```


### update_vertex

```cpp
public void update_vertex(const VertexMultiMapping & mapping)
```


### update_vertices

```cpp
public void update_vertices(absl::Span<const VertexMultiMapping> mappings)
```


### update_element

```cpp
public void update_element(const ElementMapping & element)
```


### update_elements

```cpp
public void update_elements(absl::Span<const ElementMapping> elements)
```


### set_macro_info_mandatory

```cpp
public void set_macro_info_mandatory(const uuid & mesh_id)
```


### MacroInfoBuilder

```cpp
protected void MacroInfoBuilder(MacroInfo & macro_info)
```




