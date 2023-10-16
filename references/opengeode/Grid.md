# class Grid

# class Grid


```cpp
Inherits from CellArray<dimension>
```



## Functions

### Grid

```cpp
public void Grid<>(const Grid<> & )
```


### operator=

```cpp
public Grid<> & operator=(const Grid<> & )
```


### ~Grid

```cpp
public void ~Grid<>()
```


### origin

```cpp
public const Point<dimension> & origin()
```


### grid_coordinate_system

```cpp
public const CoordinateSystem<dimension> & grid_coordinate_system()
```


### nb_cell_vertices

```cpp
public local_index_t nb_cell_vertices()
```


### nb_cell_vertices_static

```cpp
public local_index_t nb_cell_vertices_static()
```


### cell_length_in_direction

```cpp
public double cell_length_in_direction(index_t direction)
```


### cell_size

```cpp
public double cell_size()
```


### grid_point

```cpp
public Point<dimension> grid_point(const VertexIndices & index)
```


### nb_grid_vertices

```cpp
public index_t nb_grid_vertices()
```


### nb_vertices_in_direction

```cpp
public index_t nb_vertices_in_direction(index_t direction)
```


### nb_vertices_on_borders

```cpp
public index_t nb_vertices_on_borders()
```


### vertex_index

```cpp
public index_t vertex_index(const VertexIndices & index)
```

### vertex_indices

```cpp
public VertexIndices vertex_indices(index_t index)
```

### cell_vertices

```cpp
public CellVertices cell_vertices(const CellIndices & cell_id)
```


### cell_vertex_indices

```cpp
public VertexIndices cell_vertex_indices(const CellIndices & cell_id, local_index_t vertex_id)
```


### cell_local_vertex

```cpp
public local_index_t cell_local_vertex(const CellIndices & cell_id, const VertexIndices & vertex_id)
```


### next_vertex

```cpp
public absl::optional<VertexIndices> next_vertex(const VertexIndices & index, index_t direction)
```


### previous_vertex

```cpp
public absl::optional<VertexIndices> previous_vertex(const VertexIndices & index, index_t direction)
```


### is_grid_vertex_on_border

```cpp
public bool is_grid_vertex_on_border(const VertexIndices & index)
```


### cell_barycenter

```cpp
public Point<dimension> cell_barycenter(const CellIndices & cell_id)
```


### contains

```cpp
public bool contains(const Point<dimension> & query)
```


 Return true if the query point is inside the grid, up to a global_epsilon away from the grid bounding box.

### closest_vertex

```cpp
public VertexIndices closest_vertex(const Point<dimension> & query)
```


 Returns the closest grid vertex to the query point.

### cells

```cpp
public CellsAroundVertex cells(const Point<dimension> & query)
```


 Return the cell(s) containing the query point

**query** [in] Position of point

**return** None, one or several cell index/indices that contain the query point.

**details** When query point is geometrically near to cell limit, several cell indices are returned: they correspond the potential cells that may contain the point.

### cell_attribute_manager

```cpp
public AttributeManager & cell_attribute_manager()
```

### grid_vertex_attribute_manager

```cpp
public AttributeManager & grid_vertex_attribute_manager()
```

### grid_bounding_box

```cpp
public BoundingBox<dimension> grid_bounding_box()
```


### set_grid_origin

```cpp
public void set_grid_origin(Point<dimension> origin, GridKey )
```


### set_grid_dimensions

```cpp
public void set_grid_dimensions(std::array<index_t, dimension> cells_number, std::array<double, dimension> cells_length, GridKey )
```


### set_grid_directions

```cpp
public void set_grid_directions(std::array<Vector<dimension>, dimension> directions, GridKey )
```


### copy

```cpp
public void copy(const Grid<dimension> & grid, GridKey )
```


### Grid

```cpp
protected void Grid<>()
```


### Grid

```cpp
protected void Grid<>(Grid<> && other)
```


### operator=

```cpp
protected Grid<> & operator=(Grid<> && other)
```




# class Grid

