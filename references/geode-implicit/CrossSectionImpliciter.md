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
public void CrossSectionImpliciter(const CrossSectionImpliciter & )
```


### operator=

```cpp
public CrossSectionImpliciter & operator=(const CrossSectionImpliciter & )
```


### native_extension_static

```cpp
public static std::string_view native_extension_static()
```


### native_extension

```cpp
public std::string_view native_extension()
```


### CrossSectionImpliciter

```cpp
public void CrossSectionImpliciter(CrossSection && cross_section, HorizonsStack2D && horizons_stack)
```


### CrossSectionImpliciter

```cpp
public void CrossSectionImpliciter(CrossSectionImpliciter && other)
```


### operator=

```cpp
public CrossSectionImpliciter & operator=(CrossSectionImpliciter && other)
```


### ~CrossSectionImpliciter

```cpp
public void ~CrossSectionImpliciter()
```


### cross_section

```cpp
public const CrossSection & cross_section()
```


### horizons_stack

```cpp
public const HorizonsStack2D & horizons_stack()
```


### set_stratigraphic_unit_thickness

```cpp
public void set_stratigraphic_unit_thickness(const StratigraphicUnit2D & strati_unit, double thickness)
```


### add_horizon_data_points

```cpp
public void add_horizon_data_points(const Horizon2D & horizon, const PointSet2D & pointset, std::string_view weight_attribute_name)
```


### add_horizon_data_curve

```cpp
public void add_horizon_data_curve(const Horizon2D & horizon, const EdgedCurve2D & data_curve, std::string_view weight_attribute_name)
```


### add_horizon_tangential_directional_data

```cpp
public void add_horizon_tangential_directional_data(const Horizon2D & horizon, const PointSet2D & tangential_data, const DirectionalDataAttributes & attribute_names)
```


### add_horizon_normal_directional_data

```cpp
public void add_horizon_normal_directional_data(const Horizon2D & horizon, const PointSet2D & normal_data, const DirectionalDataAttributes & attribute_names)
```


### build

```cpp
public ImplicitCrossSection build(const CrossSectionImplicitationParameters & computation_parameters)
```




