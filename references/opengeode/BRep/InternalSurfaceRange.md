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

# class InternalSurfaceRange


```cpp
Inherits from InternalRangeIterator
```



## Functions

### InternalSurfaceRange

```cpp
public void InternalSurfaceRange(const BRep & brep, const Block3D & block)
```


### InternalSurfaceRange

```cpp
public void InternalSurfaceRange(const InternalSurfaceRange & range)
```


### ~InternalSurfaceRange

```cpp
public void ~InternalSurfaceRange()
```


### begin

```cpp
public const InternalSurfaceRange & begin()
```


### end

```cpp
public const InternalSurfaceRange & end()
```


### operator++

```cpp
public void operator++()
```


### operator*

```cpp
public const Surface3D & operator*()
```




