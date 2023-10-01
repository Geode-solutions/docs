# class SectionSurfacesTopologyImpl

```cpp
Defined at ../include/geode/inspector/topology/private/section_surfaces_topology_impl.h#41
```

 Class for inspecting the topology of a Section model surfaces through its unique vertices



## Functions

### SectionSurfacesTopologyImpl

```cpp
public void SectionSurfacesTopologyImpl(const Section & section)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_surfaces_topology_impl.cpp#48
```

### SectionSurfacesTopologyImpl

```cpp
public void SectionSurfacesTopologyImpl(const Section & section, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_surfaces_topology_impl.cpp#43
```

### section_vertex_surfaces_topology_is_valid

```cpp
public bool section_vertex_surfaces_topology_is_valid(index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_surfaces_topology_impl.cpp#54
```

 Checks if the section unique vertices are parts of valid surfaces, i.e. verify: If a unique vertex is part of two surfaces, it is part of a least one line which is boundary of the two blocks.

### vertex_is_part_of_invalid_surfaces_topology

```cpp
public bool vertex_is_part_of_invalid_surfaces_topology(index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_surfaces_topology_impl.cpp#75
```

### vertex_is_part_of_line_and_not_on_surface_border

```cpp
public bool vertex_is_part_of_line_and_not_on_surface_border(index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_surfaces_topology_impl.cpp#108
```



