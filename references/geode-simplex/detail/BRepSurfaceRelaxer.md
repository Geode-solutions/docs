# class BRepSurfaceRelaxer

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/relax.h#26
```

## Functions

### BRepSurfaceRelaxer

```cpp
public void BRepSurfaceRelaxer(const BRep & model, BRepGeometricModifier & modifier, const Surface3D & surface, const SurfaceRelaxerOptions3D & options)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/relax.h#32
```

### ~BRepSurfaceRelaxer

```cpp
public void ~BRepSurfaceRelaxer()
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/relax.h#44
```

### vertex_plane

```cpp
public absl::optional<Plane> vertex_plane(index_t vertex)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/relax.h#108
```

### vertex_normal

```cpp
public absl::optional<std::pair<Vector3D, index_t> > vertex_normal(index_t vertex, index_t p0, index_t p1)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/3d/private/relax.h#118
```



