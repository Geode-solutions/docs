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

# class EmbeddingBlockRange


```cpp
Inherits from EmbeddingRangeIterator
```



## Functions

### EmbeddingBlockRange

```cpp
public void EmbeddingBlockRange(const BRep & brep, const Corner3D & corner)
```


### EmbeddingBlockRange

```cpp
public void EmbeddingBlockRange(const BRep & brep, const Line3D & line)
```


### EmbeddingBlockRange

```cpp
public void EmbeddingBlockRange(const BRep & brep, const Surface3D & surface)
```


### EmbeddingBlockRange

```cpp
public void EmbeddingBlockRange(const EmbeddingBlockRange & range)
```


### ~EmbeddingBlockRange

```cpp
public void ~EmbeddingBlockRange()
```


### begin

```cpp
public const EmbeddingBlockRange & begin()
```


### end

```cpp
public const EmbeddingBlockRange & end()
```


### operator++

```cpp
public void operator++()
```


### operator*

```cpp
public const Block3D & operator*()
```




