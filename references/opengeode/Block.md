# class Block

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#134
```

```cpp
Inherits from Component<3U>
```



# class Block

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#48
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
Defined at ../../include/geode/model/mixin/core/block.h#50
```

### operator=

```cpp
public Block<> & operator=(const Block<> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#50
```

### Block

```cpp
public void Block<>(Block<> && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#62
```

### ~Block

```cpp
public void ~Block<>()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#75
```

### component_type_static

```cpp
public NamedType component_type_static()
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#60
```

### component_type

```cpp
public NamedType component_type()
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#65
```

### component_id

```cpp
public ComponentID component_id()
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#70
```

### mesh

```cpp
public const Mesh & mesh()
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#76
```

### mesh_type

```cpp
public const MeshImpl & mesh_type()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#92
```

### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(BlocksKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#84
```

### Block

```cpp
public void Block<>(BlocksKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#90
```

### Block

```cpp
public void Block<>(const MeshImpl & impl, BlocksKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#92
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<SolidMesh<dimension> > mesh, BlocksKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#120
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<SolidMesh<dimension> > mesh, BlocksBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/block.cpp#127
```

### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(BlocksBuilderKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#101
```

### set_block_name

```cpp
public void set_block_name(string_view name, BlocksBuilderKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/block.h#106
```

### set_mesh

```cpp
public void set_mesh(int mesh, BlocksKey )
```

### set_mesh

```cpp
public void set_mesh(int mesh, BlocksBuilderKey )
```



