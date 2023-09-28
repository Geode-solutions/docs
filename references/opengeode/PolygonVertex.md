# struct PolygonVertex

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#56
```

 This struct represents a local vertex in a polygon



## Members

```cpp
public index_t polygon_id

```

```cpp
public local_index_t vertex_id

```



## Functions

### PolygonVertex

```cpp
public void PolygonVertex()
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#58
```

### PolygonVertex

```cpp
public void PolygonVertex(index_t polygon_id_in, local_index_t vertex_id_in)
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#59
```

### PolygonVertex

```cpp
public void PolygonVertex(PolygonEdge polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#162
```

### operator==

```cpp
public bool operator==(const PolygonVertex & other)
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#64
```

### operator!=

```cpp
public bool operator!=(const PolygonVertex & other)
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#69
```

### operator<

```cpp
public bool operator<(const PolygonVertex & other)
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#73
```

### string

```cpp
public basic_string string()
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#81
```

### serialize

```cpp
public void serialize(Archive & archive)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#175
```



