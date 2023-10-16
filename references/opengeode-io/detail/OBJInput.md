# class OBJInput

```cpp
Defined at ../../include/geode/io/mesh/private/obj_input.h#38
```

```cpp
Inherits from PolygonalSurfaceInput<3>
```



## Functions

### OBJInput

```cpp
public void OBJInput(string_view filename)
```

```cpp
Defined at ../../include/geode/io/mesh/private/obj_input.h#41
```

### extension

```cpp
public string_view extension()
```

```cpp
Defined at ../../include/geode/io/mesh/private/obj_input.h#46
```

### read

```cpp
public std::unique_ptr<PolygonalSurface3D> read(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/io/mesh/obj_input.cpp#40
```

### check_missing_files

```cpp
public PolygonalSurfaceInput<3>::MissingFiles check_missing_files()
```

```cpp
Defined at /github/workspace/src/geode/io/mesh/obj_input.cpp#49
```



