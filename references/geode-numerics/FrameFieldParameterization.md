# class FrameFieldParameterization

```cpp
Defined at ../../include/geode/numerics/frame_field/frame_field_parameterization.h#29
```

## Records

Impl



## Functions

### FrameFieldParameterization

```cpp
public void FrameFieldParameterization(const FrameField & frame_field)
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#1161
```

### ~FrameFieldParameterization

```cpp
public void ~FrameFieldParameterization()
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#1167
```

### compute_parameterization

```cpp
public void compute_parameterization(double mesh_size)
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#1169
```

### delete_parameterization_attribute

```cpp
public void delete_parameterization_attribute()
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#1199
```

### delete_singularity_attribute

```cpp
public void delete_singularity_attribute()
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#1204
```

### delete_attributes

```cpp
public void delete_attributes()
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#1209
```

### extract_points

```cpp
public absl::flat_hash_map<uuid, std::unique_ptr<PointSet3D> > extract_points()
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#1175
```

### extract_edges

```cpp
public absl::flat_hash_map<uuid, std::unique_ptr<EdgedCurve3D> > extract_edges()
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#1193
```

### extract_quadrangles

```cpp
public absl::flat_hash_map<uuid, std::unique_ptr<PolygonalSurface3D> > extract_quadrangles()
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#1187
```

### extract_hexahedra

```cpp
public absl::flat_hash_map<uuid, std::unique_ptr<HybridSolid3D> > extract_hexahedra()
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#1181
```



