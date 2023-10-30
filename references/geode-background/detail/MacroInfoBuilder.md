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

### ~MacroInfoBuilder

```cpp
public void ~MacroInfoBuilder<>()
```


### add_macro_vertex_info

```cpp
public void add_macro_vertex_info(const uuid & component_uuid, index_t macro_vertex_id, index_t background_mesh_vertex_id)
```


### update_vertex

```cpp
public void update_vertex(const VertexMultiMapping & mapping)
```


### update_vertices

```cpp
public void update_vertices(absl::Span<const VertexMultiMapping> mappings)
```


### MacroInfoBuilder

```cpp
protected void MacroInfoBuilder<>(MacroInfo<dimension> & macro_info)
```




# class MacroInfoBuilder


# class MacroInfoBuilder


