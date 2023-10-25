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

# class HorizonItemRange


```cpp
Inherits from ItemRangeIterator
```



## Functions

### HorizonItemRange

```cpp
public void HorizonItemRange(const StructuralModel & structural_model, const Horizon3D & horizon)
```


### HorizonItemRange

```cpp
public void HorizonItemRange(const HorizonItemRange & range)
```


### ~HorizonItemRange

```cpp
public void ~HorizonItemRange()
```


### begin

```cpp
public const HorizonItemRange & begin()
```


### end

```cpp
public const HorizonItemRange & end()
```


### operator*

```cpp
public const Surface3D & operator*()
```




