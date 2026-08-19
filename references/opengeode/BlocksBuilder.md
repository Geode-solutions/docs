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

### create_block

```cpp
protected const uuid & create_block()
```


### block_mesh_builder

```cpp
public std::unique_ptr<typename Mesh::Builder> block_mesh_builder(const Block<dimension> & block)
```


 Get a pointer to the builder of a Block mesh

**Block** [in] Block component to get the builder of

### load_blocks

```cpp
public void load_blocks(std::string_view directory)
```


### BlocksBuilder

```cpp
protected void BlocksBuilder<dimension>(Blocks<dimension> & blocks)
```


### set_block_name

```cpp
public void set_block_name(const Block<dimension> & block, std::string_view name)
```


### set_block_active

```cpp
public void set_block_active(const Block<dimension> & block, bool active)
```


### steal_block_mesh

```cpp
public std::unique_ptr<SolidMesh<dimension>> steal_block_mesh(const Block<dimension> & block)
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
protected void set_block_mesh(const uuid & id, std::unique_ptr<SolidMesh<dimension>> mesh)
```


### modifiable_block_mesh

```cpp
protected SolidMesh<dimension> & modifiable_block_mesh(const uuid & id)
```




