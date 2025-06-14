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

### ~ScalarFunctionComputer

```cpp
public void ~ScalarFunctionComputer<dimension>()
```


### cell_size_at_multi_grid_step

```cpp
public double cell_size_at_multi_grid_step(local_index_t multi_grid_step)
```


### expected_nb_steps_to_reach_target_cell_size

```cpp
public local_index_t expected_nb_steps_to_reach_target_cell_size(double target_cell_size)
```


### add_boundary_value_condition

```cpp
public void add_boundary_value_condition(double value_to_set)
```


### compute_scalar_function

```cpp
public void compute_scalar_function(basic_string_view scalar_function_name, double function_value_interval, const ImplicitationParameters & computation_parameters)
```


### ScalarFunctionComputer

```cpp
protected void ScalarFunctionComputer<dimension>(const BoundingBox<dimension> & computation_bbox, const DataConstraintsManager<dimension> & constraints_manager)
```


### interpolate_result_on_grid

```cpp
protected void interpolate_result_on_grid(const CutGrid<dimension> & other_grid, basic_string_view scalar_function_name)
```


### computation_box

```cpp
protected const BoundingBox<dimension> & computation_box()
```


### data_constraints

```cpp
protected const DataConstraintsManager<dimension> & data_constraints()
```


### initial_grid_cell_size

```cpp
protected double initial_grid_cell_size()
```


### rasterization_deactivates_too_many_cells

```cpp
protected bool rasterization_deactivates_too_many_cells(const CutGrid<dimension> & grid, const absl::flat_hash_set<typename CutGrid<dimension>::CellIndices> & rasterized_cells)
```

### rasterization_deactivates_too_many_cells

```cpp
protected bool rasterization_deactivates_too_many_cells(const CutGrid<dimension> & grid, const absl::flat_hash_set<typename CutGrid<dimension>::CellIndices> & rasterized_cells)
```




