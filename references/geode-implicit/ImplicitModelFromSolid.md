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

# class ImplicitModelFromSolid


## Functions

### ImplicitModelFromSolid

```cpp
public void ImplicitModelFromSolid(std::unique_ptr<TetrahedralSolid3D> && solid, HorizonsStack3D && horizon_stack)
```


### ImplicitModelFromSolid

```cpp
public void ImplicitModelFromSolid(ImplicitModelFromSolid && other)
```


### ~ImplicitModelFromSolid

```cpp
public void ~ImplicitModelFromSolid()
```


### horizons_stack

```cpp
public const HorizonsStack3D & horizons_stack()
```


### add_model_boundary_surface

```cpp
public void add_model_boundary_surface(const TriangulatedSurface3D & model_boundary_surface)
```


### add_fault_surface

```cpp
public void add_fault_surface(const TriangulatedSurface3D & fault_surface)
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
public ImplicitStructuralModel build()
```




