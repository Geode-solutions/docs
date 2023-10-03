# struct Hex

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#640
```

## Members

```cpp
public std::array<Point3D, NB_HEX_VERTICES> uvw

```

```cpp
public std::array<Point3D, NB_HEX_VERTICES> xyz

```

```cpp
public std::array<index_t, NB_HEX_VERTICES> containing_element

```

```cpp
public BoundingBox3D bbox

```

```cpp
public int visited

```

```cpp
public int local_parameterization

```



## Functions

### Hex

```cpp
public void Hex(const Point3D & center)
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#642
```

### is_complete

```cpp
public bool is_complete()
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#658
```

### done

```cpp
public bool done(local_index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#670
```

### is_visited

```cpp
public bool is_visited(index_t element)
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#675
```



