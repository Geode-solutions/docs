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

# class StratigraphicUnitOrderedRange


## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### StratigraphicUnitOrderedRange

```cpp
public void StratigraphicUnitOrderedRange(const HorizonsStack<> & horizons_stack, RANGEORDER range_order)
```


### StratigraphicUnitOrderedRange

```cpp
public void StratigraphicUnitOrderedRange(StratigraphicUnitOrderedRange && other)
```


### StratigraphicUnitOrderedRange

```cpp
public void StratigraphicUnitOrderedRange(const StratigraphicUnitOrderedRange & other)
```


### ~StratigraphicUnitOrderedRange

```cpp
public void ~StratigraphicUnitOrderedRange()
```


### operator!=

```cpp
public bool operator!=(const StratigraphicUnitOrderedRange & )
```


### operator++

```cpp
public void operator++()
```


### begin

```cpp
public const StratigraphicUnitOrderedRange & begin()
```


### end

```cpp
public const StratigraphicUnitOrderedRange & end()
```


### operator*

```cpp
public const StratigraphicUnit<dimension> & operator*()
```




