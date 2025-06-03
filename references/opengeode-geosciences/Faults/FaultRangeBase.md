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

# class FaultRangeBase


## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### ~FaultRangeBase

```cpp
public void ~FaultRangeBase()
```


### operator!=

```cpp
public bool operator!=(const FaultRangeBase & )
```


### operator++

```cpp
public void operator++()
```


### set_active_only

```cpp
public void set_active_only()
```


### FaultRangeBase

```cpp
protected void FaultRangeBase(const Faults<> & faults)
```


### FaultRangeBase

```cpp
protected void FaultRangeBase(FaultRangeBase && other)
```


### FaultRangeBase

```cpp
protected void FaultRangeBase(const FaultRangeBase & other)
```




