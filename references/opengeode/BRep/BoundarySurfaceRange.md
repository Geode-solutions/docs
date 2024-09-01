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

# class BoundarySurfaceRange


```cpp
Inherits from BoundaryRangeIterator
```



## Functions

### BoundarySurfaceRange

```cpp
public void BoundarySurfaceRange(const BRep & brep, const Block3D & block)
```


### BoundarySurfaceRange

```cpp
public void BoundarySurfaceRange(const BoundarySurfaceRange & range)
```


### ~BoundarySurfaceRange

```cpp
public void ~BoundarySurfaceRange()
```


### begin

```cpp
public const BoundarySurfaceRange & begin()
```


### end

```cpp
public const BoundarySurfaceRange & end()
```


### operator*

```cpp
public const Surface3D & operator*()
```




