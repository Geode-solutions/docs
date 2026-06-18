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

SurfaceCollectionRange

SurfaceCollectionRangeBase



## Functions

### ~SurfaceCollections

```cpp
public void ~SurfaceCollections<value-parameter-0-0>()
```


### nb_surface_collections

```cpp
public index_t nb_surface_collections()
```


### nb_active_surface_collections

```cpp
public index_t nb_active_surface_collections()
```


### SurfaceCollections

```cpp
protected void SurfaceCollections<value-parameter-0-0>()
```


### SurfaceCollections

```cpp
protected void SurfaceCollections<value-parameter-0-0>(SurfaceCollections<dimension> && other)
```


### SurfaceCollections

```cpp
public void SurfaceCollections<value-parameter-0-0>(const SurfaceCollections<dimension> & )
```


### operator=

```cpp
public SurfaceCollections<dimension> & operator=(const SurfaceCollections<dimension> & )
```


### surface_collection

```cpp
public const SurfaceCollection<dimension> & surface_collection(const uuid & id)
```


### has_surface_collection

```cpp
public bool has_surface_collection(const uuid & id)
```


### surface_collections

```cpp
public SurfaceCollectionRange surface_collections()
```


### active_surface_collections

```cpp
public SurfaceCollectionRange active_surface_collections()
```


### save_surface_collections

```cpp
public void save_surface_collections(std::string_view directory)
```


### operator=

```cpp
protected SurfaceCollections<dimension> & operator=(SurfaceCollections<dimension> && other)
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
public void load_surface_collections(std::string_view directory, SurfaceCollectionsBuilderKey key)
```


### modifiable_surface_collections

```cpp
public ModifiableSurfaceCollectionRange modifiable_surface_collections(SurfaceCollectionsBuilderKey key)
```


### modifiable_surface_collection

```cpp
public SurfaceCollection<dimension> & modifiable_surface_collection(const uuid & id, SurfaceCollectionsBuilderKey key)
```


### components

```cpp
public SurfaceCollectionRange components()
```


### has_component

```cpp
public bool has_component(const uuid & id)
```


### component

```cpp
public const SurfaceCollection<dimension> & component(const uuid & id)
```




# class SurfaceCollections


