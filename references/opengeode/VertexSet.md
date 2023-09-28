# class VertexSet

```cpp
Defined at ../../include/geode/mesh/core/vertex_set.h#43
```

 Interface class to represent set of vertices.



```cpp
Inherits from Identifier
```



## Functions

### VertexSet

```cpp
public void VertexSet(const VertexSet & )
```

```cpp
Defined at ../../include/geode/mesh/core/vertex_set.h#45
```

### operator=

```cpp
public VertexSet & operator=(const VertexSet & )
```

```cpp
Defined at ../../include/geode/mesh/core/vertex_set.h#45
```

### create

```cpp
public std::unique_ptr<VertexSet> create()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/vertex_set.cpp#74
```

 Create a new VertexSet

### create

```cpp
public std::unique_ptr<VertexSet> create(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/vertex_set.cpp#80
```

 Create a new VertexSet using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/vertex_set.cpp#85
```

### clone

```cpp
public std::unique_ptr<VertexSet> clone()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/vertex_set.cpp#115
```

### ~VertexSet

```cpp
public void ~VertexSet()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/vertex_set.cpp#72
```

### native_extension

```cpp
public string_view native_extension()
```

### nb_vertices

```cpp
public index_t nb_vertices()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/vertex_set.cpp#90
```

### vertex_attribute_manager

```cpp
public AttributeManager & vertex_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/vertex_set.cpp#95
```

 Access to the attribute manager. Attributes are associated with vertices.

### impl_name

```cpp
public NamedType impl_name()
```

### type_name

```cpp
public NamedType type_name()
```

### VertexSet

```cpp
protected void VertexSet()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/vertex_set.cpp#58
```

### VertexSet

```cpp
protected void VertexSet(VertexSet && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/vertex_set.cpp#60
```

### operator=

```cpp
protected VertexSet & operator=(VertexSet && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/vertex_set.cpp#65
```



