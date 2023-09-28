# class Vector

```cpp
Defined at ../../include/geode/geometry/vector.h#37
```

 Description of a vector in the given dimension with double coordinates



```cpp
Inherits from Point<dimension>
```



## Functions

### Vector

```cpp
public void Vector<dimension>()
```

```cpp
Defined at ../../include/geode/geometry/vector.h#40
```

### Vector

```cpp
public void Vector<dimension>(const Point<dimension> & vector)
```

```cpp
Defined at ../../include/geode/geometry/vector.h#42
```

### Vector

```cpp
public void Vector<dimension>(std::array<double, dimension> values)
```

```cpp
Defined at ../../include/geode/geometry/vector.h#47
```

### Vector

```cpp
public void Vector<dimension>(const Point<dimension> & from, const Point<dimension> & to)
```

```cpp
Defined at ../../include/geode/geometry/vector.h#52
```

### length2

```cpp
public double length2()
```

```cpp
Defined at ../../include/geode/geometry/vector.h#57
```

### length

```cpp
public double length()
```

```cpp
Defined at ../../include/geode/geometry/vector.h#62
```

### operator*

```cpp
public Vector operator*(double multiplier)
```

```cpp
Defined at ../../include/geode/geometry/vector.h#67
```

### operator/

```cpp
public Vector operator/(double divider)
```

```cpp
Defined at ../../include/geode/geometry/vector.h#72
```

### operator+

```cpp
public Vector operator+(const Vector<dimension> & other)
```

```cpp
Defined at ../../include/geode/geometry/vector.h#77
```

### operator-

```cpp
public Vector operator-(const Vector<dimension> & other)
```

```cpp
Defined at ../../include/geode/geometry/vector.h#82
```

### operator*=

```cpp
public void operator*=(double multiplier)
```

```cpp
Defined at ../../include/geode/geometry/vector.h#87
```

### operator/=

```cpp
public void operator/=(double divider)
```

```cpp
Defined at ../../include/geode/geometry/vector.h#92
```

### operator+=

```cpp
public void operator+=(const Vector<dimension> & other)
```

```cpp
Defined at ../../include/geode/geometry/vector.h#97
```

### operator-=

```cpp
public void operator-=(const Vector<dimension> & other)
```

```cpp
Defined at ../../include/geode/geometry/vector.h#102
```

### normalize

```cpp
public Vector normalize()
```

```cpp
Defined at ../../include/geode/geometry/vector.h#107
```

### dot

```cpp
public double dot(const Vector<dimension> & other)
```

```cpp
Defined at ../../include/geode/geometry/vector.h#112
```

### cross

```cpp
public Vector cross(const Vector<dimension> & other)
```

```cpp
Defined at ../../include/geode/geometry/vector.h#122
```



