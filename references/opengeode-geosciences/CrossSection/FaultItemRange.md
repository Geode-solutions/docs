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

# class FaultItemRange


```cpp
Inherits from ItemRangeIterator
```



## Functions

### FaultItemRange

```cpp
public void FaultItemRange(const CrossSection & cross_section, const Fault2D & fault)
```


### FaultItemRange

```cpp
public void FaultItemRange(const FaultItemRange & range)
```


### ~FaultItemRange

```cpp
public void ~FaultItemRange()
```


### begin

```cpp
public const FaultItemRange & begin()
```


### end

```cpp
public const FaultItemRange & end()
```


### operator*

```cpp
public const Line2D & operator*()
```




