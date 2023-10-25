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

# class StratigraphicUnitRange


```cpp
Inherits from StratigraphicUnitRangeBase
```



## Functions

### StratigraphicUnitRange

```cpp
public void StratigraphicUnitRange(const StratigraphicUnits<> & stratigraphic_units)
```


### begin

```cpp
public const StratigraphicUnitRange & begin()
```


### end

```cpp
public const StratigraphicUnitRange & end()
```


### operator*

```cpp
public const StratigraphicUnit<dimension> & operator*()
```




