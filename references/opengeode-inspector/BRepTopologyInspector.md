# class BRepTopologyInspector


 Class for inspecting the topology of a BRep model corners



## Functions

### BRepTopologyInspector

```cpp
public void BRepTopologyInspector(const BRepTopologyInspector & )
```


### operator=

```cpp
public BRepTopologyInspector & operator=(const BRepTopologyInspector & )
```


### BRepTopologyInspector

```cpp
public void BRepTopologyInspector(const BRep & brep)
```


### BRepTopologyInspector

```cpp
public void BRepTopologyInspector(const BRep & brep, _Bool verbose)
```


### ~BRepTopologyInspector

```cpp
public void ~BRepTopologyInspector()
```


### brep_topology_is_valid

```cpp
public _Bool brep_topology_is_valid()
```


 Checks if the brep is topologically valid through the unique vertices.

### brep_meshed_components_are_linked_to_a_unique_vertex

```cpp
public _Bool brep_meshed_components_are_linked_to_a_unique_vertex()
```


### brep_unique_vertices_are_linked_to_a_component_vertex

```cpp
public _Bool brep_unique_vertices_are_linked_to_a_component_vertex()
```


### nb_corners_not_linked_to_a_unique_vertex

```cpp
public index_t nb_corners_not_linked_to_a_unique_vertex()
```


### nb_lines_meshed_but_not_linked_to_a_unique_vertex

```cpp
public index_t nb_lines_meshed_but_not_linked_to_a_unique_vertex()
```


### nb_surfaces_meshed_but_not_linked_to_a_unique_vertex

```cpp
public index_t nb_surfaces_meshed_but_not_linked_to_a_unique_vertex()
```


### nb_blocks_meshed_but_not_linked_to_a_unique_vertex

```cpp
public index_t nb_blocks_meshed_but_not_linked_to_a_unique_vertex()
```


### nb_unique_vertices_not_linked_to_a_component_vertex

```cpp
public index_t nb_unique_vertices_not_linked_to_a_component_vertex()
```


### unique_vertices_not_linked_to_a_component_vertex

```cpp
public vector unique_vertices_not_linked_to_a_component_vertex()
```


### invalid_components_topology_unique_vertices

```cpp
public vector invalid_components_topology_unique_vertices()
```


### multiple_corners_unique_vertices

```cpp
public vector multiple_corners_unique_vertices()
```


### multiple_internals_corner_vertices

```cpp
public vector multiple_internals_corner_vertices()
```


### not_internal_nor_boundary_corner_vertices

```cpp
public vector not_internal_nor_boundary_corner_vertices()
```


### line_corners_without_boundary_status

```cpp
public vector line_corners_without_boundary_status()
```


### part_of_not_boundary_nor_internal_line_unique_vertices

```cpp
public vector part_of_not_boundary_nor_internal_line_unique_vertices()
```


### part_of_line_with_invalid_internal_topology_unique_vertices

```cpp
public vector part_of_line_with_invalid_internal_topology_unique_vertices()
```


### part_of_invalid_unique_line_unique_vertices

```cpp
public vector part_of_invalid_unique_line_unique_vertices()
```


### part_of_lines_but_not_corner_unique_vertices

```cpp
public vector part_of_lines_but_not_corner_unique_vertices()
```


### part_of_not_boundary_nor_internal_surface_unique_vertices

```cpp
public vector part_of_not_boundary_nor_internal_surface_unique_vertices()
```


### part_of_surface_with_invalid_internal_topology_unique_vertices

```cpp
public vector part_of_surface_with_invalid_internal_topology_unique_vertices()
```


### part_of_invalid_unique_surface_unique_vertices

```cpp
public vector part_of_invalid_unique_surface_unique_vertices()
```


### part_of_invalid_multiple_surfaces_unique_vertices

```cpp
public vector part_of_invalid_multiple_surfaces_unique_vertices()
```


### part_of_line_and_not_on_surface_border_unique_vertices

```cpp
public vector part_of_line_and_not_on_surface_border_unique_vertices()
```


### part_of_invalid_blocks_unique_vertices

```cpp
public vector part_of_invalid_blocks_unique_vertices()
```




