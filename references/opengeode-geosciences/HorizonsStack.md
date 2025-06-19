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



## Members

```cpp
protected PImpl impl_

```



# class HorizonsStack


 A HorizonsStack is a set of Horizons and StratigraphicUnits, linked by relations defining how they are stacked (which unit is above and under which horizon, and inversely).



```cpp
Inherits from StratigraphicRelationships, Horizons<dimension>, StratigraphicUnits<dimension>, Identifier
```



## Members

```cpp
protected geode::PImpl<Impl> impl_

```



## Records

HorizonOrderedRange

StratigraphicUnitOrderedRange

Impl



## Functions

### HorizonsStack

```cpp
public void HorizonsStack<>()
```


### HorizonsStack

```cpp
public void HorizonsStack<>(HorizonsStack<dimension> && horizons_stack)
```


### ~HorizonsStack

```cpp
public void ~HorizonsStack<>()
```


### operator=

```cpp
public HorizonsStack<dimension> & operator=(HorizonsStack<dimension> && other)
```


### clone

```cpp
public HorizonsStack clone()
```


### native_extension_static

```cpp
public basic_string_view native_extension_static()
```


### native_extension

```cpp
public basic_string_view native_extension()
```


### top_horizon

```cpp
public std::optional<uuid> top_horizon()
```


### bottom_horizon

```cpp
public std::optional<uuid> bottom_horizon()
```


### bottom_to_top_horizons

```cpp
public HorizonOrderedRange bottom_to_top_horizons()
```


### bottom_to_top_units

```cpp
public StratigraphicUnitOrderedRange bottom_to_top_units()
```


### top_to_bottom_horizons

```cpp
public HorizonOrderedRange top_to_bottom_horizons()
```


### top_to_bottom_units

```cpp
public StratigraphicUnitOrderedRange top_to_bottom_units()
```


### is_conformal_above

```cpp
public bool is_conformal_above(const uuid & component)
```


### is_conformal_under

```cpp
public bool is_conformal_under(const uuid & component)
```


### string

```cpp
public basic_string string()
```


### compute_top_and_bottom_horizons

```cpp
public void compute_top_and_bottom_horizons(HorizonsStackBuilderKey key)
```


### set_top_horizon

```cpp
public void set_top_horizon(const uuid & horizon_id, HorizonsStackBuilderKey key)
```


### set_bottom_horizon

```cpp
public void set_bottom_horizon(const uuid & horizon_id, HorizonsStackBuilderKey key)
```




## Enums

| enum class RANGEORDER |

--

| bottom_to_top |
| top_to_bottom |





# class HorizonsStack


```cpp
Inherits from StratigraphicRelationships, Horizons<3U>, StratigraphicUnits<3U>, Identifier
```



## Members

```cpp
protected PImpl impl_

```



