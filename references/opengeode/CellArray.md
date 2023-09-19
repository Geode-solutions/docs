# class CellArray


## Functions

### CellArray

```cpp
public void CellArray<dimension>(const CellArray<dimension> & )
```


### operator=

```cpp
public CellArray<dimension> & operator=(const CellArray<dimension> & )
```


### ~CellArray

```cpp
public void ~CellArray<dimension>()
```


### nb_cell_neighbors

```cpp
public local_index_t nb_cell_neighbors()
```


### nb_cell_neighbors_static

```cpp
public local_index_t nb_cell_neighbors_static()
```


### nb_cells

```cpp
public index_t nb_cells()
```


### nb_cells_in_direction

```cpp
public index_t nb_cells_in_direction(index_t direction)
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


### previous_cell

```cpp
public absl::optional<CellIndices> previous_cell(const CellIndices & index, index_t direction)
```


### is_cell_on_border

```cpp
public _Bool is_cell_on_border(const CellIndices & cell_indices)
```


### CellArray

```cpp
protected void CellArray<dimension>()
```


### CellArray

```cpp
protected void CellArray<dimension>(std::array<index_t, dimension> cells_number)
```


### CellArray

```cpp
protected void CellArray<dimension>(CellArray<dimension> && other)
```


### operator=

```cpp
protected CellArray<dimension> & operator=(CellArray<dimension> && other)
```


### set_array_dimensions

```cpp
protected void set_array_dimensions(std::array<index_t, dimension> cells_number)
```


### copy

```cpp
protected void copy(const CellArray<dimension> & array)
```




# class CellArray


# class CellArray


# class CellArray


