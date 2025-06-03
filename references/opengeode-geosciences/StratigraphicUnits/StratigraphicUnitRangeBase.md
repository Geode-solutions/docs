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

# class StratigraphicUnitRangeBase


## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

Impl



## Functions

### ~StratigraphicUnitRangeBase

```cpp
public void ~StratigraphicUnitRangeBase()
```


### operator!=

```cpp
public bool operator!=(const StratigraphicUnitRangeBase & )
```


### operator++

```cpp
public void operator++()
```


### set_active_only

```cpp
public void set_active_only()
```


### StratigraphicUnitRangeBase

```cpp
protected void StratigraphicUnitRangeBase(const StratigraphicUnits<> & stratigraphic_units)
```


### StratigraphicUnitRangeBase

```cpp
protected void StratigraphicUnitRangeBase(StratigraphicUnitRangeBase && other)
```


### StratigraphicUnitRangeBase

```cpp
protected void StratigraphicUnitRangeBase(const StratigraphicUnitRangeBase & other)
```




