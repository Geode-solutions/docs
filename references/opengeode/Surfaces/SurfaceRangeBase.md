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

# class SurfaceRangeBase


## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### ~SurfaceRangeBase

```cpp
public void ~SurfaceRangeBase()
```


### operator!=

```cpp
public bool operator!=(const SurfaceRangeBase & )
```


### operator++

```cpp
public void operator++()
```


### set_active_only

```cpp
public void set_active_only()
```


### SurfaceRangeBase

```cpp
protected void SurfaceRangeBase(const Surfaces<> & surfaces)
```


### SurfaceRangeBase

```cpp
protected void SurfaceRangeBase(SurfaceRangeBase && other)
```


### SurfaceRangeBase

```cpp
protected void SurfaceRangeBase(const SurfaceRangeBase & other)
```




