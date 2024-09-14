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

# class ImplicitModelFromStructuralModel


## Functions

### ImplicitModelFromStructuralModel

```cpp
public void ImplicitModelFromStructuralModel(const StructuralModel & model, HorizonsStack<3> && horizon_stack)
```


### ImplicitModelFromStructuralModel

```cpp
public void ImplicitModelFromStructuralModel(ImplicitModelFromStructuralModel && other)
```


### ~ImplicitModelFromStructuralModel

```cpp
public void ~ImplicitModelFromStructuralModel()
```


### horizons_stack

```cpp
public const HorizonsStack3D & horizons_stack()
```


### set_horizon_scalar_function_and_isovalue

```cpp
public void set_horizon_scalar_function_and_isovalue(const Horizon3D & stack_horizon, basic_string_view scalar_function_name, double isovalue)
```


### set_stratigraphic_unit_scalar_function

```cpp
public void set_stratigraphic_unit_scalar_function(const StratigraphicUnit3D & stack_unit, basic_string_view scalar_function_name)
```


### build

```cpp
public tuple build()
```




