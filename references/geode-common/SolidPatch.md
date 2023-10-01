# struct SolidPatch

```cpp
Defined at ../include/geode/common/cutter/solid/solid_patch.h#26
```

## Members

```cpp
public Position position

```

```cpp
public index_t edge_id

```

```cpp
public index_t vertex_id

```



## Functions

### SolidPatch

```cpp
public void SolidPatch(const TetrahedralSolid3D & solid, index_t edge_in, Position position_in)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patch.cpp#12
```

### SolidPatch

```cpp
public void SolidPatch(index_t vertex_in)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patch.cpp#23
```

### SolidPatch

```cpp
public void SolidPatch()
```

```cpp
Defined at ../include/geode/common/cutter/solid/solid_patch.h#34
```

### is_vertex

```cpp
public bool is_vertex()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patch.cpp#25
```

### is_edge_vertex

```cpp
public bool is_edge_vertex()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patch.cpp#30
```

### is_edge

```cpp
public bool is_edge()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patch.cpp#35
```

### are_same_paths

```cpp
public bool are_same_paths(const SolidPatch & other)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patch.cpp#40
```

### get_vertex_position

```cpp
public Position get_vertex_position(geode::index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patch.cpp#53
```

### get_vertex_index

```cpp
public geode::index_t get_vertex_index()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patch.cpp#58
```



