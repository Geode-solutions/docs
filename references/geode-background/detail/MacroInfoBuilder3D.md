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

# class MacroInfoBuilder3D


```cpp
Inherits from MacroInfoBuilder<3>
```



## Functions

### ~MacroInfoBuilder3D

```cpp
public void ~MacroInfoBuilder3D()
```


### add_macro_edge_info

```cpp
public void add_macro_edge_info(const uuid & component_uuid, index_t macro_edge_id, Span background_solid_edge_ids)
```


### add_macro_edge_info_on_vertex

```cpp
public void add_macro_edge_info_on_vertex(const uuid & component_uuid, index_t macro_edge_id, index_t background_solid_vertex_id)
```


### remove_macro_edge_info_on_edge

```cpp
public void remove_macro_edge_info_on_edge(const uuid & component_uuid, index_t macro_edge_id, index_t background_solid_edge_id)
```


### remove_macro_edge_info_on_vertex

```cpp
public void remove_macro_edge_info_on_vertex(const uuid & component_uuid, index_t macro_edge_id, index_t background_solid_vertex_id)
```


### add_macro_facet_info

```cpp
public void add_macro_facet_info(const uuid & surface_uuid, geode::index_t macro_polygon_id, Span background_solid_facets_id)
```


### add_macro_facet_info_on_vertex

```cpp
public void add_macro_facet_info_on_vertex(const uuid & component_uuid, index_t macro_facet_id, index_t background_solid_vertex_id)
```


### initialize_block_info_database

```cpp
public void initialize_block_info_database()
```


### add_block_to_background_tetrahedron

```cpp
public void add_block_to_background_tetrahedron(const uuid & block_id, index_t tetrahedron_id)
```


### reset_all_blocks_of_background_tetrahedra

```cpp
public void reset_all_blocks_of_background_tetrahedra()
```


### update_information

```cpp
public void update_information(const class TetrahedralSolidModifier::SolidSplitInfo & split_info)
```


### update_information

```cpp
public void update_information(const class TetrahedralSolidModifier::SolidSplitEdgeInfo & split_info)
```


### update_information

```cpp
public void update_information(const class TetrahedralSolidModifier::SolidCollapseEdgeInfo & collapse_info)
```


### update_vertex

```cpp
public void update_vertex(const VertexMultiMapping & mapping)
```


### update_vertices

```cpp
public void update_vertices(absl::Span<const VertexMultiMapping> mappings)
```


### update_edge

```cpp
public void update_edge(const EdgeMapping & mapping)
```


### update_edges

```cpp
public void update_edges(absl::Span<const EdgeMapping> mappings)
```


### update_edge

```cpp
public void update_edge(const EdgeMultiMapping & mapping)
```


### update_edges

```cpp
public void update_edges(absl::Span<const EdgeMultiMapping> mappings)
```


### update_facet

```cpp
public void update_facet(const FacetMultiMapping & mapping)
```


### update_facets

```cpp
public void update_facets(absl::Span<const FacetMultiMapping> mappings)
```


### update_facet

```cpp
public void update_facet(const FacetMapping & mapping)
```


### update_facets

```cpp
public void update_facets(absl::Span<const FacetMapping> mappings)
```


### update_tetrahedron

```cpp
public void update_tetrahedron(const TetrahedronMapping & tetrahedron)
```


### update_tetrahedra

```cpp
public void update_tetrahedra(absl::Span<const TetrahedronMapping> tetrahedra)
```


### MacroInfoBuilder3D

```cpp
protected void MacroInfoBuilder3D(BackgroundSolid & background)
```




