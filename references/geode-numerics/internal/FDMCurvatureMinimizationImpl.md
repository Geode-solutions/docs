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

# class FDMCurvatureMinimizationImpl


## Functions

### use_constraint_value_preconditioning

```cpp
public void use_constraint_value_preconditioning()
```


### use_scalar_function_preconditioning

```cpp
public void use_scalar_function_preconditioning(const ComputationGrid<dimension> & preconditioner_grid, basic_string_view function_name)
```


### compute_scalar_function

```cpp
public void compute_scalar_function(basic_string_view scalar_function_name)
```


### FDMCurvatureMinimizationImpl

```cpp
protected void FDMCurvatureMinimizationImpl<dimension>(ComputationGrid<dimension> & grid, const DataConstraintsManager<dimension> & data_constraints)
```


### ~FDMCurvatureMinimizationImpl

```cpp
protected void ~FDMCurvatureMinimizationImpl<dimension>()
```


### node_weight

```cpp
protected double node_weight()
```


### derivative_axis_direction

```cpp
protected std::array<int, dimension> derivative_axis_direction(geode::local_index_t derivative_axis_id)
```


### derivative_contribution

```cpp
protected double derivative_contribution(geode::local_index_t derivative_axis_id)
```


### grid

```cpp
protected const ComputationGrid<dimension> & grid()
```


### data_constraints

```cpp
protected const DataConstraintsManager<dimension> & data_constraints()
```


### add_matrix_coefficient

```cpp
protected void add_matrix_coefficient(index_t row_id, index_t column_id, double value)
```


### set_data_coefficient_value

```cpp
protected void set_data_coefficient_value(index_t data_id, double value)
```


### set_node_coefficient_value

```cpp
protected void set_node_coefficient_value(index_t value_node_id, double value)
```


### nb_computation_nodes

```cpp
protected index_t nb_computation_nodes()
```


### nb_derivatives

```cpp
protected local_index_t nb_derivatives()
```


### first_active_cell_around

```cpp
protected std::optional<typename Grid<dimension>::CellIndices> first_active_cell_around(const Point<dimension> & data_point)
```




# class FDMCurvatureMinimizationImpl

# class FDMCurvatureMinimizationImpl

