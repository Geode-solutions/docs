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

# class CollectionRangeIterator


 Range to iterate on all collections of one component



## Functions

### CollectionRangeIterator

```cpp
public void CollectionRangeIterator(const Relationships & relationships, const uuid & component_id)
```


### CollectionRangeIterator

```cpp
public void CollectionRangeIterator(CollectionRangeIterator && other)
```


### CollectionRangeIterator

```cpp
public void CollectionRangeIterator(const CollectionRangeIterator & other)
```


### ~CollectionRangeIterator

```cpp
public void ~CollectionRangeIterator()
```


### operator!=

```cpp
public bool operator!=(const CollectionRangeIterator & )
```


### operator++

```cpp
public void operator++()
```


### operator*

```cpp
public const ComponentID & operator*()
```




