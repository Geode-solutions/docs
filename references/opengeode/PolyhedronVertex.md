# struct PolyhedronVertex

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#56
```

 This struct represents a local vertex in a polyhedron



## Members

```cpp
public index_t polyhedron_id

```

```cpp
public local_index_t vertex_id

```



## Functions

### PolyhedronVertex

```cpp
public void PolyhedronVertex()
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#58
```

### PolyhedronVertex

```cpp
public void PolyhedronVertex(index_t polyhedron_id_in, local_index_t vertex_id_in)
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#59
```

### operator==

```cpp
public bool operator==(const PolyhedronVertex & other)
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#63
```

### operator!=

```cpp
public bool operator!=(const PolyhedronVertex & other)
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#68
```

### operator<

```cpp
public bool operator<(const PolyhedronVertex & other)
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#72
```

### string

```cpp
public basic_string string()
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#80
```

### serialize

```cpp
public void serialize(Archive & archive)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#292
```



