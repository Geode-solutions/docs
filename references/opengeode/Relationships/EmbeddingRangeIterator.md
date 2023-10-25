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

# class EmbeddingRangeIterator


 Range to iterate on all embeddings of one component



## Functions

### EmbeddingRangeIterator

```cpp
public void EmbeddingRangeIterator(const Relationships & relationships, const uuid & component_id)
```


### EmbeddingRangeIterator

```cpp
public void EmbeddingRangeIterator(EmbeddingRangeIterator && other)
```


### EmbeddingRangeIterator

```cpp
public void EmbeddingRangeIterator(const EmbeddingRangeIterator & other)
```


### ~EmbeddingRangeIterator

```cpp
public void ~EmbeddingRangeIterator()
```


### operator!=

```cpp
public bool operator!=(const EmbeddingRangeIterator & )
```


### operator++

```cpp
public void operator++()
```


### operator*

```cpp
public const ComponentID & operator*()
```




