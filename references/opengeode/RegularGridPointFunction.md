# class RegularGridPointFunction

# class RegularGridPointFunction

# class RegularGridPointFunction

# class RegularGridPointFunction

# class RegularGridPointFunction

```cpp
Defined at ../../include/geode/mesh/helpers/regular_grid_point_function.h#40
```

## Functions

### RegularGridPointFunction

```cpp
public void RegularGridPointFunction<dimension, point_dimension>(RegularGridPointFunction<dimension, point_dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_point_function.cpp#123
```

### ~RegularGridPointFunction

```cpp
public void ~RegularGridPointFunction<dimension, point_dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_point_function.cpp#150
```

### create

```cpp
public RegularGridPointFunction create(const Grid<dimension> & grid, string_view function_name, Point<point_dimension> value)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_point_function.cpp#156
```

 Create a new object function from a RegularGrid, a name, and a value. Throws an exception if an attribute with the same name exists.

### find

```cpp
public RegularGridPointFunction find(const Grid<dimension> & grid, string_view function_name)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_point_function.cpp#166
```

 Finds an object function that already exists in the given RegularGrid, from its given name. Throws an exception if no attribute with the same name exists.

### set_value

```cpp
public void set_value(const typename Grid<dimension>::VertexIndices & vertex_index, Point<point_dimension> value)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_point_function.cpp#174
```

### set_value

```cpp
public void set_value(index_t vertex_index, Point<point_dimension> value)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_point_function.cpp#182
```

### value

```cpp
public const Point<point_dimension> & value(const typename Grid<dimension>::VertexIndices & vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_point_function.cpp#189
```

### value

```cpp
public const Point<point_dimension> & value(index_t vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_point_function.cpp#198
```

### value

```cpp
public Point<point_dimension> value(const Point<dimension> & point, const typename Grid<dimension>::CellIndices & grid_cell_indices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_point_function.cpp#206
```



