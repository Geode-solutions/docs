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

# class CornerCollectionRangeBase


## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### ~CornerCollectionRangeBase

```cpp
public void ~CornerCollectionRangeBase()
```


### operator!=

```cpp
public bool operator!=(const CornerCollectionRangeBase & )
```


### operator++

```cpp
public void operator++()
```


### set_active_only

```cpp
public void set_active_only()
```


### CornerCollectionRangeBase

```cpp
protected void CornerCollectionRangeBase(const CornerCollections<> & collections)
```


### CornerCollectionRangeBase

```cpp
protected void CornerCollectionRangeBase(CornerCollectionRangeBase && other)
```


### CornerCollectionRangeBase

```cpp
protected void CornerCollectionRangeBase(const CornerCollectionRangeBase & other)
```




