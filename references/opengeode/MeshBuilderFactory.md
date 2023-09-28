# class MeshBuilderFactory

```cpp
Defined at ../../include/geode/mesh/builder/mesh_builder_factory.h#42
```

```cpp
Inherits from Factory<MeshImpl, VertexSetBuilder, VertexSet &, MeshBuilderFactoryKey>
```



## Functions

### register_mesh_builder

```cpp
public void register_mesh_builder(NamedType key)
```

```cpp
Defined at ../../include/geode/mesh/builder/mesh_builder_factory.h#49
```

### create_mesh_builder

```cpp
public std::unique_ptr<MeshBuilder> create_mesh_builder(Mesh & mesh)
```

```cpp
Defined at ../../include/geode/mesh/builder/mesh_builder_factory.h#55
```

### create_mesh_builder

```cpp
public int create_mesh_builder(Mesh & mesh)
```

```cpp
Defined at ../../include/geode/mesh/builder/mesh_builder_factory.h#55
```



