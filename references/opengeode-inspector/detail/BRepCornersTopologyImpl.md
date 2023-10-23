# class BRepCornersTopologyImpl

## Functions

### BRepCornersTopologyImpl

```cpp
public void BRepCornersTopologyImpl(const BRep & brep)
```

### BRepCornersTopologyImpl

```cpp
public void BRepCornersTopologyImpl(const BRep & brep, bool verbose)
```

### brep_corner_topology_is_valid

```cpp
public bool brep_corner_topology_is_valid(index_t unique_vertex_index)
```

Checks if the brep unique vertices are valid corners, i.e. corners that verify: Each unique_vertex can only be associated to one corner. Each corner can only be internal to one object (surface or block). Each corner is a boundary of every line it is associated to.

### unique_vertex_has_multiple_corners

```cpp
public bool unique_vertex_has_multiple_corners(index_t unique_vertex_index)
```

### corner_has_multiple_embeddings

```cpp
public bool corner_has_multiple_embeddings(index_t unique_vertex_index)
```

### corner_is_not_internal_nor_boundary

```cpp
public bool corner_is_not_internal_nor_boundary(index_t unique_vertex_index)
```

### corner_is_part_of_line_but_not_boundary

```cpp
public bool corner_is_part_of_line_but_not_boundary(index_t unique_vertex_index)
```
