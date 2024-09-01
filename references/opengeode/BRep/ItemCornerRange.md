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

# class ItemCornerRange


```cpp
Inherits from ItemRangeIterator
```



## Functions

### ItemCornerRange

```cpp
public void ItemCornerRange(const BRep & brep, const CornerCollection3D & boundary)
```


### ItemCornerRange

```cpp
public void ItemCornerRange(const ItemCornerRange & range)
```


### ~ItemCornerRange

```cpp
public void ~ItemCornerRange()
```


### begin

```cpp
public const ItemCornerRange & begin()
```


### end

```cpp
public const ItemCornerRange & end()
```


### operator*

```cpp
public const Corner3D & operator*()
```




