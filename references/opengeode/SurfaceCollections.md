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

# class SurfaceCollections


# class SurfaceCollections


## Records

SurfaceCollectionRangeBase

SurfaceCollectionRange



## Functions

### SurfaceCollections

```cpp
public void SurfaceCollections<>(const SurfaceCollections<> & )
```


### operator=

```cpp
public SurfaceCollections<> & operator=(const SurfaceCollections<> & )
```


### ~SurfaceCollections

```cpp
public void ~SurfaceCollections<>()
```


### nb_surface_collections

```cpp
public index_t nb_surface_collections()
```


### surface_collection

```cpp
public const SurfaceCollection<dimension> & surface_collection(const uuid & id)
```


### surface_collections

```cpp
public SurfaceCollectionRange surface_collections()
```


### components

```cpp
public SurfaceCollectionRange components()
```


### save_surface_collections

```cpp
public void save_surface_collections(basic_string_view directory)
```


### SurfaceCollections

```cpp
protected void SurfaceCollections<>()
```


### SurfaceCollections

```cpp
protected void SurfaceCollections<>(SurfaceCollections<> && other)
```


### operator=

```cpp
protected SurfaceCollections<> & operator=(SurfaceCollections<> && other)
```


### create_surface_collection

```cpp
public const uuid & create_surface_collection(SurfaceCollectionsBuilderKey key)
```


### create_surface_collection

```cpp
public void create_surface_collection(uuid surface_collection_id, SurfaceCollectionsBuilderKey key)
```


### delete_surface_collection

```cpp
public void delete_surface_collection(const SurfaceCollection<dimension> & boundary, SurfaceCollectionsBuilderKey key)
```


### load_surface_collections

```cpp
public void load_surface_collections(basic_string_view directory, SurfaceCollectionsBuilderKey key)
```


### modifiable_surface_collections

```cpp
public ModifiableSurfaceCollectionRange modifiable_surface_collections(SurfaceCollectionsBuilderKey key)
```


### modifiable_surface_collection

```cpp
public SurfaceCollection<dimension> & modifiable_surface_collection(const uuid & id, SurfaceCollectionsBuilderKey key)
```




# class SurfaceCollections


