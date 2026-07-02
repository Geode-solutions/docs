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

# class EmbeddingLineRange


```cpp
Inherits from EmbeddingRangeIterator
```



## Functions

### EmbeddingLineRange

```cpp
public void EmbeddingLineRange(const BRep & brep, const Corner3D & corner)
```


### EmbeddingLineRange

```cpp
public void EmbeddingLineRange(const EmbeddingLineRange & range)
```


### ~EmbeddingLineRange

```cpp
public void ~EmbeddingLineRange()
```


### begin

```cpp
public const EmbeddingLineRange & begin()
```


### end

```cpp
public const EmbeddingLineRange & end()
```


### operator++

```cpp
public void operator++()
```


### operator*

```cpp
public const Line3D & operator*()
```




