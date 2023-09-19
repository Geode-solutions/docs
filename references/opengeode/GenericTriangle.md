# class GenericTriangle

# class GenericTriangle


## Functions

### GenericTriangle

```cpp
public void GenericTriangle<PointType, dimension>(PointType p0, PointType p1, PointType p2)
```


### GenericTriangle

```cpp
public void GenericTriangle<PointType, dimension>(const GenericTriangle<PointType, dimension> & other)
```


### operator=

```cpp
public GenericTriangle<PointType, dimension> & operator=(const GenericTriangle<PointType, dimension> & other)
```


### GenericTriangle

```cpp
public void GenericTriangle<PointType, dimension>(GenericTriangle<PointType, dimension> && other)
```


### operator=

```cpp
public GenericTriangle<PointType, dimension> & operator=(GenericTriangle<PointType, dimension> && other)
```


### barycenter

```cpp
public Point<dimension> barycenter()
```


### normal

```cpp
public typename std::enable_if<T == 3, absl::optional<Vector3D> >::type normal()
```


### plane

```cpp
public typename std::enable_if<T == 3, absl::optional<Plane> >::type plane()
```


### owner_plane

```cpp
public typename std::enable_if<T == 3, absl::optional<OwnerPlane> >::type owner_plane()
```


### pivot

```cpp
public typename std::enable_if<T == 3, absl::optional<local_index_t> >::type pivot()
```


### pivot_and_normal

```cpp
public typename std::enable_if<T == 3, absl::optional<std::pair<local_index_t, Vector3D> > >::type pivot_and_normal()
```


### set_point

```cpp
public void set_point(index_t vertex, PointType point)
```


### vertices

```cpp
public const std::array<PointType, 3> & vertices()
```


### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```




# class GenericTriangle

