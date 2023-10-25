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

# class RelationRangeIterator


 Range to iterate on all relations of one component



## Records

Impl



## Functions

### RelationRangeIterator

```cpp
public void RelationRangeIterator(const Relationships & relationships, const uuid & component_id)
```


### RelationRangeIterator

```cpp
public void RelationRangeIterator(RelationRangeIterator && other)
```


### RelationRangeIterator

```cpp
public void RelationRangeIterator(const RelationRangeIterator & other)
```


### ~RelationRangeIterator

```cpp
public void ~RelationRangeIterator()
```


### operator!=

```cpp
public bool operator!=(const RelationRangeIterator & )
```


### operator++

```cpp
public void operator++()
```


### operator*

```cpp
public const ComponentID & operator*()
```




