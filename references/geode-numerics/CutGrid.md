# class CutGrid

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/cut_grid.cpp#122
```

```cpp
Inherits from ComputationGrid<3U>
```



# class CutGrid

```cpp
Defined at ../../include/geode/numerics/scalar_function/cut_grid.h#21
```

```cpp
Inherits from ComputationGrid<dimension>
```



## Functions

### ~CutGrid

```cpp
public void ~CutGrid<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/cut_grid.cpp#70
```

### nb_value_nodes

```cpp
public index_t nb_value_nodes()
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/cut_grid.cpp#75
```

### set_nb_value_nodes

```cpp
public void set_nb_value_nodes(index_t new_nb_value_nodes)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/cut_grid.cpp#81
```

### set_node_value

```cpp
public void set_node_value(index_t value_node_id, double value)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/cut_grid.cpp#93
```

### get_node_value

```cpp
public double get_node_value(index_t value_node_id)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/cut_grid.cpp#109
```

### node_index

```cpp
public index_t node_index(const CellIndices & cell_indices, const VertexIndices & vertex_indices, index_t cell_duplicate_index)
```

### cell_duplicate_index

```cpp
public index_t cell_duplicate_index(const CellIndices & index, local_index_t cell_node_id)
```

### cell_duplicate_index

```cpp
public index_t cell_duplicate_index(const CellIndices & index, const Point<dimension> & position)
```

### CutGrid

```cpp
protected void CutGrid<dimension>(Point<dimension> origin, std::array<index_t, dimension> cells_number, std::array<double, dimension> cells_length)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/cut_grid.cpp#56
```

### CutGrid

```cpp
protected void CutGrid<dimension>(CutGrid<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/cut_grid.cpp#64
```



# class CutGrid

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/cut_grid.cpp#121
```

```cpp
Inherits from ComputationGrid<2U>
```



