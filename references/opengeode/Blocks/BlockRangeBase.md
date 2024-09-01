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

# class BlockRangeBase


 Base class for range-based iteration on Blocks



## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### ~BlockRangeBase

```cpp
public void ~BlockRangeBase()
```


### operator!=

```cpp
public bool operator!=(const BlockRangeBase & )
```


### operator++

```cpp
public void operator++()
```


### BlockRangeBase

```cpp
protected void BlockRangeBase(const Blocks<dimension> & blocks)
```


### BlockRangeBase

```cpp
protected void BlockRangeBase(BlockRangeBase && other)
```


### BlockRangeBase

```cpp
protected void BlockRangeBase(const BlockRangeBase & other)
```




