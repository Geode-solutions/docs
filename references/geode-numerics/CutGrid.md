# class CutGrid

```cpp
Inherits from ComputationGrid<3U>
```

# class CutGrid

```cpp
Inherits from ComputationGrid<dimension>
```

## Functions

### ~CutGrid

```cpp
public void ~CutGrid<dimension>()
```

### nb_value_nodes

```cpp
public index_t nb_value_nodes()
```

### set_nb_value_nodes

```cpp
public void set_nb_value_nodes(index_t new_nb_value_nodes)
```

### set_node_value

```cpp
public void set_node_value(index_t value_node_id, double value)
```

### get_node_value

```cpp
public double get_node_value(index_t value_node_id)
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

### CutGrid

```cpp
protected void CutGrid<dimension>(CutGrid<dimension> && other)
```

# class CutGrid

```cpp
Inherits from ComputationGrid<2U>
```
