# class SectionCornersTopologyImpl

```cpp
Defined at ../include/geode/inspector/topology/private/section_corners_topology_impl.h#37
```

## Functions

### SectionCornersTopologyImpl

```cpp
public void SectionCornersTopologyImpl(const Section & section)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_corners_topology_impl.cpp#41
```

### SectionCornersTopologyImpl

```cpp
public void SectionCornersTopologyImpl(const Section & section, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_corners_topology_impl.cpp#36
```

### section_corner_topology_is_valid

```cpp
public bool section_corner_topology_is_valid(index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_corners_topology_impl.cpp#47
```

 Checks if the section unique vertices are valid corners, i.e. corners that verify: Each unique_vertex can only be associated to one corner. Each corner can only be internal to one object (surface or block). Each corner is a boundary of every line it is associated to.

### unique_vertex_has_multiple_corners

```cpp
public bool unique_vertex_has_multiple_corners(index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_corners_topology_impl.cpp#88
```

### corner_has_multiple_embeddings

```cpp
public bool corner_has_multiple_embeddings(index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_corners_topology_impl.cpp#108
```

### corner_is_not_internal_nor_boundary

```cpp
public bool corner_is_not_internal_nor_boundary(index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_corners_topology_impl.cpp#129
```

### corner_is_part_of_line_but_not_boundary

```cpp
public bool corner_is_part_of_line_but_not_boundary(index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/section_corners_topology_impl.cpp#151
```



