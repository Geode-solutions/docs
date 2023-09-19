# class RegularGridScalarFunctionComputer


## Records

Impl



## Functions

### RegularGridScalarFunctionComputer

```cpp
public void RegularGridScalarFunctionComputer<dimension>(const DataConstraintsManager<dimension> & constraints_manager, const BoundingBox<dimension> & computation_bbox, double max_cell_length, GridScalarFunctionComputerType computer_type)
```


### ~RegularGridScalarFunctionComputer

```cpp
public void ~RegularGridScalarFunctionComputer<dimension>()
```


### set_function_computer_type

```cpp
public void set_function_computer_type(GridScalarFunctionComputerType new_computer_type)
```


### compute_scalar_function

```cpp
public void compute_scalar_function(string_view scalar_function_name)
```


### compute_scalar_function_with_value_preconditioning

```cpp
public void compute_scalar_function_with_value_preconditioning(string_view scalar_function_name, string_view existing_scalar_function_name)
```


### grid_with_functions

```cpp
public const RegularGrid<dimension> & grid_with_functions()
```




# class RegularGridScalarFunctionComputer

# class RegularGridScalarFunctionComputer

