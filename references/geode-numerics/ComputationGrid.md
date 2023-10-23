# class ComputationGrid

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

### ComputationGrid

```cpp
public void ComputationGrid<>(ComputationGrid<dimension> && other)
```

### ComputationGrid

```cpp
public void ComputationGrid<>(LightRegularGrid<dimension> && other)
```

### ~ComputationGrid

```cpp
public void ~ComputationGrid<>()
```

### nb_computation_nodes

```cpp
public index_t nb_computation_nodes()
```

### grid_vertex_from_computation_node

```cpp
public index_t grid_vertex_from_computation_node(index_t computation_node)
```

### set_node_values_attribute_name

```cpp
public void set_node_values_attribute_name(string_view name)
```

### nb_value_nodes

```cpp
public index_t nb_value_nodes()
```

### set_node_value

```cpp
public void set_node_value(index_t value_node_id, double value)
```

### get_node_value

```cpp
public double get_node_value(index_t value_node_id)
```

# class ComputationGrid

# class ComputationGrid
