# class GenericTetrahedron


# class GenericTetrahedron


## Functions

### GenericTetrahedron

```cpp
public void GenericTetrahedron<PointType>(PointType p0, PointType p1, PointType p2, PointType p3)
```


### GenericTetrahedron

```cpp
public void GenericTetrahedron<PointType>(const GenericTetrahedron<PointType> & other)
```


### operator=

```cpp
public GenericTetrahedron<PointType> & operator=(const GenericTetrahedron<PointType> & other)
```


### GenericTetrahedron

```cpp
public void GenericTetrahedron<PointType>(GenericTetrahedron<PointType> && other)
```


### operator=

```cpp
public GenericTetrahedron<PointType> & operator=(GenericTetrahedron<PointType> && other)
```


### barycenter

```cpp
public Point3D barycenter()
```


### set_point

```cpp
public void set_point(index_t vertex, PointType point)
```


### vertices

```cpp
public const std::array<PointType, 4> & vertices()
```


### bounding_box

```cpp
public BoundingBox3D bounding_box()
```




# class GenericTetrahedron


