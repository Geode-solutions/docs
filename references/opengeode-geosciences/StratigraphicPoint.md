# class StratigraphicPoint

```cpp
Defined at ../include/geode/geosciences/implicit/geometry/stratigraphic_point.h#38
```

 A Stratigraphic Point represents a point in a stratigraphic space, with an implicit field value and a point of dimension-1 giving its position in the stratigraphic space.



## Functions

### StratigraphicPoint

```cpp
public void StratigraphicPoint<>()
```

```cpp
Defined at ../include/geode/geosciences/implicit/geometry/stratigraphic_point.h#43
```

### StratigraphicPoint

```cpp
public void StratigraphicPoint<>(Point<location_dim> stratigraphic_location, double implicit_value)
```

```cpp
Defined at ../include/geode/geosciences/implicit/geometry/stratigraphic_point.h#48
```

### StratigraphicPoint

```cpp
public void StratigraphicPoint<>(const std::array<double, dimension> & values)
```

```cpp
Defined at ../include/geode/geosciences/implicit/geometry/stratigraphic_point.h#54
```

### StratigraphicPoint

```cpp
public void StratigraphicPoint<>(const Point<dimension> & stratigraphic_coordinates)
```

```cpp
Defined at ../include/geode/geosciences/implicit/geometry/stratigraphic_point.h#62
```

### stratigraphic_location

```cpp
public const Point<location_dim> & stratigraphic_location()
```

```cpp
Defined at ../include/geode/geosciences/implicit/geometry/stratigraphic_point.h#74
```

### implicit_value

```cpp
public double implicit_value()
```

```cpp
Defined at ../include/geode/geosciences/implicit/geometry/stratigraphic_point.h#79
```

### stratigraphic_coordinates

```cpp
public Point<dimension> stratigraphic_coordinates()
```

```cpp
Defined at ../include/geode/geosciences/implicit/geometry/stratigraphic_point.h#84
```

### set_stratigraphic_location

```cpp
public void set_stratigraphic_location(Point<location_dim> stratigraphic_location)
```

```cpp
Defined at ../include/geode/geosciences/implicit/geometry/stratigraphic_point.h#95
```

### set_implicit_value

```cpp
public void set_implicit_value(double implicit_value)
```

```cpp
Defined at ../include/geode/geosciences/implicit/geometry/stratigraphic_point.h#101
```

### string

```cpp
public basic_string string()
```

```cpp
Defined at ../include/geode/geosciences/implicit/geometry/stratigraphic_point.h#106
```



