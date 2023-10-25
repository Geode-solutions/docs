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

# class FaultBlockRangeBase


## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### ~FaultBlockRangeBase

```cpp
public void ~FaultBlockRangeBase()
```


### operator!=

```cpp
public bool operator!=(const FaultBlockRangeBase & )
```


### operator++

```cpp
public void operator++()
```


### FaultBlockRangeBase

```cpp
protected void FaultBlockRangeBase(const FaultBlocks<> & fault_blocks)
```


### FaultBlockRangeBase

```cpp
protected void FaultBlockRangeBase(FaultBlockRangeBase && other)
```


### FaultBlockRangeBase

```cpp
protected void FaultBlockRangeBase(const FaultBlockRangeBase & other)
```




