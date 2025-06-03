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

# class BlockCollectionRangeBase


## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### ~BlockCollectionRangeBase

```cpp
public void ~BlockCollectionRangeBase()
```


### operator!=

```cpp
public bool operator!=(const BlockCollectionRangeBase & )
```


### operator++

```cpp
public void operator++()
```


### set_active_only

```cpp
public void set_active_only()
```


### BlockCollectionRangeBase

```cpp
protected void BlockCollectionRangeBase(const BlockCollections<> & collections)
```


### BlockCollectionRangeBase

```cpp
protected void BlockCollectionRangeBase(BlockCollectionRangeBase && other)
```


### BlockCollectionRangeBase

```cpp
protected void BlockCollectionRangeBase(const BlockCollectionRangeBase & other)
```




