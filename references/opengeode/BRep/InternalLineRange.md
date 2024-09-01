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

# class InternalLineRange


```cpp
Inherits from InternalRangeIterator
```



## Functions

### InternalLineRange

```cpp
public void InternalLineRange(const BRep & brep, const Surface3D & surface)
```


### InternalLineRange

```cpp
public void InternalLineRange(const BRep & brep, const Block3D & block)
```


### InternalLineRange

```cpp
public void InternalLineRange(const InternalLineRange & range)
```


### ~InternalLineRange

```cpp
public void ~InternalLineRange()
```


### begin

```cpp
public const InternalLineRange & begin()
```


### end

```cpp
public const InternalLineRange & end()
```


### operator++

```cpp
public void operator++()
```


### operator*

```cpp
public const Line3D & operator*()
```




