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

FaultBlockRange

FaultBlockRangeBase



## Functions

### ~FaultBlocks

```cpp
public void ~FaultBlocks<value-parameter-0-0>()
```


### nb_fault_blocks

```cpp
public index_t nb_fault_blocks()
```


### FaultBlocks

```cpp
protected void FaultBlocks<value-parameter-0-0>()
```


### FaultBlocks

```cpp
public void FaultBlocks<value-parameter-0-0>(const FaultBlocks<dimension> & )
```


### operator=

```cpp
public FaultBlocks<dimension> & operator=(const FaultBlocks<dimension> & )
```


### nb_active_fault_blocks

```cpp
public index_t nb_active_fault_blocks()
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


### active_fault_blocks

```cpp
public FaultBlockRange active_fault_blocks()
```


### save_fault_blocks

```cpp
public void save_fault_blocks(std::string_view directory)
```


### FaultBlocks

```cpp
protected void FaultBlocks<value-parameter-0-0>(FaultBlocks<dimension> && other)
```


### operator=

```cpp
protected FaultBlocks<dimension> & operator=(FaultBlocks<dimension> && other)
```


### create_fault_block

```cpp
public const uuid & create_fault_block(FaultBlocksBuilderKey key)
```


### create_fault_block

```cpp
public void create_fault_block(uuid fault_block_id, FaultBlocksBuilderKey key)
```


### delete_fault_block

```cpp
public void delete_fault_block(const FaultBlock<dimension> & fault_block, FaultBlocksBuilderKey key)
```


### load_fault_blocks

```cpp
public void load_fault_blocks(std::string_view directory, FaultBlocksBuilderKey key)
```


### modifiable_fault_blocks

```cpp
public ModifiableFaultBlockRange modifiable_fault_blocks(FaultBlocksBuilderKey key)
```


### modifiable_fault_block

```cpp
public FaultBlock<dimension> & modifiable_fault_block(const uuid & id, FaultBlocksBuilderKey key)
```


### components

```cpp
public FaultBlockRange components()
```


### has_component

```cpp
public bool has_component(const uuid & id)
```


### component

```cpp
public const FaultBlock<dimension> & component(const uuid & id)
```




# class FaultBlocks


# class FaultBlocks


