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

### use_scalar_function_preconditioning

```cpp
public void use_scalar_function_preconditioning(basic_string_view function_name)
```


### add_boundary_value_condition

```cpp
public void add_boundary_value_condition(double value_to_set)
```


 Sets a defined value on all value nodes of the computation grid present on one of its boundaries (defined by nodes which are value nodes but not computation nodes).

**value_to_set** Value to set on nodes

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


### enlarged_cell_local_coords

```cpp
protected Point<dimension> enlarged_cell_local_coords(const Point<dimension> & data_point_in_grid, const typename Grid<dimension>::VertexIndices & closest_node)
```


### enlarged_shape_function_value

```cpp
protected double enlarged_shape_function_value(local_index_t node_id, const Point<dimension> & local_point_coords)
```


### lock_node_value

```cpp
protected void lock_node_value(index_t value_node_id, double value_to_set)
```


### node_weight

```cpp
protected double node_weight()
```


### derivative_axis_direction

```cpp
protected std::array<int, dimension> derivative_axis_direction(local_index_t derivative_axis_id)
```


### derivative_contribution

```cpp
protected double derivative_contribution(local_index_t derivative_axis_id)
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


### nb_computation_nodes

```cpp
protected index_t nb_computation_nodes()
```


### nb_derivatives

```cpp
protected local_index_t nb_derivatives()
```




# class FDMCurvatureMinimizationImpl


# class FDMCurvatureMinimizationImpl


