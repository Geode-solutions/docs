# class PointSet


```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<2U>
```



# class PointSet


 Interface class to represent a set of 2D or 3D points. A point is a vertex associated to spatial coordinates



```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<PointSet<dimension> > create()
```


 Create a new PointSet using default data structure.

### create

```cpp
public std::unique_ptr<PointSet<dimension> > create(const MeshImpl & impl)
```


 Create a new PointSet using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```


### clone

```cpp
public std::unique_ptr<PointSet<dimension> > clone()
```


### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```


 Compute the bounding box from mesh vertices

### PointSet

```cpp
protected void PointSet<dimension>()
```


### PointSet

```cpp
protected void PointSet<dimension>(PointSet<dimension> && other)
```


### operator=

```cpp
protected PointSet<dimension> & operator=(PointSet<dimension> && other)
```




# class PointSet


```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<3U>
```



