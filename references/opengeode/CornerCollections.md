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

# class CornerCollections


# class CornerCollections


# class CornerCollections


## Records

CornerCollectionRangeBase

CornerCollectionRange



## Functions

### CornerCollections

```cpp
public void CornerCollections<>(const CornerCollections<> & )
```


### operator=

```cpp
public CornerCollections<> & operator=(const CornerCollections<> & )
```


### ~CornerCollections

```cpp
public void ~CornerCollections<>()
```


### nb_corner_collections

```cpp
public index_t nb_corner_collections()
```


### nb_active_corner_collections

```cpp
public index_t nb_active_corner_collections()
```


### corner_collection

```cpp
public const CornerCollection<dimension> & corner_collection(const uuid & id)
```


### has_corner_collection

```cpp
public bool has_corner_collection(const uuid & id)
```


### corner_collections

```cpp
public CornerCollectionRange corner_collections()
```


### active_corner_collections

```cpp
public CornerCollectionRange active_corner_collections()
```


### components

```cpp
public CornerCollectionRange components()
```


### has_component

```cpp
public bool has_component(const uuid & id)
```


### component

```cpp
public const CornerCollection<dimension> & component(const uuid & id)
```


### save_corner_collections

```cpp
public void save_corner_collections(basic_string_view directory)
```


### CornerCollections

```cpp
protected void CornerCollections<>()
```


### CornerCollections

```cpp
protected void CornerCollections<>(CornerCollections<> && other)
```


### operator=

```cpp
protected CornerCollections<> & operator=(CornerCollections<> && other)
```


### create_corner_collection

```cpp
public const uuid & create_corner_collection(CornerCollectionsBuilderKey key)
```


### create_corner_collection

```cpp
public void create_corner_collection(uuid corner_collection_id, CornerCollectionsBuilderKey key)
```


### delete_corner_collection

```cpp
public void delete_corner_collection(const CornerCollection<dimension> & boundary, CornerCollectionsBuilderKey key)
```


### load_corner_collections

```cpp
public void load_corner_collections(basic_string_view directory, CornerCollectionsBuilderKey key)
```


### modifiable_corner_collections

```cpp
public ModifiableCornerCollectionRange modifiable_corner_collections(CornerCollectionsBuilderKey key)
```


### modifiable_corner_collection

```cpp
public CornerCollection<dimension> & modifiable_corner_collection(const uuid & id, CornerCollectionsBuilderKey key)
```




