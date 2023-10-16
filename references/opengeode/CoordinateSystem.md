# class CoordinateSystem


```cpp
Inherits from Frame<dimension>
```



## Functions

### CoordinateSystem

```cpp
public void CoordinateSystem<dimension>()
```


### CoordinateSystem

```cpp
public void CoordinateSystem<dimension>(std::array<Vector<dimension>, dimension> directions, Point<dimension> origin)
```


### CoordinateSystem

```cpp
public void CoordinateSystem<dimension>(Point<dimension> origin, const std::array<Point<dimension>, dimension> & other_points)
```


### origin

```cpp
public const Point<dimension> & origin()
```


### set_origin

```cpp
public void set_origin(Point<dimension> origin)
```


### set_directions

```cpp
public void set_directions(std::array<Vector<dimension>, dimension> directions)
```


### coordinates

```cpp
public Point<dimension> coordinates(const Point<dimension> & global_coordinates)
```


### global_coordinates

```cpp
public Point<dimension> global_coordinates(const Point<dimension> & coordinates)
```


### string

```cpp
public basic_string string()
```




# class CoordinateSystem

# class CoordinateSystem

