# class PointsImpl


 This class implements the mesh points storage. Pre-v13: this class was used in the Mesh::Impl classes Post-v13: the inheritance in the Mesh::Impl is kept for backward file serialization, and it is now used in the CRS implementation.



## Functions

### get_point

```cpp
```cpp
public const Point<dimension> & get_point(index_t vertex_id)
```
```


### set_point

```cpp
```cpp
public void set_point(index_t vertex_id, Point<dimension> point)
```
```


### nb_points

```cpp
```cpp
public index_t nb_points()
```
```


### attribute_name

```cpp
```cpp
public string_view attribute_name()
```
```


### initialize_crs

```cpp
```cpp
public void initialize_crs(Mesh & mesh)
```
```


### PointsImpl

```cpp
```cpp
protected void PointsImpl<dimension>()
```
```


### PointsImpl

```cpp
```cpp
protected void PointsImpl<dimension>(Mesh & mesh)
```
```


### PointsImpl

```cpp
```cpp
protected void PointsImpl<dimension>(AttributeManager & manager)
```
```


### PointsImpl

```cpp
```cpp
protected void PointsImpl<dimension>(AttributeManager & manager, string_view attribute_name)
```
```



