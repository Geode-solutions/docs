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

# class IncidenceRangeIterator


 Range to iterate on all incidences of one component



## Functions

### IncidenceRangeIterator

```cpp
public void IncidenceRangeIterator(const Relationships & relationships, const uuid & component_id)
```


### IncidenceRangeIterator

```cpp
public void IncidenceRangeIterator(IncidenceRangeIterator && other)
```


### IncidenceRangeIterator

```cpp
public void IncidenceRangeIterator(const IncidenceRangeIterator & other)
```


### ~IncidenceRangeIterator

```cpp
public void ~IncidenceRangeIterator()
```


### operator!=

```cpp
public bool operator!=(const IncidenceRangeIterator & )
```


### operator++

```cpp
public void operator++()
```


### operator*

```cpp
public const ComponentID & operator*()
```




