# struct SolidPath

```cpp
Defined at ../include/geode/common/cutter/solid/path_finder.h#25
```

## Members

```cpp
public Position position

```

```cpp
public PolyhedronFacet facet

```

```cpp
public index_t vertex_id

```



## Functions

### SolidPath

```cpp
public void SolidPath(const TetrahedralSolid3D & solid, PolyhedronFacet facet_in, Position position_in)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#105
```

### SolidPath

```cpp
public void SolidPath(index_t vertex_in)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#117
```

### SolidPath

```cpp
public void SolidPath()
```

```cpp
Defined at ../include/geode/common/cutter/solid/path_finder.h#33
```

### is_vertex

```cpp
public bool is_vertex()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#119
```

### is_facet_vertex

```cpp
public bool is_facet_vertex()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#124
```

### is_edge

```cpp
public bool is_edge()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#130
```

### is_facet

```cpp
public bool is_facet()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#136
```

### are_same_paths

```cpp
public bool are_same_paths(const TetrahedralSolid3D & solid, const SolidPath & other)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#141
```

### get_vertex_position

```cpp
public Position get_vertex_position(geode::local_index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#169
```

### get_edge_position

```cpp
public Position get_edge_position(geode::local_index_t edge)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#175
```

### get_edge_index

```cpp
public geode::local_index_t get_edge_index()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#181
```

### get_vertex_index

```cpp
public geode::local_index_t get_vertex_index()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#192
```

### get_edge_vertex_id

```cpp
public geode::local_index_t get_edge_vertex_id(geode::local_index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#204
```



