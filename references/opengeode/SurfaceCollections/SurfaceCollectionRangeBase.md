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

# class SurfaceCollectionRangeBase


## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### ~SurfaceCollectionRangeBase

```cpp
public void ~SurfaceCollectionRangeBase()
```


### operator!=

```cpp
public bool operator!=(const SurfaceCollectionRangeBase & )
```


### operator++

```cpp
public void operator++()
```


### set_active_only

```cpp
public void set_active_only()
```


### SurfaceCollectionRangeBase

```cpp
protected void SurfaceCollectionRangeBase(const SurfaceCollections<dimension> & collections)
```


### SurfaceCollectionRangeBase

```cpp
protected void SurfaceCollectionRangeBase(SurfaceCollectionRangeBase && other)
```


### SurfaceCollectionRangeBase

```cpp
protected void SurfaceCollectionRangeBase(const SurfaceCollectionRangeBase & other)
```




