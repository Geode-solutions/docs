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

# class ItemSurfaceRange


```cpp
Inherits from ItemRangeIterator
```



## Functions

### ItemSurfaceRange

```cpp
public void ItemSurfaceRange(const BRep & brep, const ModelBoundary3D & boundary)
```


### ItemSurfaceRange

```cpp
public void ItemSurfaceRange(const BRep & brep, const SurfaceCollection3D & collection)
```


### ItemSurfaceRange

```cpp
public void ItemSurfaceRange(const ItemSurfaceRange & range)
```


### ~ItemSurfaceRange

```cpp
public void ~ItemSurfaceRange()
```


### begin

```cpp
public const ItemSurfaceRange & begin()
```


### end

```cpp
public const ItemSurfaceRange & end()
```


### operator*

```cpp
public const Surface3D & operator*()
```




