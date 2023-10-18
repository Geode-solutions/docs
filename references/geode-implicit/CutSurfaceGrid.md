# class CutSurfaceGrid


```cpp
Inherits from CutGrid2D
```



## Records

Impl



## Functions

### CutSurfaceGrid

```cpp
public void CutSurfaceGrid(Point2D origin, std::array<index_t, 2> cells_number, std::array<double, 2> cells_length)
```


### CutSurfaceGrid

```cpp
public void CutSurfaceGrid(CutSurfaceGrid && other)
```


### ~CutSurfaceGrid

```cpp
public void ~CutSurfaceGrid()
```


### add_discontinuity

```cpp
public void add_discontinuity(const EdgedCurve2D & curve)
```


### node_index

```cpp
public index_t node_index(const CellIndices & cell_id, const VertexIndices & vertex_id, index_t cell_duplicate_id)
```


### cell_duplicate_index

```cpp
public index_t cell_duplicate_index(const CellIndices & index, local_index_t cell_node_id)
```


### cell_duplicate_index

```cpp
public index_t cell_duplicate_index(const CellIndices & index, const Point2D & position)
```




