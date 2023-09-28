# class BoundingBox

# class BoundingBox

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#459
```

## Functions

### intersects

```cpp
public bool intersects(const Triangle<3> & triangle)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#277
```



# class BoundingBox

```cpp
Defined at ../../include/geode/geometry/bounding_box.h#45
```

 Bounding box implemented for 2D and 3D points.



## Functions

### BoundingBox

```cpp
public void BoundingBox<>()
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#103
```

### BoundingBox

```cpp
public void BoundingBox<>(Point<dimension> min, Point<dimension> max)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#113
```

### BoundingBox

```cpp
public void BoundingBox<>(const BoundingBox<> & other)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#125
```

### operator=

```cpp
public BoundingBox<> & operator=(const BoundingBox<> & other)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#131
```

### BoundingBox

```cpp
public void BoundingBox<>(BoundingBox<> && other)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#140
```

### operator=

```cpp
public BoundingBox<> & operator=(BoundingBox<> && other)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#146
```

### ~BoundingBox

```cpp
public void ~BoundingBox<>()
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#120
```

### add_box

```cpp
public void add_box(const BoundingBox<dimension> & box)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#177
```

### add_point

```cpp
public void add_point(const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#167
```

### contains

```cpp
public bool contains(const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#185
```

### intersects

```cpp
public bool intersects(const BoundingBox<dimension> & bbox)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#200
```

### intersects

```cpp
public bool intersects(const Ray<dimension> & ray)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#215
```

### intersects

```cpp
public bool intersects(const InfiniteLine<dimension> & line)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#235
```

### intersects

```cpp
public bool intersects(const Segment<dimension> & segment)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#242
```

 Returns true if the element is crossing, is inside, or is containing the bbox

### intersects

```cpp
public typename std::enable_if<T == 2 || T == 3, bool>::type intersects(const Triangle<T> & triangle)
```

 Returns true if the element is crossing, is inside (or is containing the bbox in 2D)

### intersects

```cpp
public typename std::enable_if<T == 3, bool>::type intersects(const Tetrahedron & tetra)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#382
```

 Returns true if the element is crossing, is inside, or is containing the bbox

### signed_distance

```cpp
public double signed_distance(const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#421
```

 Returns the distance between the point and the box. If the point is inside the box, the distance is negative.

### min

```cpp
public const Point<dimension> & min()
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#155
```

### max

```cpp
public const Point<dimension> & max()
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#161
```

### center

```cpp
public Point<dimension> center()
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#409
```

### diagonal

```cpp
public Vector<dimension> diagonal()
```

```cpp
Defined at /github/workspace/src/geode/geometry/bounding_box.cpp#415
```



# class BoundingBox

