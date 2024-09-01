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

# class IncidentLineRange


```cpp
Inherits from IncidenceRangeIterator
```



## Functions

### IncidentLineRange

```cpp
public void IncidentLineRange(const Section & section, const Corner2D & corner)
```


### IncidentLineRange

```cpp
public void IncidentLineRange(const IncidentLineRange & range)
```


### ~IncidentLineRange

```cpp
public void ~IncidentLineRange()
```


### begin

```cpp
public const IncidentLineRange & begin()
```


### end

```cpp
public const IncidentLineRange & end()
```


### operator*

```cpp
public const Line2D & operator*()
```




