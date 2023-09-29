# class BRepTopologyRebuilder

```cpp
Defined at ../include/geode/conversion/model/detail/brep_topology_rebuilder.h#29
```

 Class for rebuilding all the brep components topology after adding some component mesh elements to the model topology.



## Functions

### BRepTopologyRebuilder

```cpp
public void BRepTopologyRebuilder(const BRepTopologyRebuilder & )
```

```cpp
Defined at ../include/geode/conversion/model/detail/brep_topology_rebuilder.h#31
```

### operator=

```cpp
public BRepTopologyRebuilder & operator=(const BRepTopologyRebuilder & )
```

```cpp
Defined at ../include/geode/conversion/model/detail/brep_topology_rebuilder.h#31
```

### BRepTopologyRebuilder

```cpp
public void BRepTopologyRebuilder(const BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/brep_topology_rebuilder.cpp#681
```

### ~BRepTopologyRebuilder

```cpp
public void ~BRepTopologyRebuilder()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/brep_topology_rebuilder.cpp#686
```

### add_block_facets_to_topology

```cpp
public void add_block_facets_to_topology(const Block3D & block, vector facet_ids)
```

### rebuild

```cpp
public tuple rebuild()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/brep_topology_rebuilder.cpp#694
```

### add_block_facets_to_topology

```cpp
public void add_block_facets_to_topology(const Block3D & block, int facet_ids)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/brep_topology_rebuilder.cpp#688
```



