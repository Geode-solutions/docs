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

# class LineCollections


## Records

LineCollectionRangeBase

LineCollectionRange



## Functions

### LineCollections

```cpp
public void LineCollections<>(const LineCollections<> & )
```


### operator=

```cpp
public LineCollections<> & operator=(const LineCollections<> & )
```


### ~LineCollections

```cpp
public void ~LineCollections<>()
```


### nb_line_collections

```cpp
public index_t nb_line_collections()
```


### nb_active_line_collections

```cpp
public index_t nb_active_line_collections()
```


### line_collection

```cpp
public const LineCollection<dimension> & line_collection(const uuid & id)
```


### has_line_collection

```cpp
public bool has_line_collection(const uuid & id)
```


### line_collections

```cpp
public LineCollectionRange line_collections()
```


### active_line_collections

```cpp
public LineCollectionRange active_line_collections()
```


### components

```cpp
public LineCollectionRange components()
```


### has_component

```cpp
public bool has_component(const uuid & id)
```


### component

```cpp
public const LineCollection<dimension> & component(const uuid & id)
```


### save_line_collections

```cpp
public void save_line_collections(basic_string_view directory)
```


### LineCollections

```cpp
protected void LineCollections<>()
```


### LineCollections

```cpp
protected void LineCollections<>(LineCollections<> && other)
```


### operator=

```cpp
protected LineCollections<> & operator=(LineCollections<> && other)
```


### create_line_collection

```cpp
public const uuid & create_line_collection(LineCollectionsBuilderKey key)
```


### create_line_collection

```cpp
public void create_line_collection(uuid line_collection_id, LineCollectionsBuilderKey key)
```


### delete_line_collection

```cpp
public void delete_line_collection(const LineCollection<dimension> & boundary, LineCollectionsBuilderKey key)
```


### load_line_collections

```cpp
public void load_line_collections(basic_string_view directory, LineCollectionsBuilderKey key)
```


### modifiable_line_collections

```cpp
public ModifiableLineCollectionRange modifiable_line_collections(LineCollectionsBuilderKey key)
```


### modifiable_line_collection

```cpp
public LineCollection<dimension> & modifiable_line_collection(const uuid & id, LineCollectionsBuilderKey key)
```




# class LineCollections


# class LineCollections


