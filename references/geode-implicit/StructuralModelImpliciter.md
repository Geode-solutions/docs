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

# class StructuralModelImpliciter


## Functions

### StructuralModelImpliciter

```cpp
public void StructuralModelImpliciter(const StructuralModelImpliciter & )
```


### operator=

```cpp
public StructuralModelImpliciter & operator=(const StructuralModelImpliciter & )
```


### StructuralModelImpliciter

```cpp
public void StructuralModelImpliciter(StructuralModel && structural_model, HorizonsStack3D && horizons_stack)
```


### StructuralModelImpliciter

```cpp
public void StructuralModelImpliciter(StructuralModelImpliciter && other)
```


### operator=

```cpp
public StructuralModelImpliciter & operator=(StructuralModelImpliciter && other)
```


### ~StructuralModelImpliciter

```cpp
public void ~StructuralModelImpliciter()
```


### native_extension_static

```cpp
public basic_string_view native_extension_static()
```


### native_extension

```cpp
public basic_string_view native_extension()
```


### structural_model

```cpp
public const StructuralModel & structural_model()
```


### horizons_stack

```cpp
public const HorizonsStack3D & horizons_stack()
```


### set_stratigraphic_unit_thickness

```cpp
public void set_stratigraphic_unit_thickness(const StratigraphicUnit3D & strati_unit, double thickness)
```


### add_horizon_data_points

```cpp
public void add_horizon_data_points(const Horizon3D & horizon, const PointSet3D & data_points, double weight)
```


### add_horizon_data_curve

```cpp
public void add_horizon_data_curve(const Horizon3D & horizon, const EdgedCurve3D & data_curve, double weight)
```


### add_horizon_data_surface

```cpp
public void add_horizon_data_surface(const Horizon3D & horizon, const SurfaceMesh3D & data_surface, double weight)
```


### add_tangential_directional_data

```cpp
public void add_tangential_directional_data(const PointSet3D & tangential_data, basic_string_view vector_attribute_name, basic_string_view weight_attribute_name)
```


### add_normal_directional_data

```cpp
public void add_normal_directional_data(const PointSet3D & normal_data, basic_string_view vector_attribute_name, basic_string_view weight_attribute_name)
```


### build

```cpp
public ImplicitStructuralModel build(const StructuralModelImplicitationParameters & computation_parameters)
```




