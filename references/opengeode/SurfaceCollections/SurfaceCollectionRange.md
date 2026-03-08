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

# class SurfaceCollectionRange


```cpp
Inherits from SurfaceCollectionRangeBase
```



## Functions

### SurfaceCollectionRange

```cpp
public void SurfaceCollectionRange(const SurfaceCollections<> & boundaries)
```


### SurfaceCollectionRange

```cpp
public void SurfaceCollectionRange(const SurfaceCollectionRange & range)
```


### ~SurfaceCollectionRange

```cpp
public void ~SurfaceCollectionRange()
```


### begin

```cpp
public const SurfaceCollectionRange & begin()
```


### end

```cpp
public const SurfaceCollectionRange & end()
```


### operator*

```cpp
public const SurfaceCollection<dimension> & operator*()
```




