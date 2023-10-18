# class MacroInfo3D


```cpp
Inherits from MacroInfo<3>
```



## Records

Impl



## Functions

### ~MacroInfo3D

```cpp
public void ~MacroInfo3D()
```


### component_facets

```cpp
public const int & component_facets(index_t background_solid_facet)
```


### incident_component_facets

```cpp
public const int & incident_component_facets(index_t background_solid_vertex)
```


### component_blocks

```cpp
public const int & component_blocks(index_t background_solid_tetrahedron)
```


### is_facet_part_of_component_elements

```cpp
public bool is_facet_part_of_component_elements(index_t background_solid_facet, const uuid & mesh_component_id)
```


### is_tetrahedron_part_of_block

```cpp
public bool is_tetrahedron_part_of_block(index_t tetrahedron_id, const uuid & block_id)
```


### edge_configuration

```cpp
public EdgeMacroInfoConfig edge_configuration(index_t edge_id, const BackgroundSolid & solid)
```


### clean_background_solid_attributes

```cpp
public void clean_background_solid_attributes(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager, AttributeManager & mesh_facet_attribute_manager, AttributeManager & mesh_tetrahedron_attribute_manager)
```


### add_component_vertex_to_background_solid_vertex

```cpp
public void add_component_vertex_to_background_solid_vertex(const uuid & mesh_id, index_t vertex_id, index_t background_solid_vertex_id, MacroInfo3DKey )
```


### add_component_edge_to_background_solid_edge

```cpp
public void add_component_edge_to_background_solid_edge(const uuid & mesh_id, index_t edge_id, index_t background_solid_edge_id, MacroInfo3DKey )
```


### add_component_edge_to_background_solid_vertices

```cpp
public void add_component_edge_to_background_solid_vertices(const uuid & mesh_id, index_t edge_id, Span background_solid_vertex_ids, MacroInfo3DKey )
```


### remove_component_edge_to_background_solid_edge

```cpp
public void remove_component_edge_to_background_solid_edge(const uuid & mesh_id, index_t edge_id, index_t background_solid_edge_id, MacroInfo3DKey )
```


### remove_component_edge_to_background_solid_vertex

```cpp
public void remove_component_edge_to_background_solid_vertex(const uuid & mesh_id, index_t edge_id, index_t background_solid_vertex_id, MacroInfo3DKey )
```


### add_component_facet_to_background_solid_facet

```cpp
public void add_component_facet_to_background_solid_facet(const uuid & mesh_id, index_t facet_id, index_t background_solid_facet_id, MacroInfo3DKey )
```


### add_component_facet_to_background_solid_vertices

```cpp
public void add_component_facet_to_background_solid_vertices(const uuid & mesh_id, index_t facet_id, Span background_solid_vertex_ids, MacroInfo3DKey )
```


### initialize_block_info_database

```cpp
public void initialize_block_info_database(AttributeManager & mesh_tetrahedron_attribute_manager, MacroInfo3DKey )
```


### add_block_to_background_solid_tetrahedron

```cpp
public void add_block_to_background_solid_tetrahedron(const uuid & block_id, index_t tetrahedron_id, MacroInfo3DKey )
```


### reset_all_blocks_of_background_solid_tetrahedra

```cpp
public void reset_all_blocks_of_background_solid_tetrahedra(index_t nb_tetrahedra, MacroInfo3DKey )
```


### MacroInfo3D

```cpp
protected void MacroInfo3D()
```


### MacroInfo3D

```cpp
protected void MacroInfo3D(MacroInfo3D && other)
```


### initialize_macro_info_3d_data_base

```cpp
protected void initialize_macro_info_3d_data_base(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_facet_attribute_manager, AttributeManager & mesh_tetrahedron_attribute_manager)
```


### edge_incident_component_facets

```cpp
protected int edge_incident_component_facets(const std::array<index_t, 2> & edge_vertices, const BackgroundSolid & background_solid)
```


### edge_has_incident_component_facet

```cpp
protected bool edge_has_incident_component_facet(index_t tetrahedron_id, const std::array<index_t, 2> & edge_vertices, const BackgroundSolid & background_solid)
```




