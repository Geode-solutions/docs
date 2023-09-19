# class GenericSegment


# class GenericSegment


# class GenericSegment


# class GenericSegment


# class GenericSegment


# class GenericSegment


## Functions

### GenericSegment

```cpp
public void GenericSegment<PointType, dimension>(PointType p0, PointType p1)
```


### GenericSegment

```cpp
public void GenericSegment<PointType, dimension>(const GenericSegment<PointType, dimension> & other)
```


### operator=

```cpp
public GenericSegment<PointType, dimension> & operator=(const GenericSegment<PointType, dimension> & other)
```


### GenericSegment

```cpp
public void GenericSegment<PointType, dimension>(GenericSegment<PointType, dimension> && other)
```


### operator=

```cpp
public GenericSegment<PointType, dimension> & operator=(GenericSegment<PointType, dimension> && other)
```


### direction

```cpp
public Vector<dimension> direction()
```


### normalized_direction

```cpp
public Vector<dimension> normalized_direction()
```


### barycenter

```cpp
public Point<dimension> barycenter()
```


### length

```cpp
public double length()
```


### set_point

```cpp
public void set_point(index_t vertex, PointType point)
```


### vertices

```cpp
public const std::array<PointType, 2> & vertices()
```


### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```




# class GenericSegment


