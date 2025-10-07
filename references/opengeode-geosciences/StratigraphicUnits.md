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

# class StratigraphicUnits


# class StratigraphicUnits


# class StratigraphicUnits


## Records

StratigraphicUnitRangeBase

StratigraphicUnitRange



## Functions

### StratigraphicUnits

```cpp
public void StratigraphicUnits<>(const StratigraphicUnits<> & )
```


### operator=

```cpp
public StratigraphicUnits<> & operator=(const StratigraphicUnits<> & )
```


### ~StratigraphicUnits

```cpp
public void ~StratigraphicUnits<>()
```


### nb_stratigraphic_units

```cpp
public index_t nb_stratigraphic_units()
```


### nb_active_stratigraphic_units

```cpp
public index_t nb_active_stratigraphic_units()
```


### has_stratigraphic_unit

```cpp
public bool has_stratigraphic_unit(const uuid & id)
```


### stratigraphic_unit

```cpp
public const StratigraphicUnit<dimension> & stratigraphic_unit(const uuid & id)
```


### stratigraphic_units

```cpp
public StratigraphicUnitRange stratigraphic_units()
```


### active_stratigraphic_units

```cpp
public StratigraphicUnitRange active_stratigraphic_units()
```


### components

```cpp
public StratigraphicUnitRange components()
```


### has_component

```cpp
public bool has_component(const uuid & id)
```


### component

```cpp
public const StratigraphicUnit<dimension> & component(const uuid & id)
```


### save_stratigraphic_units

```cpp
public void save_stratigraphic_units(basic_string_view directory)
```


### StratigraphicUnits

```cpp
protected void StratigraphicUnits<>()
```


### StratigraphicUnits

```cpp
protected void StratigraphicUnits<>(StratigraphicUnits<> && other)
```


### operator=

```cpp
protected StratigraphicUnits<dimension> & operator=(StratigraphicUnits<dimension> && other)
```


### create_stratigraphic_unit

```cpp
public const uuid & create_stratigraphic_unit(StratigraphicUnitsBuilderKey key)
```


### create_stratigraphic_unit

```cpp
public void create_stratigraphic_unit(uuid stratigraphic_unit_id, StratigraphicUnitsBuilderKey key)
```


### delete_stratigraphic_unit

```cpp
public void delete_stratigraphic_unit(const StratigraphicUnit<dimension> & stratigraphic_unit, StratigraphicUnitsBuilderKey key)
```


### load_stratigraphic_units

```cpp
public void load_stratigraphic_units(basic_string_view directory, StratigraphicUnitsBuilderKey key)
```


### modifiable_stratigraphic_units

```cpp
public ModifiableStratigraphicUnitRange modifiable_stratigraphic_units(StratigraphicUnitsBuilderKey key)
```


### modifiable_stratigraphic_unit

```cpp
public StratigraphicUnit<dimension> & modifiable_stratigraphic_unit(const uuid & id, StratigraphicUnitsBuilderKey key)
```




