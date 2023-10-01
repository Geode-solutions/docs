# class BRepTopologyInspector

```cpp
Defined at ../include/geode/inspector/topology/brep_topology.h#41
```

 Class for inspecting the topology of a BRep model corners



## Functions

### BRepTopologyInspector

```cpp
public void BRepTopologyInspector(const BRepTopologyInspector & )
```

```cpp
Defined at ../include/geode/inspector/topology/brep_topology.h#43
```

### operator=

```cpp
public BRepTopologyInspector & operator=(const BRepTopologyInspector & )
```

```cpp
Defined at ../include/geode/inspector/topology/brep_topology.h#43
```

### BRepTopologyInspector

```cpp
public void BRepTopologyInspector(const BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#618
```

### BRepTopologyInspector

```cpp
public void BRepTopologyInspector(const BRep & brep, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#623
```

### ~BRepTopologyInspector

```cpp
public void ~BRepTopologyInspector()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#629
```

### brep_topology_is_valid

```cpp
public bool brep_topology_is_valid()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#631
```

 Checks if the brep is topologically valid through the unique vertices.

### brep_meshed_components_are_linked_to_unique_vertices

```cpp
public bool brep_meshed_components_are_linked_to_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#636
```

### brep_unique_vertices_are_linked_to_a_component_vertex

```cpp
public bool brep_unique_vertices_are_linked_to_a_component_vertex()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#642
```

### nb_corners_not_linked_to_a_unique_vertex

```cpp
public index_t nb_corners_not_linked_to_a_unique_vertex()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#648
```

### nb_lines_meshed_but_not_linked_to_unique_vertices

```cpp
public index_t nb_lines_meshed_but_not_linked_to_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#654
```

### nb_surfaces_meshed_but_not_linked_to_unique_vertices

```cpp
public index_t nb_surfaces_meshed_but_not_linked_to_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#660
```

### nb_blocks_meshed_but_not_linked_to_unique_vertices

```cpp
public index_t nb_blocks_meshed_but_not_linked_to_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#666
```

### nb_unique_vertices_not_linked_to_a_component_vertex

```cpp
public index_t nb_unique_vertices_not_linked_to_a_component_vertex()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#672
```

### component_vertices_not_linked_to_a_unique_vertex

```cpp
public vector component_vertices_not_linked_to_a_unique_vertex()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#678
```

### unique_vertices_not_linked_to_a_component_vertex

```cpp
public vector unique_vertices_not_linked_to_a_component_vertex()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#684
```

### invalid_components_topology_unique_vertices

```cpp
public vector invalid_components_topology_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#690
```

### multiple_corners_unique_vertices

```cpp
public vector multiple_corners_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#697
```

### multiple_internals_corner_vertices

```cpp
public vector multiple_internals_corner_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#703
```

### not_internal_nor_boundary_corner_vertices

```cpp
public vector not_internal_nor_boundary_corner_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#709
```

### line_corners_without_boundary_status

```cpp
public vector line_corners_without_boundary_status()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#715
```

### part_of_not_boundary_nor_internal_line_unique_vertices

```cpp
public vector part_of_not_boundary_nor_internal_line_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#721
```

### part_of_line_with_invalid_internal_topology_unique_vertices

```cpp
public vector part_of_line_with_invalid_internal_topology_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#727
```

### part_of_invalid_unique_line_unique_vertices

```cpp
public vector part_of_invalid_unique_line_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#734
```

### part_of_lines_but_not_corner_unique_vertices

```cpp
public vector part_of_lines_but_not_corner_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#741
```

### part_of_not_boundary_nor_internal_surface_unique_vertices

```cpp
public vector part_of_not_boundary_nor_internal_surface_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#748
```

### part_of_surface_with_invalid_internal_topology_unique_vertices

```cpp
public vector part_of_surface_with_invalid_internal_topology_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#755
```

### part_of_invalid_unique_surface_unique_vertices

```cpp
public vector part_of_invalid_unique_surface_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#762
```

### part_of_invalid_multiple_surfaces_unique_vertices

```cpp
public vector part_of_invalid_multiple_surfaces_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#769
```

### part_of_line_and_not_on_surface_border_unique_vertices

```cpp
public vector part_of_line_and_not_on_surface_border_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#775
```

### part_of_invalid_blocks_unique_vertices

```cpp
public vector part_of_invalid_blocks_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/brep_topology.cpp#781
```



