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

# class BlockCollectionsBuilder


# class BlockCollectionsBuilder


## Functions

### load_block_collections

```cpp
public void load_block_collections(basic_string_view directory)
```


### set_block_collection_name

```cpp
public void set_block_collection_name(const uuid & id, basic_string_view name)
```


### BlockCollectionsBuilder

```cpp
protected void BlockCollectionsBuilder<dimension>(BlockCollections<dimension> & collections)
```


### create_block_collection

```cpp
protected const uuid & create_block_collection()
```


### create_block_collection

```cpp
protected void create_block_collection(uuid block_collection_id)
```


### delete_block_collection

```cpp
protected void delete_block_collection(const BlockCollection<dimension> & collection)
```




# class BlockCollectionsBuilder


