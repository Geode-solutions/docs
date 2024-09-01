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

# class LineCollectionRange


```cpp
Inherits from LineCollectionRangeBase
```



## Functions

### LineCollectionRange

```cpp
public void LineCollectionRange(const LineCollections<> & boundaries)
```


### LineCollectionRange

```cpp
public void LineCollectionRange(const LineCollectionRange & range)
```


### ~LineCollectionRange

```cpp
public void ~LineCollectionRange()
```


### begin

```cpp
public const LineCollectionRange & begin()
```


### end

```cpp
public const LineCollectionRange & end()
```


### operator*

```cpp
public const LineCollection<dimension> & operator*()
```




