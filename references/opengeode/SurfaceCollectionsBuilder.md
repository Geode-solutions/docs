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

# class SurfaceCollectionsBuilder


# class SurfaceCollectionsBuilder


# class SurfaceCollectionsBuilder


## Functions

### load_surface_collections

```cpp
public void load_surface_collections(basic_string_view directory)
```


### set_surface_collection_name

```cpp
public void set_surface_collection_name(const uuid & id, basic_string_view name)
```


### set_surface_collection_active

```cpp
public void set_surface_collection_active(const uuid & id, bool active)
```


### SurfaceCollectionsBuilder

```cpp
protected void SurfaceCollectionsBuilder<dimension>(SurfaceCollections<dimension> & collections)
```


### create_surface_collection

```cpp
protected const uuid & create_surface_collection()
```


### create_surface_collection

```cpp
protected void create_surface_collection(uuid surface_collection_id)
```


### delete_surface_collection

```cpp
protected void delete_surface_collection(const SurfaceCollection<dimension> & collection)
```




