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

# class ItemLineRange


```cpp
Inherits from ItemRangeIterator
```



## Functions

### ItemLineRange

```cpp
public void ItemLineRange(const Section & section, const ModelBoundary2D & boundary)
```


### ItemLineRange

```cpp
public void ItemLineRange(const Section & section, const LineCollection2D & boundary)
```


### ItemLineRange

```cpp
public void ItemLineRange(const ItemLineRange & range)
```


### ~ItemLineRange

```cpp
public void ~ItemLineRange()
```


### begin

```cpp
public const ItemLineRange & begin()
```


### end

```cpp
public const ItemLineRange & end()
```


### operator*

```cpp
public const Line2D & operator*()
```




