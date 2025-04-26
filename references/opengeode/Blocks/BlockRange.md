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

# class BlockRange


 Class for range-based iteration on unmodifiable Blocks



```cpp
Inherits from BlockRangeBase
```



## Functions

### BlockRange

```cpp
public void BlockRange(const Blocks<> & blocks)
```


### BlockRange

```cpp
public void BlockRange(const BlockRange & range)
```


### ~BlockRange

```cpp
public void ~BlockRange()
```


### begin

```cpp
public const BlockRange & begin()
```


### end

```cpp
public const BlockRange & end()
```


### operator*

```cpp
public const Block<dimension> & operator*()
```




