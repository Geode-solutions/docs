# struct PolygonEdge

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#95
```

 This struct represents an edge in a polygon



## Members

```cpp
public index_t polygon_id

```

```cpp
public local_index_t edge_id

```



## Functions

### PolygonEdge

```cpp
public void PolygonEdge()
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#97
```

### PolygonEdge

```cpp
public void PolygonEdge(index_t polygon_id_in, local_index_t edge_id_in)
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#98
```

### PolygonEdge

```cpp
public void PolygonEdge(PolygonVertex polygon_vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#168
```

### operator==

```cpp
public bool operator==(const PolygonEdge & other)
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#103
```

### operator!=

```cpp
public bool operator!=(const PolygonEdge & other)
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#107
```

### operator<

```cpp
public bool operator<(const PolygonEdge & other)
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#111
```

### string

```cpp
public basic_string string()
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#119
```

### serialize

```cpp
public void serialize(Archive & archive)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#192
```



