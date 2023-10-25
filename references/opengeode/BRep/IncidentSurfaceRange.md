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

# class IncidentSurfaceRange


```cpp
Inherits from IncidenceRangeIterator
```



## Functions

### IncidentSurfaceRange

```cpp
public void IncidentSurfaceRange(const BRep & brep, const Line3D & line)
```


### IncidentSurfaceRange

```cpp
public void IncidentSurfaceRange(const IncidentSurfaceRange & range)
```


### ~IncidentSurfaceRange

```cpp
public void ~IncidentSurfaceRange()
```


### begin

```cpp
public const IncidentSurfaceRange & begin()
```


### end

```cpp
public const IncidentSurfaceRange & end()
```


### operator*

```cpp
public const Surface3D & operator*()
```




