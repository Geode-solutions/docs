# class CellArray

```cpp
Defined at ../../include/geode/basic/cell_array.h#34
```

## Functions

### CellArray

```cpp
public void CellArray<dimension>(const CellArray<dimension> & )
```

```cpp
Defined at ../../include/geode/basic/cell_array.h#36
```

### operator=

```cpp
public CellArray<dimension> & operator=(const CellArray<dimension> & )
```

```cpp
Defined at ../../include/geode/basic/cell_array.h#36
```

### ~CellArray

```cpp
public void ~CellArray<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#149
```

### nb_cell_neighbors

```cpp
public local_index_t nb_cell_neighbors()
```

```cpp
Defined at ../../include/geode/basic/cell_array.h#45
```

### nb_cell_neighbors_static

```cpp
public local_index_t nb_cell_neighbors_static()
```

```cpp
Defined at ../../include/geode/basic/cell_array.h#50
```

### nb_cells

```cpp
public index_t nb_cells()
```

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#154
```

### nb_cells_in_direction

```cpp
public index_t nb_cells_in_direction(index_t direction)
```

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#160
```

### cell_index

```cpp
public index_t cell_index(const CellIndices & index)
```

### cell_indices

```cpp
public CellIndices cell_indices(index_t index)
```

### next_cell

```cpp
public absl::optional<CellIndices> next_cell(const CellIndices & index, index_t direction)
```

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#167
```

### previous_cell

```cpp
public absl::optional<CellIndices> previous_cell(const CellIndices & index, index_t direction)
```

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#174
```

### is_cell_on_border

```cpp
public bool is_cell_on_border(const CellIndices & cell_indices)
```

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#181
```

### CellArray

```cpp
protected void CellArray<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#123
```

### CellArray

```cpp
protected void CellArray<dimension>(std::array<index_t, dimension> cells_number)
```

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#128
```

### CellArray

```cpp
protected void CellArray<dimension>(CellArray<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#135
```

### operator=

```cpp
protected CellArray<dimension> & operator=(CellArray<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#141
```

### set_array_dimensions

```cpp
protected void set_array_dimensions(std::array<index_t, dimension> cells_number)
```

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#188
```

### copy

```cpp
protected void copy(const CellArray<dimension> & array)
```

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#195
```



# class CellArray

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#212
```

# class CellArray

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#213
```

# class CellArray

```cpp
Defined at /github/workspace/src/geode/basic/cell_array.cpp#214
```

