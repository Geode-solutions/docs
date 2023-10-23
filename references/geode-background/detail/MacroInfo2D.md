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
Inherits from MacroInfo<2>
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


### add_component_vertex_to_background_surface_vertex

```cpp
public void add_component_vertex_to_background_surface_vertex(const uuid & mesh_id, index_t vertex_id, index_t background_surface_vertex_id, MacroInfo2DKey )
```


### add_component_edge_to_background_surface_edge

```cpp
public void add_component_edge_to_background_surface_edge(const uuid & mesh_id, index_t edge_id, index_t background_surface_edge_id, MacroInfo2DKey )
```


### add_component_edge_to_background_surface_vertices

```cpp
public void add_component_edge_to_background_surface_vertices(const uuid & mesh_id, index_t edge_id, absl::Span<const index_t> background_surface_vertex_ids, MacroInfo2DKey )
```


### clean_background_surface_attributes

```cpp
public void clean_background_surface_attributes(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager)
```


### MacroInfo2D

```cpp
protected void MacroInfo2D()
```


### MacroInfo2D

```cpp
protected void MacroInfo2D(MacroInfo2D && other)
```




