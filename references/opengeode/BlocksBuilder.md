<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class BlocksBuilder


# class BlocksBuilder


## Functions

### load_blocks

```cpp
public void load_blocks(basic_string_view directory)
```


### block_mesh_builder

```cpp
public std::unique_ptr<typename Mesh::Builder> block_mesh_builder(const uuid & id)
```


 Get a pointer to the builder of a Block mesh

**id** [in] Unique index of the Block

### set_block_name

```cpp
public void set_block_name(const uuid & id, basic_string_view name)
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




