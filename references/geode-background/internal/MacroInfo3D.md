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

# class MacroInfo3D


```cpp
Inherits from MacroInfo<3>
```



## Functions

### ~MacroInfo3D

```cpp
public void ~MacroInfo3D()
```


### macro_facets

```cpp
public const std::vector<MeshPolygon> & macro_facets(index_t background_solid_facet)
```


### incident_macro_facets

```cpp
public const std::vector<MeshPolygon> & incident_macro_facets(index_t background_solid_vertex)
```


### edge_configuration

```cpp
public EdgeMacroInfoConfig edge_configuration(index_t edge_id, const BackgroundSolid & solid)
```


### clean_background_solid_attributes

```cpp
public void clean_background_solid_attributes(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager, AttributeManager & mesh_facet_attribute_manager, AttributeManager & mesh_tetrahedron_attribute_manager)
```


### add_macro_facet_to_background_solid_facet

```cpp
public void add_macro_facet_to_background_solid_facet(const MeshPolygon & macro_facet, index_t background_solid_facet_id, MacroInfo3DKey )
```


### add_macro_facet_to_background_solid_vertices

```cpp
public void add_macro_facet_to_background_solid_vertices(const MeshPolygon & macro_facet, Span background_solid_vertex_ids, MacroInfo3DKey )
```


### remove_macro_facet_from_background_solid_facet

```cpp
public void remove_macro_facet_from_background_solid_facet(const MeshPolygon & macro_facet, index_t background_solid_facet_id, MacroInfo3DKey )
```


### remove_macro_facet_from_background_solid_vertices

```cpp
public void remove_macro_facet_from_background_solid_vertices(const MeshPolygon & macro_facet, Span background_solid_vertex_ids, MacroInfo3DKey )
```


### MacroInfo3D

```cpp
protected void MacroInfo3D()
```


### MacroInfo3D

```cpp
protected void MacroInfo3D(MacroInfo3D && other)
```


### operator=

```cpp
protected MacroInfo3D & operator=(MacroInfo3D && other)
```


### initialize_macro_info_solid_data_base

```cpp
protected void initialize_macro_info_solid_data_base(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager, AttributeManager & mesh_facet_attribute_manager, AttributeManager & mesh_tetrahedron_attribute_manager)
```


### edge_incident_macro_facets

```cpp
protected flat_hash_map edge_incident_macro_facets(const std::array<index_t, 2> & edge_vertices, const BackgroundSolid & background_solid)
```


### edge_has_incident_macro_facet

```cpp
protected bool edge_has_incident_macro_facet(index_t tetrahedron_id, const std::array<index_t, 2> & edge_vertices, const BackgroundSolid & background_solid)
```




