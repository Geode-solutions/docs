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

# class EmbeddingSurfaceRange


```cpp
Inherits from EmbeddingRangeIterator
```



## Functions

### EmbeddingSurfaceRange

```cpp
public void EmbeddingSurfaceRange(const BRep & brep, const Corner3D & corner)
```


### EmbeddingSurfaceRange

```cpp
public void EmbeddingSurfaceRange(const BRep & brep, const Line3D & line)
```


### EmbeddingSurfaceRange

```cpp
public void EmbeddingSurfaceRange(const EmbeddingSurfaceRange & range)
```


### ~EmbeddingSurfaceRange

```cpp
public void ~EmbeddingSurfaceRange()
```


### begin

```cpp
public const EmbeddingSurfaceRange & begin()
```


### end

```cpp
public const EmbeddingSurfaceRange & end()
```


### operator++

```cpp
public void operator++()
```


### operator*

```cpp
public const Surface3D & operator*()
```




