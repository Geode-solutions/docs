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

# class MacroInfo2D


```cpp
Inherits from MacroInfo, MacroEdges
```



## Functions

### ~MacroInfo2D

```cpp
public void ~MacroInfo2D()
```


### edge_configuration

```cpp
public EdgeMacroInfoConfig edge_configuration(index_t edge_id, const BackgroundSurface & background_surface)
```


### MacroInfo2D

```cpp
protected void MacroInfo2D()
```


### MacroInfo2D

```cpp
protected void MacroInfo2D(MacroInfo2D && other)
```


### initialize_macro_info_surface_data_base

```cpp
protected void initialize_macro_info_surface_data_base(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager, AttributeManager & mesh_element_attribute_manager)
```


### clean_background_surface_data_base

```cpp
protected void clean_background_surface_data_base(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager, AttributeManager & mesh_element_attribute_manager)
```




