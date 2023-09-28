# class HybridSolid

```cpp
Defined at ../../include/geode/mesh/core/hybrid_solid.h#37
```

```cpp
Inherits from SolidMesh<dimension>
```



## Functions

### HybridSolid

```cpp
public void HybridSolid<>(const HybridSolid<> & )
```

```cpp
Defined at ../../include/geode/mesh/core/hybrid_solid.h#39
```

### operator=

```cpp
public HybridSolid<> & operator=(const HybridSolid<> & )
```

```cpp
Defined at ../../include/geode/mesh/core/hybrid_solid.h#39
```

### create

```cpp
public std::unique_ptr<HybridSolid<dimension> > create()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/hybrid_solid.cpp#33
```

 Create a new HybridSolid using default data structure.

### create

```cpp
public std::unique_ptr<HybridSolid<dimension> > create(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/hybrid_solid.cpp#41
```

 Create a new HybridSolid using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/hybrid_solid.cpp#48
```

### clone

```cpp
public std::unique_ptr<HybridSolid<dimension> > clone()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/hybrid_solid.cpp#54
```

### polyhedron_type

```cpp
public Type polyhedron_type(index_t polyhedron_id)
```

### HybridSolid

```cpp
protected void HybridSolid<>()
```

```cpp
Defined at ../../include/geode/mesh/core/hybrid_solid.h#74
```

### HybridSolid

```cpp
protected void HybridSolid<>(HybridSolid<> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/hybrid_solid.h#75
```

### operator=

```cpp
protected HybridSolid<> & operator=(HybridSolid<> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/hybrid_solid.h#76
```



## Enums

| enum class Type |

--

| UNKNOWN |
| TETRAHEDRON |
| HEXAHEDRON |
| PRISM |
| PYRAMID |


```cpp
Defined at ../../include/geode/mesh/core/hybrid_solid.h#46
```



# class HybridSolid

```cpp
Defined at /github/workspace/src/geode/mesh/core/hybrid_solid.cpp#76
```

```cpp
Inherits from SolidMesh<3U>
```



