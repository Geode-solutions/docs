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

# class BoundaryCornerRange


```cpp
Inherits from BoundaryRangeIterator
```



## Functions

### BoundaryCornerRange

```cpp
public void BoundaryCornerRange(const BRep & brep, const Line3D & line)
```


### BoundaryCornerRange

```cpp
public void BoundaryCornerRange(const BoundaryCornerRange & range)
```


### ~BoundaryCornerRange

```cpp
public void ~BoundaryCornerRange()
```


### begin

```cpp
public const BoundaryCornerRange & begin()
```


### end

```cpp
public const BoundaryCornerRange & end()
```


### operator*

```cpp
public const Corner3D & operator*()
```




