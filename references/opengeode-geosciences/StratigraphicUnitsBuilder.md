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

# class StratigraphicUnitsBuilder


## Functions

### load_stratigraphic_units

```cpp
public void load_stratigraphic_units(string_view directory)
```


### set_stratigraphic_unit_name

```cpp
public void set_stratigraphic_unit_name(const uuid & id, string_view name)
```


### StratigraphicUnitsBuilder

```cpp
protected void StratigraphicUnitsBuilder<dimension>(StratigraphicUnits<dimension> & stratigraphic_units)
```


### create_stratigraphic_unit

```cpp
protected const uuid & create_stratigraphic_unit()
```


### create_stratigraphic_unit

```cpp
protected void create_stratigraphic_unit(uuid stratigraphic_unit_id)
```


### delete_stratigraphic_unit

```cpp
protected void delete_stratigraphic_unit(const StratigraphicUnit<dimension> & stratigraphic_unit)
```




# class StratigraphicUnitsBuilder


# class StratigraphicUnitsBuilder


