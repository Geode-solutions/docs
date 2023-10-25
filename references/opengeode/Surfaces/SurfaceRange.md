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

# class SurfaceRange


```cpp
Inherits from SurfaceRangeBase
```



## Functions

### SurfaceRange

```cpp
public void SurfaceRange(const Surfaces<> & surfaces)
```


### SurfaceRange

```cpp
public void SurfaceRange(const SurfaceRange & range)
```


### ~SurfaceRange

```cpp
public void ~SurfaceRange()
```


### begin

```cpp
public const SurfaceRange & begin()
```


### end

```cpp
public const SurfaceRange & end()
```


### operator*

```cpp
public const Surface<dimension> & operator*()
```




