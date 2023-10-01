# class BRepBlocksTopologyImpl

```cpp
Defined at ../include/geode/inspector/topology/private/brep_blocks_topology_impl.h#41
```

 Class for inspecting the topology of a BRep model blocks through their unique vertices



## Functions

### BRepBlocksTopologyImpl

```cpp
public void BRepBlocksTopologyImpl(const BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/brep_blocks_topology_impl.cpp#71
```

### BRepBlocksTopologyImpl

```cpp
public void BRepBlocksTopologyImpl(const BRep & brep, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/brep_blocks_topology_impl.cpp#65
```

### brep_vertex_blocks_topology_is_valid

```cpp
public bool brep_vertex_blocks_topology_is_valid(index_t unique_vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/inspector/topology/private/brep_blocks_topology_impl.cpp#76
```

 Checks if the brep unique vertices are parts of valid blocks, i.e. verify: If the vertex is part of multiple blocks, either it is part of exactly 2 blocks (and at least one surface which is boundary to the 2 blocks), or it is part of more than to blocks (and it is either a corner, or not a corner but part of only one line).



