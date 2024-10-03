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

# class ScalarFunctionComputer


# class ScalarFunctionComputer


# class ScalarFunctionComputer


## Functions

### ScalarFunctionComputer

```cpp
public void ScalarFunctionComputer<dimension>(DataPointsManager<dimension> & constraints_manager, const BoundingBox<dimension> & computation_bbox, double target_cell_length)
```


### ~ScalarFunctionComputer

```cpp
public void ~ScalarFunctionComputer<dimension>()
```


### add_border_value_constraints

```cpp
public void add_border_value_constraints(double border_value, double weight)
```


### compute_scalar_function

```cpp
public void compute_scalar_function(basic_string_view scalar_function_name)
```


### compute_scalar_function_with_value_preconditioning

```cpp
public void compute_scalar_function_with_value_preconditioning(basic_string_view scalar_function_name, basic_string_view existing_scalar_function_name)
```


### grid_with_results

```cpp
public const LightRegularGrid<dimension> & grid_with_results()
```




