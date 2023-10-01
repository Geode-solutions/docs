# class SectionTopologyInspector

```cpp
Defined at ../include/geode/inspector/topology/section_topology.h#41
```

 Class for inspecting the topology of a Section model corners



## Functions

### SectionTopologyInspector

```cpp
public void SectionTopologyInspector(const SectionTopologyInspector & )
```

```cpp
Defined at ../include/geode/inspector/topology/section_topology.h#43
```

### operator=

```cpp
public SectionTopologyInspector & operator=(const SectionTopologyInspector & )
```

```cpp
Defined at ../include/geode/inspector/topology/section_topology.h#43
```

### SectionTopologyInspector

```cpp
public void SectionTopologyInspector(const Section & section)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#505
```

### SectionTopologyInspector

```cpp
public void SectionTopologyInspector(const Section & section, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#510
```

### ~SectionTopologyInspector

```cpp
public void ~SectionTopologyInspector()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#516
```

### section_topology_is_valid

```cpp
public bool section_topology_is_valid()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#518
```

 Checks if the section is topologically valid through the unique vertices.

### section_meshed_components_are_linked_to_unique_vertices

```cpp
public bool section_meshed_components_are_linked_to_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#523
```

### section_unique_vertices_are_linked_to_a_component_vertex

```cpp
public bool section_unique_vertices_are_linked_to_a_component_vertex()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#529
```

### nb_corners_not_linked_to_a_unique_vertex

```cpp
public index_t nb_corners_not_linked_to_a_unique_vertex()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#536
```

### nb_lines_meshed_but_not_linked_to_unique_vertices

```cpp
public index_t nb_lines_meshed_but_not_linked_to_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#542
```

### nb_surfaces_meshed_but_not_linked_to_unique_vertices

```cpp
public index_t nb_surfaces_meshed_but_not_linked_to_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#548
```

### nb_unique_vertices_not_linked_to_a_component_vertex

```cpp
public index_t nb_unique_vertices_not_linked_to_a_component_vertex()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#554
```

### component_vertices_not_linked_to_a_unique_vertex

```cpp
public vector component_vertices_not_linked_to_a_unique_vertex()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#560
```

### unique_vertices_not_linked_to_a_component_vertex

```cpp
public vector unique_vertices_not_linked_to_a_component_vertex()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#566
```

### invalid_components_topology_unique_vertices

```cpp
public vector invalid_components_topology_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#572
```

### multiple_corners_unique_vertices

```cpp
public vector multiple_corners_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#579
```

### multiple_internals_corner_vertices

```cpp
public vector multiple_internals_corner_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#585
```

### not_internal_nor_boundary_corner_vertices

```cpp
public vector not_internal_nor_boundary_corner_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#591
```

### line_corners_without_boundary_status

```cpp
public vector line_corners_without_boundary_status()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#598
```

### part_of_not_boundary_nor_internal_line_unique_vertices

```cpp
public vector part_of_not_boundary_nor_internal_line_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#604
```

### part_of_line_with_invalid_internal_topology_unique_vertices

```cpp
public vector part_of_line_with_invalid_internal_topology_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#610
```

### part_of_invalid_unique_line_unique_vertices

```cpp
public vector part_of_invalid_unique_line_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#617
```

### part_of_lines_but_not_corner_unique_vertices

```cpp
public vector part_of_lines_but_not_corner_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#624
```

### part_of_invalid_surfaces_unique_vertices

```cpp
public vector part_of_invalid_surfaces_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#631
```

### part_of_line_and_not_on_surface_border_unique_vertices

```cpp
public vector part_of_line_and_not_on_surface_border_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/section_topology.cpp#638
```



