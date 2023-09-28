# class Grid

# class Grid

```cpp
Defined at ../../include/geode/mesh/core/grid.h#47
```

```cpp
Inherits from CellArray<dimension>
```



## Functions

### Grid

```cpp
public void Grid<>(const Grid<> & )
```

```cpp
Defined at ../../include/geode/mesh/core/grid.h#49
```

### operator=

```cpp
public Grid<> & operator=(const Grid<> & )
```

```cpp
Defined at ../../include/geode/mesh/core/grid.h#49
```

### ~Grid

```cpp
public void ~Grid<>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#451
```

### origin

```cpp
public const Point<dimension> & origin()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#456
```

### grid_coordinate_system

```cpp
public const CoordinateSystem<dimension> & grid_coordinate_system()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#462
```

### nb_cell_vertices

```cpp
public local_index_t nb_cell_vertices()
```

```cpp
Defined at ../../include/geode/mesh/core/grid.h#70
```

### nb_cell_vertices_static

```cpp
public local_index_t nb_cell_vertices_static()
```

```cpp
Defined at ../../include/geode/mesh/core/grid.h#75
```

### cell_length_in_direction

```cpp
public double cell_length_in_direction(index_t direction)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#469
```

### cell_size

```cpp
public double cell_size()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#476
```

### grid_point

```cpp
public Point<dimension> grid_point(const VertexIndices & index)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#482
```

### nb_grid_vertices

```cpp
public index_t nb_grid_vertices()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#489
```

### nb_vertices_in_direction

```cpp
public index_t nb_vertices_in_direction(index_t direction)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#495
```

### nb_vertices_on_borders

```cpp
public index_t nb_vertices_on_borders()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#502
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

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#515
```

### cell_vertex_indices

```cpp
public VertexIndices cell_vertex_indices(const CellIndices & cell_id, local_index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#522
```

### cell_local_vertex

```cpp
public local_index_t cell_local_vertex(const CellIndices & cell_id, const VertexIndices & vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#529
```

### next_vertex

```cpp
public absl::optional<VertexIndices> next_vertex(const VertexIndices & index, index_t direction)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#536
```

### previous_vertex

```cpp
public absl::optional<VertexIndices> previous_vertex(const VertexIndices & index, index_t direction)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#543
```

### is_grid_vertex_on_border

```cpp
public bool is_grid_vertex_on_border(const VertexIndices & index)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#508
```

### cell_barycenter

```cpp
public Point<dimension> cell_barycenter(const CellIndices & cell_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#570
```

### contains

```cpp
public bool contains(const Point<dimension> & query)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#550
```

 Return true if the query point is inside the grid, up to a global_epsilon away from the grid bounding box.

### closest_vertex

```cpp
public VertexIndices closest_vertex(const Point<dimension> & query)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#556
```

 Returns the closest grid vertex to the query point.

### cells

```cpp
public CellsAroundVertex cells(const Point<dimension> & query)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#563
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

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#577
```

### set_grid_origin

```cpp
public void set_grid_origin(Point<dimension> origin, GridKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#583
```

### set_grid_dimensions

```cpp
public void set_grid_dimensions(std::array<index_t, dimension> cells_number, std::array<double, dimension> cells_length, GridKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#590
```

### set_grid_directions

```cpp
public void set_grid_directions(std::array<Vector<dimension>, dimension> directions, GridKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#600
```

### copy

```cpp
public void copy(const Grid<dimension> & grid, GridKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#607
```

### Grid

```cpp
protected void Grid<>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#432
```

### Grid

```cpp
protected void Grid<>(Grid<> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#437
```

### operator=

```cpp
protected Grid<> & operator=(Grid<> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/grid.cpp#444
```



# class Grid

