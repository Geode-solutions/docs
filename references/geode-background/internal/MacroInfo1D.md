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

# class MacroInfo1D


```cpp
Inherits from MacroInfo
```



## Functions

### ~MacroInfo1D

```cpp
public void ~MacroInfo1D()
```


### MacroInfo1D

```cpp
protected void MacroInfo1D()
```


### MacroInfo1D

```cpp
protected void MacroInfo1D(MacroInfo1D && other)
```


### initialize_macro_info_line_data_base

```cpp
protected void initialize_macro_info_line_data_base(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_element_attribute_manager)
```


### clean_background_line_data_base

```cpp
protected void clean_background_line_data_base(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_element_attribute_manager)
```




