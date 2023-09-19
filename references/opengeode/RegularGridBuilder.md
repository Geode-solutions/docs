# class RegularGridBuilder


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


### initialize_grid

```cpp
public void initialize_grid(const Point2D & origin, std::array<index_t, 2> cells_number, double cells_length)
```


### initialize_grid

```cpp
public void initialize_grid(Point origin, std::array<index_t, 2> cells_number, std::array<Vector2D, 2> cell_directions)
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


### RegularGridBuilder

```cpp
protected void RegularGridBuilder(RegularGrid2D & grid)
```


### create

```cpp
public int create(RegularGrid2D & mesh)
```




# class RegularGridBuilder

# class RegularGridBuilder


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


### initialize_grid

```cpp
public void initialize_grid(const Point3D & origin, std::array<index_t, 3> cells_number, double cells_length)
```


### initialize_grid

```cpp
public void initialize_grid(Point origin, std::array<index_t, 3> cells_number, std::array<Vector3D, 3> cell_directions)
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


### RegularGridBuilder

```cpp
protected void RegularGridBuilder(RegularGrid3D & grid)
```


### create

```cpp
public int create(RegularGrid3D & mesh)
```




