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

# class FaultBlockRange


```cpp
Inherits from FaultBlockRangeBase
```



## Functions

### FaultBlockRange

```cpp
public void FaultBlockRange(const FaultBlocks<> & fault_blocks)
```


### begin

```cpp
public const FaultBlockRange & begin()
```


### end

```cpp
public const FaultBlockRange & end()
```


### operator*

```cpp
public const FaultBlock<dimension> & operator*()
```




