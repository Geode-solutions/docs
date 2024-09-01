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

# class IncidentBlockRange


```cpp
Inherits from IncidenceRangeIterator
```



## Functions

### IncidentBlockRange

```cpp
public void IncidentBlockRange(const BRep & brep, const Surface3D & surface)
```


### IncidentBlockRange

```cpp
public void IncidentBlockRange(const IncidentBlockRange & range)
```


### ~IncidentBlockRange

```cpp
public void ~IncidentBlockRange()
```


### begin

```cpp
public const IncidentBlockRange & begin()
```


### end

```cpp
public const IncidentBlockRange & end()
```


### operator*

```cpp
public const Block3D & operator*()
```




