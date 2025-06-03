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

# class SurfaceCollection


 Collection component describing a Boundary.



```cpp
Inherits from Component<dimension>
```



## Functions

### SurfaceCollection

```cpp
public void SurfaceCollection<>(const SurfaceCollection<> & )
```


### operator=

```cpp
public SurfaceCollection<> & operator=(const SurfaceCollection<> & )
```


### SurfaceCollection

```cpp
public void SurfaceCollection<>(SurfaceCollection<> && other)
```


### ~SurfaceCollection

```cpp
public void ~SurfaceCollection<>()
```


### component_type_static

```cpp
public NamedType component_type_static()
```


### component_type

```cpp
public NamedType component_type()
```


### SurfaceCollection

```cpp
public void SurfaceCollection<>(SurfaceCollectionsKey )
```


### set_surface_collection_name

```cpp
public void set_surface_collection_name(basic_string_view name, SurfaceCollectionsBuilderKey )
```


### set_surface_collection_active

```cpp
public void set_surface_collection_active(bool active, SurfaceCollectionsBuilderKey )
```




# class SurfaceCollection


```cpp
Inherits from Component<2U>
```



# class SurfaceCollection


```cpp
Inherits from Component<3U>
```



