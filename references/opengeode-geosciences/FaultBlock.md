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

# class FaultBlock


```cpp
Inherits from Component<2U>
```



# class FaultBlock


 Geological component describing a Fault Block.



```cpp
Inherits from Component<dimension>
```



## Functions

### FaultBlock

```cpp
public void FaultBlock<dimension>(const FaultBlock<dimension> & )
```


### operator=

```cpp
public FaultBlock<dimension> & operator=(const FaultBlock<dimension> & )
```


### FaultBlock

```cpp
public void FaultBlock<dimension>(FaultBlock<dimension> && other)
```


### ~FaultBlock

```cpp
public void ~FaultBlock<dimension>()
```


### component_type_static

```cpp
public NamedType component_type_static()
```


### component_type

```cpp
public NamedType component_type()
```


### component_id

```cpp
public ComponentID component_id()
```


### FaultBlock

```cpp
public void FaultBlock<dimension>(FaultBlocksKey )
```


### set_fault_block_name

```cpp
public void set_fault_block_name(basic_string_view name, FaultBlocksBuilderKey )
```




# class FaultBlock


```cpp
Inherits from Component<3U>
```



