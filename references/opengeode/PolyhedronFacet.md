# struct PolyhedronFacet

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#94
```

 This struct represents a facet in a polyhedron



## Members

```cpp
public index_t polyhedron_id

```

```cpp
public local_index_t facet_id

```



## Functions

### PolyhedronFacet

```cpp
public void PolyhedronFacet()
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#96
```

### PolyhedronFacet

```cpp
public void PolyhedronFacet(index_t polyhedron_id_in, local_index_t facet_id_in)
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#97
```

### operator==

```cpp
public bool operator==(const PolyhedronFacet & other)
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#101
```

### operator!=

```cpp
public bool operator!=(const PolyhedronFacet & other)
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#106
```

### operator<

```cpp
public bool operator<(const PolyhedronFacet & other)
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#110
```

### string

```cpp
public basic_string string()
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#118
```

### serialize

```cpp
public void serialize(Archive & archive)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#309
```



