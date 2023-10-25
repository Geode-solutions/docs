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

# class FaultBlocksBuilder


# class FaultBlocksBuilder


# class FaultBlocksBuilder


## Functions

### load_fault_blocks

```cpp
public void load_fault_blocks(string_view directory)
```


### set_fault_block_name

```cpp
public void set_fault_block_name(const uuid & id, string_view name)
```


### FaultBlocksBuilder

```cpp
protected void FaultBlocksBuilder<dimension>(FaultBlocks<dimension> & fault_blocks)
```


### create_fault_block

```cpp
protected const uuid & create_fault_block()
```


### create_fault_block

```cpp
protected void create_fault_block(uuid fault_block_id)
```


### delete_fault_block

```cpp
protected void delete_fault_block(const FaultBlock<dimension> & fault_block)
```




