# class CutSurfaceGrid

```cpp
Defined at ../include/geode/implicit/implicitation/cut_surface_grid.h#23
```

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

```cpp
Defined at /github/workspace/src/geode/implicit/implicitation/cut_surface_grid.cpp#909
```

### CutSurfaceGrid

```cpp
public void CutSurfaceGrid(CutSurfaceGrid && other)
```

```cpp
Defined at /github/workspace/src/geode/implicit/implicitation/cut_surface_grid.cpp#916
```

### ~CutSurfaceGrid

```cpp
public void ~CutSurfaceGrid()
```

```cpp
Defined at /github/workspace/src/geode/implicit/implicitation/cut_surface_grid.cpp#921
```

### add_discontinuity

```cpp
public void add_discontinuity(const EdgedCurve2D & curve)
```

```cpp
Defined at /github/workspace/src/geode/implicit/implicitation/cut_surface_grid.cpp#923
```

### node_index

```cpp
public index_t node_index(const CellIndices & cell_id, const VertexIndices & vertex_id, index_t cell_duplicate_id)
```

```cpp
Defined at /github/workspace/src/geode/implicit/implicitation/cut_surface_grid.cpp#928
```

### cell_duplicate_index

```cpp
public index_t cell_duplicate_index(const CellIndices & index, local_index_t cell_node_id)
```

```cpp
Defined at /github/workspace/src/geode/implicit/implicitation/cut_surface_grid.cpp#936
```

### cell_duplicate_index

```cpp
public index_t cell_duplicate_index(const CellIndices & index, const Point2D & position)
```

```cpp
Defined at /github/workspace/src/geode/implicit/implicitation/cut_surface_grid.cpp#942
```



