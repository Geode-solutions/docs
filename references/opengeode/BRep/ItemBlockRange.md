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

# class ItemBlockRange


```cpp
Inherits from ItemRangeIterator
```



## Functions

### ItemBlockRange

```cpp
public void ItemBlockRange(const BRep & brep, const BlockCollection3D & boundary)
```


### ItemBlockRange

```cpp
public void ItemBlockRange(const ItemBlockRange & range)
```


### ~ItemBlockRange

```cpp
public void ~ItemBlockRange()
```


### begin

```cpp
public const ItemBlockRange & begin()
```


### end

```cpp
public const ItemBlockRange & end()
```


### operator*

```cpp
public const Block3D & operator*()
```




