# class ComputationGrid

```cpp
Defined at ../../include/geode/numerics/scalar_function/computation_grid.h#22
```

```cpp
Inherits from LightRegularGrid<dimension>
```



## Records

Impl



## Functions

### ComputationGrid

```cpp
public void ComputationGrid<>(Point<dimension> origin, std::array<index_t, dimension> cells_number, std::array<double, dimension> cells_length)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/computation_grid.cpp#81
```

### ComputationGrid

```cpp
public void ComputationGrid<>(ComputationGrid<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/computation_grid.cpp#90
```

### ComputationGrid

```cpp
public void ComputationGrid<>(LightRegularGrid<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/computation_grid.cpp#98
```

### ~ComputationGrid

```cpp
public void ~ComputationGrid<>()
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/computation_grid.cpp#105
```

### nb_computation_nodes

```cpp
public index_t nb_computation_nodes()
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/computation_grid.cpp#110
```

### grid_vertex_from_computation_node

```cpp
public index_t grid_vertex_from_computation_node(index_t computation_node)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/computation_grid.cpp#116
```

### set_node_values_attribute_name

```cpp
public void set_node_values_attribute_name(string_view name)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/computation_grid.cpp#123
```

### nb_value_nodes

```cpp
public index_t nb_value_nodes()
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/computation_grid.cpp#130
```

### set_node_value

```cpp
public void set_node_value(index_t value_node_id, double value)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/computation_grid.cpp#136
```

### get_node_value

```cpp
public double get_node_value(index_t value_node_id)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/computation_grid.cpp#143
```



# class ComputationGrid

# class ComputationGrid

