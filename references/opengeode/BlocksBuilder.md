# class BlocksBuilder

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/blocks_builder.cpp#96
```

# class BlocksBuilder

```cpp
Defined at ../../include/geode/model/mixin/builder/blocks_builder.h#46
```

## Functions

### load_blocks

```cpp
public void load_blocks(string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/blocks_builder.cpp#66
```

### block_mesh_builder

```cpp
public std::unique_ptr<typename Mesh::Builder> block_mesh_builder(const uuid & id)
```

```cpp
Defined at ../../include/geode/model/mixin/builder/blocks_builder.h#56
```

 Get a pointer to the builder of a Block mesh

**id** [in] Unique index of the Block

### set_block_name

```cpp
public void set_block_name(const uuid & id, string_view name)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/blocks_builder.cpp#72
```

### BlocksBuilder

```cpp
protected void BlocksBuilder<>(Blocks<dimension> & blocks)
```

```cpp
Defined at ../../include/geode/model/mixin/builder/blocks_builder.h#68
```

### create_block

```cpp
protected const uuid & create_block()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/blocks_builder.cpp#34
```

### create_block

```cpp
protected const uuid & create_block(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/blocks_builder.cpp#40
```

### create_block

```cpp
protected void create_block(uuid block_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/blocks_builder.cpp#46
```

### create_block

```cpp
protected void create_block(uuid block_id, const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/blocks_builder.cpp#52
```

### delete_block

```cpp
protected void delete_block(const Block<dimension> & block)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/blocks_builder.cpp#59
```

### set_block_mesh

```cpp
protected void set_block_mesh(const uuid & id, std::unique_ptr<SolidMesh<dimension> > mesh)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/blocks_builder.cpp#80
```

### modifiable_block_mesh

```cpp
protected SolidMesh<dimension> & modifiable_block_mesh(const uuid & id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/blocks_builder.cpp#88
```



