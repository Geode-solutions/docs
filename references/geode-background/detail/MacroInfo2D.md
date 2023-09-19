# class MacroInfo2D


```cpp
```cpp
Inherits from MacroInfo<2>
```
```



## Functions

### ~MacroInfo2D

```cpp
```cpp
public void ~MacroInfo2D()
```
```


### edge_configuration

```cpp
```cpp
public EdgeMacroInfoConfig edge_configuration(index_t edge_id, const BackgroundSurface & background_surface)
```
```


### add_component_vertex_to_background_surface_vertex

```cpp
```cpp
public void add_component_vertex_to_background_surface_vertex(const uuid & mesh_id, index_t vertex_id, index_t background_surface_vertex_id, MacroInfo2DKey )
```
```


### add_component_edge_to_background_surface_edge

```cpp
```cpp
public void add_component_edge_to_background_surface_edge(const uuid & mesh_id, index_t edge_id, index_t background_surface_edge_id, MacroInfo2DKey )
```
```


### add_component_edge_to_background_surface_vertices

```cpp
```cpp
public void add_component_edge_to_background_surface_vertices(const uuid & mesh_id, index_t edge_id, absl::Span<const index_t> background_surface_vertex_ids, MacroInfo2DKey )
```
```


### clean_background_surface_attributes

```cpp
```cpp
public void clean_background_surface_attributes(AttributeManager & mesh_vertex_attribute_manager, AttributeManager & mesh_edge_attribute_manager)
```
```


### MacroInfo2D

```cpp
```cpp
protected void MacroInfo2D()
```
```


### MacroInfo2D

```cpp
```cpp
protected void MacroInfo2D(MacroInfo2D && other)
```
```




