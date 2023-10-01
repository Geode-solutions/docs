# class PGP3D

```cpp
Defined at ../../include/geode/numerics/frame_field/private/pgp3d.h#46
```

## Records

Constraint



## Functions

### PGP3D

```cpp
public void PGP3D(class FrameFieldParameterization::Impl & impl, double mesh_size)
```

```cpp
Defined at ../../include/geode/numerics/frame_field/private/pgp3d.h#69
```

### compute_parameterization

```cpp
public void compute_parameterization()
```

```cpp
Defined at ../../include/geode/numerics/frame_field/private/pgp3d.h#83
```

### parametric_coordinates_in_first_basis

```cpp
public TetrahedronCornerParam parametric_coordinates_in_first_basis(const Block3D & block, const SolidMesh3D & solid, index_t tetrahedron)
```

```cpp
Defined at ../../include/geode/numerics/frame_field/private/pgp3d.h#146
```

### translation

```cpp
public Vector3D translation(index_t i, index_t j)
```

```cpp
Defined at ../../include/geode/numerics/frame_field/private/pgp3d.h#265
```

### integer_dimension

```cpp
public absl::optional<local_index_t> integer_dimension(const std::array<Point<dim>, dim> & param3d)
```

```cpp
Defined at ../../include/geode/numerics/frame_field/private/pgp3d.h#478
```

### integer_value

```cpp
public absl::optional<double> integer_value(double value)
```

```cpp
Defined at ../../include/geode/numerics/frame_field/private/pgp3d.h#505
```

### compute_constant

```cpp
public Vector3D compute_constant(index_t vertex_i, index_t vertex_j, const FrameTransform3D & mapping)
```

```cpp
Defined at ../../include/geode/numerics/frame_field/private/pgp3d.h#698
```



