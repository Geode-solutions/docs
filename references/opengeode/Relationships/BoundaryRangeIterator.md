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

# class BoundaryRangeIterator


 Range to iterate on all boundaries of one component



## Records

Impl



## Functions

### BoundaryRangeIterator

```cpp
public void BoundaryRangeIterator(const Relationships & relationships, const uuid & component_id)
```


### BoundaryRangeIterator

```cpp
public void BoundaryRangeIterator(BoundaryRangeIterator && other)
```


### BoundaryRangeIterator

```cpp
public void BoundaryRangeIterator(const BoundaryRangeIterator & other)
```


### ~BoundaryRangeIterator

```cpp
public void ~BoundaryRangeIterator()
```


### operator!=

```cpp
public bool operator!=(const BoundaryRangeIterator & )
```


### operator++

```cpp
public void operator++()
```


### operator*

```cpp
public const ComponentID & operator*()
```




