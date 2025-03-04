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
Inherits from MacroInfoBuilder, MacroEdgesBuilder
```



## Functions

### ~MacroInfoBuilder3D

```cpp
public void ~MacroInfoBuilder3D()
```


### add_macro_facet_info

```cpp
public void add_macro_facet_info(const MeshPolygon & macro_facet, Span background_solid_facets_id)
```


### add_macro_facet_info_on_vertex

```cpp
public void add_macro_facet_info_on_vertex(const MeshPolygon & macro_facet, index_t background_solid_vertex_id)
```


### remove_macro_facet_info

```cpp
public void remove_macro_facet_info(const MeshPolygon & macro_facet, index_t background_solid_facet_id)
```


### update_information

```cpp
public void update_information(const class TetrahedralSolidModifier::SplitInfo & split_info)
```


### update_information

```cpp
public void update_information(const class TetrahedralSolidModifier::SplitEdgeInfo & split_info)
```


### update_information

```cpp
public void update_information(const class TetrahedralSolidModifier::CollapseEdgeInfo & collapse_info)
```


### update_vertex

```cpp
public void update_vertex(const VertexMultiMapping & mapping)
```


### update_facet

```cpp
public void update_facet(const FacetMultiMapping & mapping)
```


### update_facets

```cpp
public void update_facets(Span mappings)
```


### update_facet

```cpp
public void update_facet(const FacetMapping & mapping)
```


### update_facets

```cpp
public void update_facets(Span mappings)
```


### MacroInfoBuilder3D

```cpp
protected void MacroInfoBuilder3D(BackgroundSolid & background)
```




