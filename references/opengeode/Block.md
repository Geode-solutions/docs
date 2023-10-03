# class Block

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#159
```

```cpp
Inherits from Component<3U>
```



# class Block

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#52
```

 Geometric component describing a 3D volume This component is described by a mesh.



```cpp
Inherits from Component<dimension>
```



## Functions

### Block

```cpp
public void Block<>(const Block<> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#54
```

### operator=

```cpp
public Block<> & operator=(const Block<> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#54
```

### Block

```cpp
public void Block<>(Block<> && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#69
```

### ~Block

```cpp
public void ~Block<>()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#93
```

### component_type_static

```cpp
public NamedType component_type_static()
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#66
```

### component_type

```cpp
public NamedType component_type()
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#71
```

### component_id

```cpp
public ComponentID component_id()
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#76
```

### mesh

```cpp
public const TypedMesh & mesh()
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#82
```

### mesh_type

```cpp
public const MeshImpl & mesh_type()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#110
```

### modifiable_mesh

```cpp
public TypedMesh & modifiable_mesh(BlocksKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#90
```

### Block

```cpp
public void Block<>(BlocksKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#76
```

### Block

```cpp
public void Block<>(const MeshImpl & impl, BlocksKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#81
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, BlocksKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#138
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, BlocksBuilderKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#145
```

### modifiable_mesh

```cpp
public TypedMesh & modifiable_mesh(BlocksBuilderKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#105
```

### set_block_name

```cpp
public void set_block_name(string_view name, BlocksBuilderKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#152
```

### set_mesh

```cpp
public void set_mesh(int mesh, BlocksKey key)
```

### set_mesh

```cpp
public void set_mesh(int mesh, BlocksBuilderKey key)
```



