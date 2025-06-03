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

# class LineCollectionRangeBase


## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### ~LineCollectionRangeBase

```cpp
public void ~LineCollectionRangeBase()
```


### operator!=

```cpp
public bool operator!=(const LineCollectionRangeBase & )
```


### operator++

```cpp
public void operator++()
```


### set_active_only

```cpp
public void set_active_only()
```


### LineCollectionRangeBase

```cpp
protected void LineCollectionRangeBase(const LineCollections<> & collections)
```


### LineCollectionRangeBase

```cpp
protected void LineCollectionRangeBase(LineCollectionRangeBase && other)
```


### LineCollectionRangeBase

```cpp
protected void LineCollectionRangeBase(const LineCollectionRangeBase & other)
```




