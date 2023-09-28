# class Point

```cpp
Defined at ../../include/geode/geometry/point.h#47
```

 Description of a point in the given dimension with double coordinates



## Functions

### Point

```cpp
public void Point<>()
```

```cpp
Defined at ../../include/geode/geometry/point.h#50
```

### Point

```cpp
public void Point<>(std::array<double, dimension> values)
```

```cpp
Defined at ../../include/geode/geometry/point.h#55
```

### value

```cpp
public double value(local_index_t index)
```

```cpp
Defined at ../../include/geode/geometry/point.h#60
```

### set_value

```cpp
public void set_value(local_index_t index, double coordinate)
```

```cpp
Defined at ../../include/geode/geometry/point.h#65
```

### operator==

```cpp
public bool operator==(const Point<> & other)
```

```cpp
Defined at ../../include/geode/geometry/point.h#70
```

### operator!=

```cpp
public bool operator!=(const Point<> & other)
```

```cpp
Defined at ../../include/geode/geometry/point.h#82
```

### operator<

```cpp
public bool operator<(const Point<> & other)
```

```cpp
Defined at ../../include/geode/geometry/point.h#87
```

### operator<=

```cpp
public bool operator<=(const Point<> & other)
```

```cpp
Defined at ../../include/geode/geometry/point.h#103
```

### operator*

```cpp
public Point operator*(double multiplier)
```

```cpp
Defined at ../../include/geode/geometry/point.h#108
```

### operator/

```cpp
public Point operator/(double divider)
```

```cpp
Defined at ../../include/geode/geometry/point.h#113
```

### operator+

```cpp
public Point operator+(const Point<> & other)
```

```cpp
Defined at ../../include/geode/geometry/point.h#118
```

### operator-

```cpp
public Point operator-(const Point<> & other)
```

```cpp
Defined at ../../include/geode/geometry/point.h#123
```

### operator*=

```cpp
public void operator*=(double multiplier)
```

```cpp
Defined at ../../include/geode/geometry/point.h#128
```

### operator/=

```cpp
public void operator/=(double divider)
```

```cpp
Defined at ../../include/geode/geometry/point.h#133
```

### operator+=

```cpp
public void operator+=(const Point<> & other)
```

```cpp
Defined at ../../include/geode/geometry/point.h#138
```

### operator-=

```cpp
public void operator-=(const Point<> & other)
```

```cpp
Defined at ../../include/geode/geometry/point.h#143
```

### inexact_equal

```cpp
public bool inexact_equal(const Point<> & other)
```

```cpp
Defined at ../../include/geode/geometry/point.h#148
```

### string

```cpp
public basic_string string()
```

```cpp
Defined at ../../include/geode/geometry/point.h#164
```



