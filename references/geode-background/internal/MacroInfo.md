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


## Functions

### ~MacroInfo

```cpp
public void ~MacroInfo()
```


### macro_vertices

```cpp
public const std::vector<MeshVertex> & macro_vertices(index_t background_mesh_vertex)
```


### macro_elements

```cpp
public const std::vector<MeshElement> & macro_elements(index_t background_mesh_element)
```


### is_macro_info_mandatory

```cpp
public bool is_macro_info_mandatory(const uuid & mesh_id)
```


### add_macro_vertex_to_background_mesh_vertex

```cpp
public void add_macro_vertex_to_background_mesh_vertex(const MeshVertex & macro_vertex, index_t background_mesh_vertex_id, MacroInfoKey )
```


### remove_macro_vertex_from_background_mesh_vertex

```cpp
public void remove_macro_vertex_from_background_mesh_vertex(const MeshVertex & macro_vertex, index_t background_mesh_vertex_id, MacroInfoKey )
```


### add_macro_element_to_background_mesh_element

```cpp
public void add_macro_element_to_background_mesh_element(const MeshElement & macro_element, index_t background_mesh_element_id, MacroInfoKey )
```


### remove_macro_element_from_background_mesh_element

```cpp
public void remove_macro_element_from_background_mesh_element(const MeshElement & macro_element, index_t background_mesh_element_id, MacroInfoKey )
```


### set_macro_info_mandatory

```cpp
public void set_macro_info_mandatory(const uuid & mesh_id, MacroInfoKey )
```


### MacroInfo

```cpp
protected void MacroInfo()
```


### MacroInfo

```cpp
protected void MacroInfo(MacroInfo && other)
```


### operator=

```cpp
protected MacroInfo & operator=(MacroInfo && other)
```


### initialize_macro_info_data_base

```cpp
protected void initialize_macro_info_data_base(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_element_attribute_manager)
```


### clean_macro_info_data_base

```cpp
protected void clean_macro_info_data_base(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_element_attribute_manager)
```




