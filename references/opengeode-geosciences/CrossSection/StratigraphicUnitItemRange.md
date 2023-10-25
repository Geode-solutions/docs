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

# class StratigraphicUnitItemRange


```cpp
Inherits from ItemRangeIterator
```



## Functions

### StratigraphicUnitItemRange

```cpp
public void StratigraphicUnitItemRange(const CrossSection & cross_section, const StratigraphicUnit2D & stratigraphic_unit)
```


### StratigraphicUnitItemRange

```cpp
public void StratigraphicUnitItemRange(const StratigraphicUnitItemRange & range)
```


### ~StratigraphicUnitItemRange

```cpp
public void ~StratigraphicUnitItemRange()
```


### begin

```cpp
public const StratigraphicUnitItemRange & begin()
```


### end

```cpp
public const StratigraphicUnitItemRange & end()
```


### operator*

```cpp
public const Surface2D & operator*()
```




