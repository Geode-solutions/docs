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

BlockCollectionRangeBase

BlockCollectionRange



## Functions

### BlockCollections

```cpp
public void BlockCollections<dimension>(const BlockCollections<dimension> & )
```


### operator=

```cpp
public BlockCollections<dimension> & operator=(const BlockCollections<dimension> & )
```


### ~BlockCollections

```cpp
public void ~BlockCollections<dimension>()
```


### nb_block_collections

```cpp
public index_t nb_block_collections()
```


### block_collection

```cpp
public const BlockCollection<dimension> & block_collection(const uuid & id)
```


### block_collections

```cpp
public BlockCollectionRange block_collections()
```


### save_block_collections

```cpp
public void save_block_collections(basic_string_view directory)
```


### BlockCollections

```cpp
protected void BlockCollections<dimension>()
```


### BlockCollections

```cpp
protected void BlockCollections<dimension>(BlockCollections<dimension> && other)
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
public void load_block_collections(basic_string_view directory, BlockCollectionsBuilderKey key)
```


### modifiable_block_collections

```cpp
public ModifiableBlockCollectionRange modifiable_block_collections(BlockCollectionsBuilderKey key)
```


### modifiable_block_collection

```cpp
public BlockCollection<dimension> & modifiable_block_collection(const uuid & id, BlockCollectionsBuilderKey key)
```




