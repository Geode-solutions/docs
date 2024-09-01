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

# class FaultBlocks


## Records

FaultBlockRangeBase

FaultBlockRange



## Functions

### FaultBlocks

```cpp
public void FaultBlocks<>(const FaultBlocks<> & )
```


### operator=

```cpp
public FaultBlocks<> & operator=(const FaultBlocks<> & )
```


### ~FaultBlocks

```cpp
public void ~FaultBlocks<>()
```


### nb_fault_blocks

```cpp
public index_t nb_fault_blocks()
```


### has_fault_block

```cpp
public bool has_fault_block(const uuid & id)
```


### fault_block

```cpp
public const FaultBlock<dimension> & fault_block(const uuid & id)
```


### fault_blocks

```cpp
public FaultBlockRange fault_blocks()
```


### save_fault_blocks

```cpp
public void save_fault_blocks(basic_string_view directory)
```


### FaultBlocks

```cpp
protected void FaultBlocks<>()
```


### FaultBlocks

```cpp
protected void FaultBlocks<>(FaultBlocks<> && other)
```


### operator=

```cpp
protected FaultBlocks<> & operator=(FaultBlocks<> && other)
```




# class FaultBlocks


# class FaultBlocks


