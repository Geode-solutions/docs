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

# class BoundaryLineRange


```cpp
Inherits from BoundaryRangeIterator
```



## Functions

### BoundaryLineRange

```cpp
public void BoundaryLineRange(const Section & section, const Surface2D & surface)
```


### BoundaryLineRange

```cpp
public void BoundaryLineRange(const BoundaryLineRange & range)
```


### ~BoundaryLineRange

```cpp
public void ~BoundaryLineRange()
```


### begin

```cpp
public const BoundaryLineRange & begin()
```


### end

```cpp
public const BoundaryLineRange & end()
```


### operator*

```cpp
public const Line2D & operator*()
```




