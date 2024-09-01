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

# class Blocks


# class Blocks


 Storage class providing range loop to iterate on Blocks



## Records

BlockRangeBase

BlockRange



## Functions

### Blocks

```cpp
public void Blocks<dimension>(const Blocks<dimension> & )
```


### operator=

```cpp
public Blocks<dimension> & operator=(const Blocks<dimension> & )
```


### ~Blocks

```cpp
public void ~Blocks<dimension>()
```


### nb_blocks

```cpp
public index_t nb_blocks()
```


### has_block

```cpp
public bool has_block(const uuid & id)
```


### block

```cpp
public const Block<dimension> & block(const uuid & id)
```


 Access to an unmodifiable Block by its unique index

### blocks

```cpp
public BlockRange blocks()
```


### save_blocks

```cpp
public void save_blocks(basic_string_view directory)
```


 Save each Block in a file located in the specified directory

### Blocks

```cpp
protected void Blocks<dimension>()
```


### Blocks

```cpp
protected void Blocks<dimension>(Blocks<dimension> && other)
```


### operator=

```cpp
protected Blocks<dimension> & operator=(Blocks<dimension> && other)
```


### create_block

```cpp
public const uuid & create_block(BlocksBuilderKey key)
```


### create_block

```cpp
public const uuid & create_block(const MeshImpl & impl, BlocksBuilderKey key)
```


### create_block

```cpp
public void create_block(uuid block_id, BlocksBuilderKey key)
```


### create_block

```cpp
public void create_block(uuid block_id, const MeshImpl & impl, BlocksBuilderKey key)
```


### delete_block

```cpp
public void delete_block(const Block<dimension> & block, BlocksBuilderKey key)
```


### load_blocks

```cpp
public void load_blocks(basic_string_view directory, BlocksBuilderKey key)
```


### modifiable_blocks

```cpp
public ModifiableBlockRange modifiable_blocks(BlocksBuilderKey key)
```


### modifiable_block

```cpp
public Block<dimension> & modifiable_block(const uuid & id, BlocksBuilderKey key)
```




