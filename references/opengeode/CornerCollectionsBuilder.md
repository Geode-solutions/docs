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

# class CornerCollectionsBuilder


# class CornerCollectionsBuilder


## Functions

### load_corner_collections

```cpp
public void load_corner_collections(basic_string_view directory)
```


### set_corner_collection_name

```cpp
public void set_corner_collection_name(const uuid & id, basic_string_view name)
```


### CornerCollectionsBuilder

```cpp
protected void CornerCollectionsBuilder<dimension>(CornerCollections<dimension> & collections)
```


### create_corner_collection

```cpp
protected const uuid & create_corner_collection()
```


### create_corner_collection

```cpp
protected void create_corner_collection(uuid corner_collection_id)
```


### delete_corner_collection

```cpp
protected void delete_corner_collection(const CornerCollection<dimension> & collection)
```




# class CornerCollectionsBuilder


