# class RegularGridBuilder

```cpp
Defined at ../../include/geode/mesh/builder/regular_grid_surface_builder.h#43
```

```cpp
Inherits from SurfaceMeshBuilder<2>, GridBuilder<2>
```



## Functions

### create

```cpp
public std::unique_ptr<RegularGridBuilder<2> > create(RegularGrid2D & grid)
```

### initialize_grid

```cpp
public void initialize_grid(const Point2D & origin, std::array<index_t, 2> cells_number, array cells_length)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/regular_grid_surface_builder.cpp#51
```

### initialize_grid

```cpp
public void initialize_grid(const Point2D & origin, std::array<index_t, 2> cells_number, double cells_length)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/regular_grid_surface_builder.cpp#101
```

### initialize_grid

```cpp
public void initialize_grid(Point origin, std::array<index_t, 2> cells_number, std::array<Vector2D, 2> cell_directions)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/regular_grid_surface_builder.cpp#109
```

### update_origin

```cpp
public void update_origin(const Point2D & origin)
```

### update_origin_and_directions

```cpp
public void update_origin_and_directions(Point origin, std::array<Vector2D, 2> cell_directions)
```

### copy

```cpp
public void copy(const RegularGrid2D & grid)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/regular_grid_surface_builder.cpp#119
```

### RegularGridBuilder

```cpp
protected void RegularGridBuilder(RegularGrid2D & grid)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/regular_grid_surface_builder.cpp#37
```

### create

```cpp
public int create(RegularGrid2D & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/regular_grid_surface_builder.cpp#44
```



# class RegularGridBuilder

# class RegularGridBuilder

```cpp
Defined at ../../include/geode/mesh/builder/regular_grid_solid_builder.h#43
```

```cpp
Inherits from SolidMeshBuilder<3>, GridBuilder<3>
```



## Functions

### create

```cpp
public std::unique_ptr<RegularGridBuilder<3> > create(RegularGrid3D & grid)
```

### initialize_grid

```cpp
public void initialize_grid(const Point3D & origin, std::array<index_t, 3> cells_number, array cells_length)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/regular_grid_solid_builder.cpp#49
```

### initialize_grid

```cpp
public void initialize_grid(const Point3D & origin, std::array<index_t, 3> cells_number, double cells_length)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/regular_grid_solid_builder.cpp#172
```

### initialize_grid

```cpp
public void initialize_grid(Point origin, std::array<index_t, 3> cells_number, std::array<Vector3D, 3> cell_directions)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/regular_grid_solid_builder.cpp#180
```

### update_origin

```cpp
public void update_origin(const Point3D & origin)
```

### update_origin_and_directions

```cpp
public void update_origin_and_directions(Point origin, std::array<Vector3D, 3> cell_directions)
```

### copy

```cpp
public void copy(const RegularGrid3D & grid)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/regular_grid_solid_builder.cpp#191
```

### RegularGridBuilder

```cpp
protected void RegularGridBuilder(RegularGrid3D & grid)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/regular_grid_solid_builder.cpp#37
```

### create

```cpp
public int create(RegularGrid3D & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/regular_grid_solid_builder.cpp#42
```



