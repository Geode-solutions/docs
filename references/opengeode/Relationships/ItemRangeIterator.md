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

# class ItemRangeIterator


 Range to iterate on all items of one component



## Functions

### ItemRangeIterator

```cpp
public void ItemRangeIterator(const Relationships & relationships, const uuid & component_id)
```


### ItemRangeIterator

```cpp
public void ItemRangeIterator(ItemRangeIterator && other)
```


### ItemRangeIterator

```cpp
public void ItemRangeIterator(const ItemRangeIterator & other)
```


### ~ItemRangeIterator

```cpp
public void ~ItemRangeIterator()
```


### operator!=

```cpp
public bool operator!=(const ItemRangeIterator & )
```


### operator++

```cpp
public void operator++()
```


### operator*

```cpp
public const ComponentID & operator*()
```




