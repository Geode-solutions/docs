# class GridFDMCurvatureMinimization

# class GridFDMCurvatureMinimization

# class GridFDMCurvatureMinimization


```cpp
Inherits from GridDerivativesMinimization<dimension>
```



## Functions

### GridFDMCurvatureMinimization

```cpp
public void GridFDMCurvatureMinimization<dimension>(const Grid<dimension> & grid, const DataConstraintsManager<dimension> & data_constraints)
```


### ~GridFDMCurvatureMinimization

```cpp
public void ~GridFDMCurvatureMinimization<dimension>()
```


### impl_type_static

```cpp
public GridScalarFunctionComputerType impl_type_static()
```


### use_constraint_value_preconditioning

```cpp
public void use_constraint_value_preconditioning()
```


### use_scalar_function_preconditioning

```cpp
public void use_scalar_function_preconditioning(string_view function_name)
```


### compute_scalar_function

```cpp
public RegularGridScalarFunction<dimension> compute_scalar_function(string_view scalar_function_name)
```




