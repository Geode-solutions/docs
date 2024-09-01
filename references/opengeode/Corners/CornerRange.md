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

# class CornerRange


 Class for range-based iteration on unmodifiable Corners



```cpp
Inherits from CornerRangeBase
```



## Functions

### CornerRange

```cpp
public void CornerRange(const Corners<> & corners)
```


### CornerRange

```cpp
public void CornerRange(const CornerRange & range)
```


### ~CornerRange

```cpp
public void ~CornerRange()
```


### begin

```cpp
public const CornerRange & begin()
```


### end

```cpp
public const CornerRange & end()
```


### operator*

```cpp
public const Corner<dimension> & operator*()
```




