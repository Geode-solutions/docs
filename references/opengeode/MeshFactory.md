# class MeshFactory

```cpp
Defined at ../../include/geode/mesh/core/mesh_factory.h#35
```

```cpp
Inherits from Factory<MeshImpl, VertexSet>
```



## Functions

### register_mesh

```cpp
public void register_mesh(NamedType type, NamedType key)
```

```cpp
Defined at ../../include/geode/mesh/core/mesh_factory.h#42
```

 Register a mesh implementation to a given mesh type

### register_default_mesh

```cpp
public void register_default_mesh(NamedType type, NamedType key)
```

```cpp
Defined at ../../include/geode/mesh/core/mesh_factory.h#54
```

 Register the default mesh implementation to a given mesh type. This implementation will be used when no specific implementation is required.

### type

```cpp
public const MeshType & type(const MeshImpl & key)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/mesh_factory.cpp#73
```

### default_impl

```cpp
public const MeshImpl & default_impl(const MeshType & type)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/mesh_factory.cpp#78
```

### create_mesh

```cpp
public std::unique_ptr<Mesh> create_mesh(const MeshImpl & key)
```

```cpp
Defined at ../../include/geode/mesh/core/mesh_factory.h#65
```

### create_default_mesh

```cpp
public std::unique_ptr<Mesh> create_default_mesh(const MeshType & type)
```

```cpp
Defined at ../../include/geode/mesh/core/mesh_factory.h#74
```

### create_mesh

```cpp
public int create_mesh(const MeshImpl & key)
```

```cpp
Defined at ../../include/geode/mesh/core/mesh_factory.h#65
```

### create_default_mesh

```cpp
public int create_default_mesh(const MeshType & type)
```

```cpp
Defined at ../../include/geode/mesh/core/mesh_factory.h#74
```



