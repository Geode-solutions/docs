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

# class ModelBoundaryRange


```cpp
Inherits from ModelBoundaryRangeBase
```



## Functions

### ModelBoundaryRange

```cpp
public void ModelBoundaryRange(const ModelBoundaries<> & boundaries)
```


### ModelBoundaryRange

```cpp
public void ModelBoundaryRange(const ModelBoundaryRange & range)
```


### ~ModelBoundaryRange

```cpp
public void ~ModelBoundaryRange()
```


### begin

```cpp
public const ModelBoundaryRange & begin()
```


### end

```cpp
public const ModelBoundaryRange & end()
```


### operator*

```cpp
public const ModelBoundary<dimension> & operator*()
```




