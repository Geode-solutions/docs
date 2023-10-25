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

# class HorizonsStack


```cpp
Inherits from StratigraphicRelationships, Horizons<2U>, StratigraphicUnits<2U>, Identifier
```



# class HorizonsStack


 A HorizonsStack is a set of Horizons and StratigraphicUnits, linked by relations defining how they are stacked (which unit is above and under which horizon, and inversely).



```cpp
Inherits from StratigraphicRelationships, Horizons<dimension>, StratigraphicUnits<dimension>, Identifier
```



## Functions

### HorizonsStack

```cpp
public void HorizonsStack<>()
```


### HorizonsStack

```cpp
public void HorizonsStack<>(HorizonsStack<> && horizons_stack)
```


### ~HorizonsStack

```cpp
public void ~HorizonsStack<>()
```


### operator=

```cpp
public HorizonsStack<dimension> & operator=(HorizonsStack<dimension> && other)
```


### native_extension_static

```cpp
public string_view native_extension_static()
```


### native_extension

```cpp
public string_view native_extension()
```




# class HorizonsStack


```cpp
Inherits from StratigraphicRelationships, Horizons<3U>, StratigraphicUnits<3U>, Identifier
```



