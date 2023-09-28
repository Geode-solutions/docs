# class GenericTriangle

# class GenericTriangle

```cpp
Defined at ../../include/geode/geometry/basic_objects/triangle.h#45
```

## Functions

### GenericTriangle

```cpp
public void GenericTriangle<PointType, dimension>(PointType p0, PointType p1, PointType p2)
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#96
```

### GenericTriangle

```cpp
public void GenericTriangle<PointType, dimension>(const GenericTriangle<PointType, dimension> & other)
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#103
```

### operator=

```cpp
public GenericTriangle<PointType, dimension> & operator=(const GenericTriangle<PointType, dimension> & other)
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#110
```

### GenericTriangle

```cpp
public void GenericTriangle<PointType, dimension>(GenericTriangle<PointType, dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#119
```

### operator=

```cpp
public GenericTriangle<PointType, dimension> & operator=(GenericTriangle<PointType, dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#126
```

### barycenter

```cpp
public Point<dimension> barycenter()
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#135
```

### normal

```cpp
public typename std::enable_if<T == 3, absl::optional<Vector3D> >::type normal()
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#145
```

### plane

```cpp
public typename std::enable_if<T == 3, absl::optional<Plane> >::type plane()
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#157
```

### owner_plane

```cpp
public typename std::enable_if<T == 3, absl::optional<OwnerPlane> >::type owner_plane()
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#170
```

### pivot

```cpp
public typename std::enable_if<T == 3, absl::optional<local_index_t> >::type pivot()
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#183
```

### pivot_and_normal

```cpp
public typename std::enable_if<T == 3, absl::optional<std::pair<local_index_t, Vector3D> > >::type pivot_and_normal()
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#195
```

### set_point

```cpp
public void set_point(index_t vertex, PointType point)
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#238
```

### vertices

```cpp
public const std::array<PointType, 3> & vertices()
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#245
```

### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```

```cpp
Defined at /github/workspace/src/geode/geometry/basic_objects/triangle.cpp#252
```



# class GenericTriangle

