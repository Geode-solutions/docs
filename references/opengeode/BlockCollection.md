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

# class BlockCollection


```cpp
Inherits from Component<3U>
```



# class BlockCollection


 Collection component describing a Boundary.



```cpp
Inherits from Component<dimension>
```



## Functions

### BlockCollection

```cpp
public void BlockCollection<>(const BlockCollection<> & )
```


### operator=

```cpp
public BlockCollection<> & operator=(const BlockCollection<> & )
```


### BlockCollection

```cpp
public void BlockCollection<>(BlockCollection<> && other)
```


### ~BlockCollection

```cpp
public void ~BlockCollection<>()
```


### component_type_static

```cpp
public NamedType component_type_static()
```


### component_type

```cpp
public NamedType component_type()
```


### BlockCollection

```cpp
public void BlockCollection<>(BlockCollectionsKey )
```


### set_block_collection_name

```cpp
public void set_block_collection_name(basic_string_view name, BlockCollectionsBuilderKey )
```




# class BlockCollection


```cpp
Inherits from Component<2U>
```



