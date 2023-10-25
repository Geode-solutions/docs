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

# class InternalRangeIterator


 Range to iterate on all internal components of one component



## Functions

### InternalRangeIterator

```cpp
public void InternalRangeIterator(const Relationships & relationships, const uuid & component_id)
```


### InternalRangeIterator

```cpp
public void InternalRangeIterator(InternalRangeIterator && other)
```


### InternalRangeIterator

```cpp
public void InternalRangeIterator(const InternalRangeIterator & other)
```


### ~InternalRangeIterator

```cpp
public void ~InternalRangeIterator()
```


### operator!=

```cpp
public bool operator!=(const InternalRangeIterator & )
```


### operator++

```cpp
public void operator++()
```


### operator*

```cpp
public const ComponentID & operator*()
```




