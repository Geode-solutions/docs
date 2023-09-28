# class BackgroundSolidInserter

```cpp
Defined at ../include/geode/background/solid/private/background_solid_inserter.h#31
```

## Records

Impl



## Functions

### BackgroundSolidInserter

```cpp
public void BackgroundSolidInserter(BackgroundSolid & background)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_inserter.cpp#3647
```

### ~BackgroundSolidInserter

```cpp
public void ~BackgroundSolidInserter()
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_inserter.cpp#3653
```

### insert_surface

```cpp
public void insert_surface(const TriangulatedSurface3D & mesh)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_inserter.cpp#3657
```

### insert_surface_triangles

```cpp
public void insert_surface_triangles(const TriangulatedSurface3D & mesh, Span triangle_ids)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_inserter.cpp#3679
```

### insert_curve

```cpp
public void insert_curve(const EdgedCurve3D & mesh)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_inserter.cpp#3665
```

### insert_curve_edges

```cpp
public void insert_curve_edges(const EdgedCurve3D & mesh, Span edges_ids)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_inserter.cpp#3686
```

### insert_point_set

```cpp
public void insert_point_set(const PointSet3D & mesh)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_inserter.cpp#3672
```

### insert_point_set_points

```cpp
public void insert_point_set_points(const PointSet3D & mesh, Span vertex_ids)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_inserter.cpp#3692
```

### insert_scalar_function_isovalues

```cpp
public void insert_scalar_function_isovalues(string_view function_name, absl::Span<const double> isovalues)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_inserter.cpp#3698
```



