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

# class FaultBlockItemRange


```cpp
Inherits from ItemRangeIterator
```



## Functions

### FaultBlockItemRange

```cpp
public void FaultBlockItemRange(const CrossSection & cross_section, const FaultBlock2D & fault_block)
```


### FaultBlockItemRange

```cpp
public void FaultBlockItemRange(const FaultBlockItemRange & range)
```


### ~FaultBlockItemRange

```cpp
public void ~FaultBlockItemRange()
```


### begin

```cpp
public const FaultBlockItemRange & begin()
```


### end

```cpp
public const FaultBlockItemRange & end()
```


### operator*

```cpp
public const Surface2D & operator*()
```




