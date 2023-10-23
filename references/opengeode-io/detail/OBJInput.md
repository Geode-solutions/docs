# class OBJInput

```cpp
Inherits from PolygonalSurfaceInput<3>
```

## Functions

### OBJInput

```cpp
public void OBJInput(string_view filename)
```

### extension

```cpp
public string_view extension()
```

### read

```cpp
public std::unique_ptr<PolygonalSurface3D> read(const MeshImpl & impl)
```

### check_missing_files

```cpp
public PolygonalSurfaceInput<3>::MissingFiles check_missing_files()
```
