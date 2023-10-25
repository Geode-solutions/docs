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

# class StratigraphicUnit


 Geological component describing a StratigraphicUnit.



```cpp
Inherits from Component<dimension>
```



## Functions

### StratigraphicUnit

```cpp
public void StratigraphicUnit<dimension>(const StratigraphicUnit<dimension> & )
```


### operator=

```cpp
public StratigraphicUnit<dimension> & operator=(const StratigraphicUnit<dimension> & )
```


### StratigraphicUnit

```cpp
public void StratigraphicUnit<dimension>(StratigraphicUnit<dimension> && other)
```


### ~StratigraphicUnit

```cpp
public void ~StratigraphicUnit<dimension>()
```


### component_type_static

```cpp
public NamedType component_type_static()
```


### component_type

```cpp
public NamedType component_type()
```


### component_id

```cpp
public ComponentID component_id()
```


### StratigraphicUnit

```cpp
public void StratigraphicUnit<dimension>(StratigraphicUnitsKey )
```


### set_stratigraphic_unit_name

```cpp
public void set_stratigraphic_unit_name(string_view name, StratigraphicUnitsBuilderKey )
```




# class StratigraphicUnit


```cpp
Inherits from Component<2U>
```



# class StratigraphicUnit


```cpp
Inherits from Component<3U>
```



