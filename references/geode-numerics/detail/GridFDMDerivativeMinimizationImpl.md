# class GridFDMDerivativeMinimizationImpl


## Functions

### GridFDMDerivativeMinimizationImpl

```cpp
```cpp
public void GridFDMDerivativeMinimizationImpl<dimension>(const Grid<dimension> & grid, const DataConstraintsManager<dimension> & data_constraints, index_t nb_computation_points, index_t nb_derivatives)
```
```


### ~GridFDMDerivativeMinimizationImpl

```cpp
```cpp
protected void ~GridFDMDerivativeMinimizationImpl<dimension>()
```
```


### use_constraint_value_preconditioning

```cpp
```cpp
public void use_constraint_value_preconditioning()
```
```


### use_scalar_function_preconditioning

```cpp
```cpp
public void use_scalar_function_preconditioning(string_view function_name)
```
```


### compute_scalar_function

```cpp
```cpp
public RegularGridScalarFunction<dimension> compute_scalar_function(string_view scalar_function_name)
```
```


### grid

```cpp
```cpp
protected const Grid<dimension> & grid()
```
```


### data_constraints

```cpp
```cpp
protected const DataConstraintsManager<dimension> & data_constraints()
```
```


### reserve_matrix_coefficients

```cpp
```cpp
protected void reserve_matrix_coefficients(index_t nb_matrix_coeffs)
```
```


### add_matrix_coefficient

```cpp
```cpp
protected void add_matrix_coefficient(index_t row_id, index_t column_id, double value)
```
```


### nb_computation_points

```cpp
```cpp
protected index_t nb_computation_points()
```
```


### nb_derivatives

```cpp
```cpp
protected local_index_t nb_derivatives()
```
```




