# class SectionLinesTopologyImpl

```cpp
Defined at ../include/geode/inspector/topology/private/section_lines_topology_impl.h#41
```

 Class for inspecting the topology of a Section model lines through their unique vertices



## Functions

### SectionLinesTopologyImpl

```cpp
public void SectionLinesTopologyImpl(const Section & section)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_lines_topology_impl.cpp#48
```

### SectionLinesTopologyImpl

```cpp
public void SectionLinesTopologyImpl(const Section & section, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_lines_topology_impl.cpp#43
```

### section_vertex_lines_topology_is_valid

```cpp
public bool section_vertex_lines_topology_is_valid(index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_lines_topology_impl.cpp#54
```

 Checks if the section unique vertices are parts of valid lines, i.e. verify: Each line is either internal or boundary. Each internal line is internal to only one object and is not boundary. If the vertex is part of only one line, the vertex is part of no more than 2 surfaces, and the line is either internal to a surface (and the vertex is in one and only one surface) or a boundary of all the surfaces the vertex is in. If the vertex is part of multiple lines, it is also a corner.

### vertex_is_part_of_not_boundary_nor_internal_line

```cpp
public bool vertex_is_part_of_not_boundary_nor_internal_line(const index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_lines_topology_impl.cpp#75
```

### vertex_is_part_of_line_with_invalid_internal_topology

```cpp
public bool vertex_is_part_of_line_with_invalid_internal_topology(const index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_lines_topology_impl.cpp#98
```

### vertex_is_part_of_invalid_unique_line

```cpp
public bool vertex_is_part_of_invalid_unique_line(index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_lines_topology_impl.cpp#162
```

### vertex_has_lines_but_is_not_corner

```cpp
public bool vertex_has_lines_but_is_not_corner(index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_lines_topology_impl.cpp#233
```



