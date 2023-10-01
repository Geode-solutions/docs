# struct Element

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#77
```

## Members

```cpp
public std::array<Point<dimension>, nb_points> uvw

```

```cpp
public std::array<Point3D, nb_points> xyz

```

```cpp
public std::array<index_t, nb_points> containing_element

```

```cpp
public BoundingBox<dimension> bbox

```

```cpp
public int visited

```



## Functions

### Element

```cpp
public void Element<dimension>(const Point<dimension> & center)
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#81
```

### is_complete

```cpp
public bool is_complete()
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#87
```

### done

```cpp
public bool done(local_index_t v)
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#99
```

### is_visited

```cpp
public bool is_visited(index_t element)
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field_parameterization.cpp#104
```



