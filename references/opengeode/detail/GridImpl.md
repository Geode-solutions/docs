# class GridImpl

```cpp
Defined at ../../include/geode/mesh/core/private/grid_impl.h#43
```

```cpp
Inherits from ArrayImpl<dimension>
```



## Functions

### vertex_index

```cpp
public index_t vertex_index(const Grid<dimension> & grid, const VertexIndices & index)
```

```cpp
Defined at ../../include/geode/mesh/core/private/grid_impl.h#49
```

### vertex_indices

```cpp
public VertexIndices vertex_indices(const Grid<dimension> & grid, index_t index)
```

```cpp
Defined at ../../include/geode/mesh/core/private/grid_impl.h#69
```

### do_update_origin

```cpp
protected void do_update_origin(RegularGrid<dimension> & grid, const Point<dimension> & origin)
```

### do_update_origin_and_directions

```cpp
protected void do_update_origin_and_directions(RegularGrid<dimension> & grid, const Point<dimension> & origin, const std::array<Vector<dimension>, dimension> & directions)
```



