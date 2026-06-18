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
public void BlockCollection<value-parameter-0-0>(const BlockCollection<dimension> & )
```


### operator=

```cpp
public BlockCollection<dimension> & operator=(const BlockCollection<dimension> & )
```


### BlockCollection

```cpp
public void BlockCollection<value-parameter-0-0>(BlockCollection<dimension> && other)
```


### ~BlockCollection

```cpp
public void ~BlockCollection<value-parameter-0-0>()
```


### component_type_static

```cpp
public static ComponentType component_type_static()
```


### component_type

```cpp
public ComponentType component_type()
```


### BlockCollection

```cpp
public void BlockCollection<value-parameter-0-0>(BlockCollectionsKey )
```


### set_block_collection_name

```cpp
public void set_block_collection_name(std::string_view name, BlockCollectionsBuilderKey )
```


### set_block_collection_active

```cpp
public void set_block_collection_active(bool is_active, BlockCollectionsBuilderKey )
```




# class BlockCollection


```cpp
Inherits from Component<2U>
```



