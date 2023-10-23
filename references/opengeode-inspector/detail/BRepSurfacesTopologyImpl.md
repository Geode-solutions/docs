# class BRepSurfacesTopologyImpl

Class for inspecting the topology of a BRep model surfaces through their unique vertices

## Functions

### BRepSurfacesTopologyImpl

```cpp
public void BRepSurfacesTopologyImpl(const BRep & brep)
```

### BRepSurfacesTopologyImpl

```cpp
public void BRepSurfacesTopologyImpl(const BRep & brep, bool verbose)
```

### brep_vertex_surfaces_topology_is_valid

```cpp
public bool brep_vertex_surfaces_topology_is_valid(index_t unique_vertex_index)
```

Checks if the brep unique vertices are parts of valid surfaces, i.e. verify: Each surface is either internal or boundary. Each internal surface is internal to only one object and is not boundary. If the vertex is part of only one surface, the vertex is part of no more than 2 blocks, and the surface is either internal to a block (and the vertex is in one and only one block) or a boundary of all the blocks the vertex is in. If the vertex is part of multiple surfaces, it is either part of only one line (and no corner, and the line is boundary to all the surfaces) or multiple lines (and all the lines are either internal or boundary to at least 2 of the surfaces the vertex is in).

### vertex_is_part_of_not_boundary_nor_internal_surface

```cpp
public bool vertex_is_part_of_not_boundary_nor_internal_surface(const index_t unique_vertex_index)
```

### vertex_is_part_of_surface_with_invalid_internal_topology

```cpp
public bool vertex_is_part_of_surface_with_invalid_internal_topology(const index_t unique_vertex_index)
```

### vertex_is_part_of_invalid_unique_surface

```cpp
public bool vertex_is_part_of_invalid_unique_surface(index_t unique_vertex_index)
```

### vertex_is_part_of_invalid_multiple_surfaces

```cpp
public bool vertex_is_part_of_invalid_multiple_surfaces(index_t unique_vertex_index)
```

### vertex_is_part_of_line_and_not_on_surface_border

```cpp
public bool vertex_is_part_of_line_and_not_on_surface_border(index_t unique_vertex_index)
```
