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
public void CornerCollection<value-parameter-0-0>(const CornerCollection<dimension> & )
```


### operator=

```cpp
public CornerCollection<dimension> & operator=(const CornerCollection<dimension> & )
```


### CornerCollection

```cpp
public void CornerCollection<value-parameter-0-0>(CornerCollection<dimension> && other)
```


### ~CornerCollection

```cpp
public void ~CornerCollection<value-parameter-0-0>()
```


### component_type_static

```cpp
public static ComponentType component_type_static()
```


### component_type

```cpp
public ComponentType component_type()
```


### CornerCollection

```cpp
public void CornerCollection<value-parameter-0-0>(CornerCollectionsKey )
```


### set_corner_collection_name

```cpp
public void set_corner_collection_name(std::string_view name, CornerCollectionsBuilderKey )
```


### set_corner_collection_active

```cpp
public void set_corner_collection_active(bool active, CornerCollectionsBuilderKey )
```




# class CornerCollection


```cpp
Inherits from Component<3U>
```



# class CornerCollection


```cpp
Inherits from Component<2U>
```



