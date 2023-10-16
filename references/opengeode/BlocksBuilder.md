# class BlocksBuilder


# class BlocksBuilder


## Functions

### load_blocks

```cpp
public void load_blocks(string_view directory)
```


### block_mesh_builder

```cpp
public std::unique_ptr<typename Mesh::Builder> block_mesh_builder(const uuid & id)
```


 Get a pointer to the builder of a Block mesh

**id** [in] Unique index of the Block

### set_block_name

```cpp
public void set_block_name(const uuid & id, string_view name)
```


### BlocksBuilder

```cpp
protected void BlocksBuilder<>(Blocks<dimension> & blocks)
```


### create_block

```cpp
protected const uuid & create_block()
```


### create_block

```cpp
protected const uuid & create_block(const MeshImpl & impl)
```


### create_block

```cpp
protected void create_block(uuid block_id)
```


### create_block

```cpp
protected void create_block(uuid block_id, const MeshImpl & impl)
```


### delete_block

```cpp
protected void delete_block(const Block<dimension> & block)
```


### set_block_mesh

```cpp
protected void set_block_mesh(const uuid & id, std::unique_ptr<SolidMesh<dimension> > mesh)
```


### modifiable_block_mesh

```cpp
protected SolidMesh<dimension> & modifiable_block_mesh(const uuid & id)
```




