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

# class InternalCornerRange


```cpp
Inherits from InternalRangeIterator
```



## Functions

### InternalCornerRange

```cpp
public void InternalCornerRange(const Section & section, const Surface2D & surface)
```


### InternalCornerRange

```cpp
public void InternalCornerRange(const InternalCornerRange & range)
```


### ~InternalCornerRange

```cpp
public void ~InternalCornerRange()
```


### begin

```cpp
public const InternalCornerRange & begin()
```


### end

```cpp
public const InternalCornerRange & end()
```


### operator++

```cpp
public void operator++()
```


### operator*

```cpp
public const Corner2D & operator*()
```




