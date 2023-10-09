# class CoordinateSystem

```cpp
Defined at ../../include/geode/geometry/coordinate_system.h#36
```

```cpp
Inherits from Frame<dimension>
```



## Functions

### CoordinateSystem

```cpp
public void CoordinateSystem<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/geometry/coordinate_system.cpp#91
```

### CoordinateSystem

```cpp
public void CoordinateSystem<dimension>(std::array<Vector<dimension>, dimension> directions, Point<dimension> origin)
```

```cpp
Defined at /github/workspace/src/geode/geometry/coordinate_system.cpp#96
```

### CoordinateSystem

```cpp
public void CoordinateSystem<dimension>(Point<dimension> origin, const std::array<Point<dimension>, dimension> & other_points)
```

```cpp
Defined at /github/workspace/src/geode/geometry/coordinate_system.cpp#106
```

### origin

```cpp
public const Point<dimension> & origin()
```

```cpp
Defined at /github/workspace/src/geode/geometry/coordinate_system.cpp#121
```

### set_origin

```cpp
public void set_origin(Point<dimension> origin)
```

```cpp
Defined at /github/workspace/src/geode/geometry/coordinate_system.cpp#127
```

### set_directions

```cpp
public void set_directions(std::array<Vector<dimension>, dimension> directions)
```

```cpp
Defined at /github/workspace/src/geode/geometry/coordinate_system.cpp#133
```

### coordinates

```cpp
public Point<dimension> coordinates(const Point<dimension> & global_coordinates)
```

```cpp
Defined at /github/workspace/src/geode/geometry/coordinate_system.cpp#143
```

### global_coordinates

```cpp
public Point<dimension> global_coordinates(const Point<dimension> & coordinates)
```

```cpp
Defined at /github/workspace/src/geode/geometry/coordinate_system.cpp#151
```

### string

```cpp
public basic_string string()
```

```cpp
Defined at /github/workspace/src/geode/geometry/coordinate_system.cpp#163
```



# class CoordinateSystem

# class CoordinateSystem

