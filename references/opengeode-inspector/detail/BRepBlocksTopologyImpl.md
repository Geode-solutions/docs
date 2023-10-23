# class BRepBlocksTopologyImpl

Class for inspecting the topology of a BRep model blocks through their unique vertices

## Functions

### BRepBlocksTopologyImpl

```cpp
public void BRepBlocksTopologyImpl(const BRep & brep)
```

### BRepBlocksTopologyImpl

```cpp
public void BRepBlocksTopologyImpl(const BRep & brep, bool verbose)
```

### brep_vertex_blocks_topology_is_valid

```cpp
public bool brep_vertex_blocks_topology_is_valid(index_t unique_vertex_index)
```

Checks if the brep unique vertices are parts of valid blocks, i.e. verify: If the vertex is part of multiple blocks, either it is part of exactly 2 blocks (and at least one surface which is boundary to the 2 blocks), or it is part of more than to blocks (and it is either a corner, or not a corner but part of only one line).
