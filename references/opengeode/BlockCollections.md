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

# class BlockCollections


# class BlockCollections


# class BlockCollections


## Records

BlockCollectionRange

BlockCollectionRangeBase



## Functions

### ~BlockCollections

```cpp
public void ~BlockCollections<value-parameter-0-0>()
```


### nb_block_collections

```cpp
public index_t nb_block_collections()
```


### BlockCollections

```cpp
protected void BlockCollections<value-parameter-0-0>()
```


### BlockCollections

```cpp
public void BlockCollections<value-parameter-0-0>(const BlockCollections<dimension> & )
```


### operator=

```cpp
public BlockCollections<dimension> & operator=(const BlockCollections<dimension> & )
```


### nb_active_block_collections

```cpp
public index_t nb_active_block_collections()
```


### block_collection

```cpp
public const BlockCollection<dimension> & block_collection(const uuid & id)
```


### has_block_collection

```cpp
public bool has_block_collection(const uuid & id)
```


### block_collections

```cpp
public BlockCollectionRange block_collections()
```


### active_block_collections

```cpp
public BlockCollectionRange active_block_collections()
```


### save_block_collections

```cpp
public void save_block_collections(std::string_view directory)
```


### BlockCollections

```cpp
protected void BlockCollections<value-parameter-0-0>(BlockCollections<dimension> && other)
```


### operator=

```cpp
protected BlockCollections<dimension> & operator=(BlockCollections<dimension> && other)
```


### create_block_collection

```cpp
public const uuid & create_block_collection(BlockCollectionsBuilderKey key)
```


### create_block_collection

```cpp
public void create_block_collection(uuid block_collection_id, BlockCollectionsBuilderKey key)
```


### delete_block_collection

```cpp
public void delete_block_collection(const BlockCollection<dimension> & boundary, BlockCollectionsBuilderKey key)
```


### load_block_collections

```cpp
public void load_block_collections(std::string_view directory, BlockCollectionsBuilderKey key)
```


### modifiable_block_collections

```cpp
public ModifiableBlockCollectionRange modifiable_block_collections(BlockCollectionsBuilderKey key)
```


### modifiable_block_collection

```cpp
public BlockCollection<dimension> & modifiable_block_collection(const uuid & id, BlockCollectionsBuilderKey key)
```


### components

```cpp
public BlockCollectionRange components()
```


### has_component

```cpp
public bool has_component(const uuid & id)
```


### component

```cpp
public const BlockCollection<dimension> & component(const uuid & id)
```




