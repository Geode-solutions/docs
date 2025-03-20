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

# class CrossSectionImpliciter


## Functions

### CrossSectionImpliciter

```cpp
public void CrossSectionImpliciter(CrossSection && cross_section)
```


### CrossSectionImpliciter

```cpp
public void CrossSectionImpliciter(CrossSectionImpliciter && other)
```


### ~CrossSectionImpliciter

```cpp
public void ~CrossSectionImpliciter()
```


### native_extension_static

```cpp
public basic_string_view native_extension_static()
```


### native_extension

```cpp
public basic_string_view native_extension()
```


### cross_section

```cpp
public const CrossSection & cross_section()
```


### horizons_stack

```cpp
public const HorizonsStack2D & horizons_stack()
```


### horizons_stack_builder

```cpp
public HorizonsStackBuilder horizons_stack_builder()
```


### set_stratigraphic_unit_thickness

```cpp
public void set_stratigraphic_unit_thickness(const StratigraphicUnit2D & strati_unit, double thickness)
```


### add_horizon_data_pointset_in_surface

```cpp
public void add_horizon_data_pointset_in_surface(const Surface2D & surface, const Horizon2D & horizon, const PointSet2D & pointset, double weight)
```


### build

```cpp
public ImplicitCrossSection build(const ImplicitationParameters & computation_parameters)
```




