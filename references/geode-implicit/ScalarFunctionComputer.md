# class ScalarFunctionComputer

# class ScalarFunctionComputer

```cpp
Defined at ../include/geode/implicit/implicitation/scalar_function_computation.h#22
```

## Functions

### ScalarFunctionComputer

```cpp
public void ScalarFunctionComputer<dimension>(const DataConstraintsManager<dimension> & constraints_manager, const BoundingBox<dimension> & computation_bbox, double min_cell_length)
```

```cpp
Defined at /github/workspace/src/geode/implicit/implicitation/scalar_function_computation.cpp#84
```

### ~ScalarFunctionComputer

```cpp
public void ~ScalarFunctionComputer<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/implicit/implicitation/scalar_function_computation.cpp#93
```

### compute_scalar_function

```cpp
public void compute_scalar_function(string_view scalar_function_name)
```

```cpp
Defined at /github/workspace/src/geode/implicit/implicitation/scalar_function_computation.cpp#98
```

### compute_scalar_function_with_value_preconditioning

```cpp
public void compute_scalar_function_with_value_preconditioning(string_view scalar_function_name, string_view existing_scalar_function_name)
```

```cpp
Defined at /github/workspace/src/geode/implicit/implicitation/scalar_function_computation.cpp#105
```

### grid_with_results

```cpp
public const LightRegularGrid<dimension> & grid_with_results()
```

```cpp
Defined at /github/workspace/src/geode/implicit/implicitation/scalar_function_computation.cpp#115
```



# class ScalarFunctionComputer

