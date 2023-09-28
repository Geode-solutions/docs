# class RegularGridScalarFunction

# class RegularGridScalarFunction

# class RegularGridScalarFunction

```cpp
Defined at ../../include/geode/mesh/helpers/regular_grid_scalar_function.h#40
```

## Records

Impl



## Functions

### RegularGridScalarFunction

```cpp
public void RegularGridScalarFunction<dimension>(RegularGridScalarFunction<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_scalar_function.cpp#120
```

### ~RegularGridScalarFunction

```cpp
public void ~RegularGridScalarFunction<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_scalar_function.cpp#143
```

### create

```cpp
public RegularGridScalarFunction create(const Grid<dimension> & grid, string_view function_name, double value)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_scalar_function.cpp#148
```

 Create a new object function from a RegularGrid, a name, and a value. Throws an exception if an attribute with the same name exists.

### find

```cpp
public RegularGridScalarFunction find(const Grid<dimension> & grid, string_view function_name)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_scalar_function.cpp#158
```

 Finds an object function that already exists in the given RegularGrid, from its given name. Throws an exception if no attribute with the same name exists.

### set_value

```cpp
public void set_value(const typename Grid<dimension>::VertexIndices & vertex_index, double value)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_scalar_function.cpp#166
```

### set_value

```cpp
public void set_value(index_t vertex_index, double value)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_scalar_function.cpp#174
```

### value

```cpp
public double value(const typename Grid<dimension>::VertexIndices & vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_scalar_function.cpp#181
```

### value

```cpp
public double value(index_t vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_scalar_function.cpp#188
```

### value

```cpp
public double value(const Point<dimension> & point, const typename Grid<dimension>::CellIndices & grid_cell_indices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/regular_grid_scalar_function.cpp#195
```



