# class FDMCurvatureMinimizationImpl

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#95
```

## Functions

### FDMCurvatureMinimizationImpl

```cpp
public void FDMCurvatureMinimizationImpl<dimension>(ComputationGrid<dimension> & grid, const DataConstraintsManager<dimension> & data_constraints)
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#98
```

### ~FDMCurvatureMinimizationImpl

```cpp
protected void ~FDMCurvatureMinimizationImpl<dimension>()
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#141
```

### use_constraint_value_preconditioning

```cpp
public void use_constraint_value_preconditioning()
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#144
```

### use_scalar_function_preconditioning

```cpp
public void use_scalar_function_preconditioning(string_view function_name)
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#175
```

### compute_scalar_function

```cpp
public void compute_scalar_function(string_view scalar_function_name)
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#187
```

### node_weight

```cpp
protected double node_weight()
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#300
```

### derivative_axis_direction

```cpp
protected std::array<int, dimension> derivative_axis_direction(geode::local_index_t derivative_axis_id)
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#305
```

### derivative_contribution

```cpp
protected double derivative_contribution(geode::local_index_t derivative_axis_id)
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#312
```

### grid

```cpp
protected const ComputationGrid<dimension> & grid()
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#318
```

### data_constraints

```cpp
protected const DataConstraintsManager<dimension> & data_constraints()
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#323
```

### add_matrix_coefficient

```cpp
protected void add_matrix_coefficient(index_t row_id, index_t column_id, double value)
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#328
```

### set_data_coefficient_value

```cpp
protected void set_data_coefficient_value(index_t data_id, double value)
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#334
```

### nb_computation_points

```cpp
protected index_t nb_computation_points()
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#339
```

### nb_derivatives

```cpp
protected local_index_t nb_derivatives()
```

```cpp
Defined at ../../include/geode/numerics/scalar_function/private/FDM_curvature_minimization_impl.h#344
```



