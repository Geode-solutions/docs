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

# class MacroInfoBuilder2D


```cpp
Inherits from MacroInfoBuilder<2>
```



## Functions

### ~MacroInfoBuilder2D

```cpp
public void ~MacroInfoBuilder2D()
```


### add_macro_edge_info

```cpp
public void add_macro_edge_info(const uuid & component_uuid, index_t macro_edge_id, Span background_surface_edge_ids)
```


### add_macro_edge_info_on_vertex

```cpp
public void add_macro_edge_info_on_vertex(const uuid & component_uuid, index_t macro_edge_id, index_t background_surface_vertex_id)
```


### remove_macro_edge_info_on_edge

```cpp
public void remove_macro_edge_info_on_edge(const uuid & component_uuid, index_t macro_edge_id, index_t background_surface_edge_id)
```


### remove_macro_edge_info_on_vertex

```cpp
public void remove_macro_edge_info_on_vertex(const uuid & component_uuid, index_t macro_edge_id, index_t background_surface_vertex_id)
```


### update_information

```cpp
public void update_information(const TriangulatedSurfaceModifier2D::SplitTriangleInfo & split_info)
```


### update_information

```cpp
public void update_information(const TriangulatedSurfaceModifier2D::SplitPolygonEdgeInfo & split_info)
```


### update_information

```cpp
public void update_information(const TriangulatedSurfaceModifier2D::CollapseEdgeInfo & collapse_info)
```


### update_edges

```cpp
public void update_edges(Span edges)
```


### update_edges

```cpp
public void update_edges(Span edges)
```


### MacroInfoBuilder2D

```cpp
protected void MacroInfoBuilder2D(BackgroundSurface & background)
```




