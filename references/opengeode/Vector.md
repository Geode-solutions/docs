# class Vector


 Description of a vector in the given dimension with double coordinates



```cpp
Inherits from Point<dimension>
```



## Functions

### Vector

```cpp
public void Vector<dimension>()
```


### Vector

```cpp
public void Vector<dimension>(const Point<dimension> & vector)
```


### Vector

```cpp
public void Vector<dimension>(std::array<double, dimension> values)
```


### Vector

```cpp
public void Vector<dimension>(const Point<dimension> & from, const Point<dimension> & to)
```


### length2

```cpp
public double length2()
```


### length

```cpp
public double length()
```


### operator*

```cpp
public Vector operator*(double multiplier)
```


### operator/

```cpp
public Vector operator/(double divider)
```


### operator+

```cpp
public Vector operator+(const Vector<dimension> & other)
```


### operator-

```cpp
public Vector operator-(const Vector<dimension> & other)
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
public void operator+=(const Vector<dimension> & other)
```


### operator-=

```cpp
public void operator-=(const Vector<dimension> & other)
```


### normalize

```cpp
public Vector normalize()
```


### dot

```cpp
public double dot(const Vector<dimension> & other)
```


### cross

```cpp
public Vector cross(const Vector<dimension> & other)
```




