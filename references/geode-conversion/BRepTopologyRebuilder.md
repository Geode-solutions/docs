# class BRepTopologyRebuilder

Class for rebuilding all the brep components topology after adding some component mesh elements to the model topology. The block meshes and the unique vertices needs to be defined beforehand.

## Functions

### BRepTopologyRebuilder

```cpp
public void BRepTopologyRebuilder(const BRepTopologyRebuilder & )
```

### operator=

```cpp
public BRepTopologyRebuilder & operator=(const BRepTopologyRebuilder & )
```

### BRepTopologyRebuilder

```cpp
public void BRepTopologyRebuilder(const BRep & brep)
```

### ~BRepTopologyRebuilder

```cpp
public void ~BRepTopologyRebuilder()
```

### add_block_facets_to_topology

```cpp
public void add_block_facets_to_topology(const Block3D & block, vector facet_ids)
```

### rebuild

```cpp
public tuple rebuild()
```

### add_block_facets_to_topology

```cpp
public void add_block_facets_to_topology(const Block3D & block, int facet_ids)
```
