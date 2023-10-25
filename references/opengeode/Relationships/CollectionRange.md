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

# class CollectionRange


```cpp
Inherits from CollectionRangeIterator
```



## Functions

### CollectionRange

```cpp
public void CollectionRange(const Relationships & relationships, const uuid & component_id)
```


### begin

```cpp
public const CollectionRange & begin()
```


### end

```cpp
public const CollectionRange & end()
```




