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

# class BlockCollectionRange


```cpp
Inherits from BlockCollectionRangeBase
```



## Functions

### BlockCollectionRange

```cpp
public void BlockCollectionRange(const BlockCollections<> & boundaries)
```


### BlockCollectionRange

```cpp
public void BlockCollectionRange(const BlockCollectionRange & range)
```


### ~BlockCollectionRange

```cpp
public void ~BlockCollectionRange()
```


### begin

```cpp
public const BlockCollectionRange & begin()
```


### end

```cpp
public const BlockCollectionRange & end()
```


### operator*

```cpp
public const BlockCollection<dimension> & operator*()
```




