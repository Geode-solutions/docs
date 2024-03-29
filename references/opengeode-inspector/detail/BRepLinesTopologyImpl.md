# class BRepLinesTopologyImpl

Class for inspecting the topology of a BRep model lines through their unique vertices

## Functions

### BRepLinesTopologyImpl

```cpp
public void BRepLinesTopologyImpl(const BRep & brep)
```

### BRepLinesTopologyImpl

```cpp
public void BRepLinesTopologyImpl(const BRep & brep, bool verbose)
```

### brep_vertex_lines_topology_is_valid

```cpp
public bool brep_vertex_lines_topology_is_valid(index_t unique_vertex_index)
```

Checks if the brep unique vertices are parts of valid lines, i.e. verify: Each line is either internal or boundary. If a line is internal to an object, it cannot be incident to it. If the vertex is part of only one line, the line is either internal to a surface, internal to a block, or a boundary of multiple surfaces. If the vertex is part of multiple lines, it is also a corner.

### vertex_is_part_of_not_boundary_nor_internal_line

```cpp
public bool vertex_is_part_of_not_boundary_nor_internal_line(const index_t unique_vertex_index)
```

### vertex_is_part_of_line_with_invalid_internal_topology

```cpp
public bool vertex_is_part_of_line_with_invalid_internal_topology(const index_t unique_vertex_index)
```

### vertex_is_part_of_invalid_unique_line

```cpp
public bool vertex_is_part_of_invalid_unique_line(index_t unique_vertex_index)
```

### vertex_has_lines_but_is_not_corner

```cpp
public bool vertex_has_lines_but_is_not_corner(index_t unique_vertex_index)
```
