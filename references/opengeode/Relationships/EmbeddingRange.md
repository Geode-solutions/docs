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

# class EmbeddingRange


```cpp
Inherits from EmbeddingRangeIterator
```



## Functions

### EmbeddingRange

```cpp
public void EmbeddingRange(const Relationships & relationships, const uuid & component_id)
```


### begin

```cpp
public const EmbeddingRange & begin()
```


### end

```cpp
public const EmbeddingRange & end()
```




