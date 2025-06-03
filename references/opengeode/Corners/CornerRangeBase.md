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

# class CornerRangeBase


 Base class for range-based iteration on Corners



## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### ~CornerRangeBase

```cpp
public void ~CornerRangeBase()
```


### operator!=

```cpp
public bool operator!=(const CornerRangeBase & )
```


### operator++

```cpp
public void operator++()
```


### set_active_only

```cpp
public void set_active_only()
```


### CornerRangeBase

```cpp
protected void CornerRangeBase(const Corners<> & corners)
```


### CornerRangeBase

```cpp
protected void CornerRangeBase(CornerRangeBase && other)
```


### CornerRangeBase

```cpp
protected void CornerRangeBase(const CornerRangeBase & other)
```




