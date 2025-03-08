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

# class CornerCollection


 Collection component describing a Boundary.



```cpp
Inherits from Component<dimension>
```



## Functions

### CornerCollection

```cpp
public void CornerCollection<>(const CornerCollection<> & )
```


### operator=

```cpp
public CornerCollection<> & operator=(const CornerCollection<> & )
```


### CornerCollection

```cpp
public void CornerCollection<>(CornerCollection<> && other)
```


### ~CornerCollection

```cpp
public void ~CornerCollection<>()
```


### component_type_static

```cpp
public NamedType component_type_static()
```


### component_type

```cpp
public NamedType component_type()
```


### CornerCollection

```cpp
public void CornerCollection<>(CornerCollectionsKey )
```


### set_corner_collection_name

```cpp
public void set_corner_collection_name(basic_string_view name, CornerCollectionsBuilderKey )
```




# class CornerCollection


```cpp
Inherits from Component<3U>
```



# class CornerCollection


```cpp
Inherits from Component<2U>
```



