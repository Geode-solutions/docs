# class GridImpl


```cpp
```cpp
Inherits from ArrayImpl<dimension>
```
```



## Functions

### vertex_index

```cpp
```cpp
public index_t vertex_index(const Grid<dimension> & grid, const VertexIndices & index)
```
```


### vertex_indices

```cpp
```cpp
public VertexIndices vertex_indices(const Grid<dimension> & grid, index_t index)
```
```


### do_update_origin

```cpp
```cpp
protected void do_update_origin(RegularGrid<dimension> & grid, const Point<dimension> & origin)
```
```

### do_update_origin_and_directions

```cpp
```cpp
protected void do_update_origin_and_directions(RegularGrid<dimension> & grid, const Point<dimension> & origin, const std::array<Vector<dimension>, dimension> & directions)
```
```



