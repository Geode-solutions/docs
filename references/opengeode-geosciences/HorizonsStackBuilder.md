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

# class HorizonsStackBuilder


```cpp
Inherits from StratigraphicRelationshipsBuilder, HorizonsBuilder<3U>, StratigraphicUnitsBuilder<3U>, IdentifierBuilder
```



# class HorizonsStackBuilder


```cpp
Inherits from StratigraphicRelationshipsBuilder, HorizonsBuilder<2U>, StratigraphicUnitsBuilder<2U>, IdentifierBuilder
```



# class HorizonsStackBuilder


 Class managing modifications of a HorizonsStack**extends** **extends** **extends** 



```cpp
Inherits from StratigraphicRelationshipsBuilder, HorizonsBuilder<dimension>, StratigraphicUnitsBuilder<dimension>, IdentifierBuilder
```



## Records

InsertedHorizonInfo



## Functions

### HorizonsStackBuilder

```cpp
public void HorizonsStackBuilder<>(const HorizonsStackBuilder<> & )
```


### operator=

```cpp
public HorizonsStackBuilder<> & operator=(const HorizonsStackBuilder<> & )
```


### HorizonsStackBuilder

```cpp
public void HorizonsStackBuilder<>(HorizonsStack<dimension> & horizons_stack)
```


### HorizonsStackBuilder

```cpp
public void HorizonsStackBuilder<>(HorizonsStackBuilder<dimension> && )
```


### copy

```cpp
public ModelCopyMapping copy(const HorizonsStack<dimension> & horizons_stack)
```


### copy_components

```cpp
public ModelCopyMapping copy_components(const HorizonsStack<dimension> & horizons_stack)
```


### copy

```cpp
public void copy(ModelCopyMapping & mapping, const HorizonsStack<dimension> & horizons_stack)
```


 Copies the stack with the component uuids given by the mapping. Components for which the mapping does not exist are created with a new uuid and added to the mapping.

### copy_components

```cpp
public void copy_components(ModelCopyMapping & mapping, const HorizonsStack<dimension> & horizons_stack)
```


 Copies the components with the uuid given by the mapping. If the mapping does not exist, creates a component with a new uuid and adds it to the mapping. This does not copy the relations between the components.

### add_horizon

```cpp
public const uuid & add_horizon()
```


### add_horizon

```cpp
public void add_horizon(uuid horizon_id)
```


### add_stratigraphic_unit

```cpp
public const uuid & add_stratigraphic_unit()
```


### add_stratigraphic_unit

```cpp
public void add_stratigraphic_unit(uuid stratigraphic_unit_id)
```


### add_horizon_in_stratigraphic_unit

```cpp
public InsertedHorizonInfo add_horizon_in_stratigraphic_unit(const StratigraphicUnit<dimension> & strati_unit)
```


### set_horizon_above

```cpp
public void set_horizon_above(const Horizon<dimension> & horizon_above, const StratigraphicUnit<dimension> & strati_unit_under)
```


### set_horizon_under

```cpp
public void set_horizon_under(const Horizon<dimension> & horizon_under, const StratigraphicUnit<dimension> & strati_unit_above)
```


### remove_horizon

```cpp
public void remove_horizon(const Horizon<dimension> & horizon)
```


### remove_stratigraphic_unit

```cpp
public void remove_stratigraphic_unit(const StratigraphicUnit<dimension> & stratigraphic_unit)
```


### compute_top_and_bottom_horizons

```cpp
public void compute_top_and_bottom_horizons()
```




