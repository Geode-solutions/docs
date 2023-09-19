# class Point


 Description of a point in the given dimension with double coordinates



## Functions

### Point

```cpp
public void Point<>()
```


### Point

```cpp
public void Point<>(std::array<double, dimension> values)
```


### value

```cpp
public double value(local_index_t index)
```


### set_value

```cpp
public void set_value(local_index_t index, double coordinate)
```


### operator==

```cpp
public _Bool operator==(const Point<> & other)
```


### operator!=

```cpp
public _Bool operator!=(const Point<> & other)
```


### operator<

```cpp
public _Bool operator<(const Point<> & other)
```


### operator<=

```cpp
public _Bool operator<=(const Point<> & other)
```


### operator*

```cpp
public Point operator*(double multiplier)
```


### operator/

```cpp
public Point operator/(double divider)
```


### operator+

```cpp
public Point operator+(const Point<> & other)
```


### operator-

```cpp
public Point operator-(const Point<> & other)
```


### operator*=

```cpp
public void operator*=(double multiplier)
```


### operator/=

```cpp
public void operator/=(double divider)
```


### operator+=

```cpp
public void operator+=(const Point<> & other)
```


### operator-=

```cpp
public void operator-=(const Point<> & other)
```


### inexact_equal

```cpp
public _Bool inexact_equal(const Point<> & other)
```


### string

```cpp
public basic_string string()
```




