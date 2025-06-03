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

# class ModelBoundaryRangeBase


## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### ~ModelBoundaryRangeBase

```cpp
public void ~ModelBoundaryRangeBase()
```


### operator!=

```cpp
public bool operator!=(const ModelBoundaryRangeBase & )
```


### operator++

```cpp
public void operator++()
```


### set_active_only

```cpp
public void set_active_only()
```


### ModelBoundaryRangeBase

```cpp
protected void ModelBoundaryRangeBase(const ModelBoundaries<> & boundaries)
```


### ModelBoundaryRangeBase

```cpp
protected void ModelBoundaryRangeBase(ModelBoundaryRangeBase && other)
```


### ModelBoundaryRangeBase

```cpp
protected void ModelBoundaryRangeBase(const ModelBoundaryRangeBase & other)
```




