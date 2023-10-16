# class PointSetBuilder


```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<3U>
```



# class PointSetBuilder


```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<2U>
```



# class PointSetBuilder


 Interface class to represent the builder of a PointSet



```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<PointSetBuilder<dimension> > create(PointSet<dimension> & mesh)
```


 Create the builder associated with a PointSet.

**mesh** [in] The PointSet to build/modify

### create_point

```cpp
public index_t create_point(Point<dimension> point)
```


 Create a new point with associated coordinates.

**point** [in] The point to create

**return** the index of the created point

### copy

```cpp
public void copy(const PointSet<dimension> & point_set)
```


### PointSetBuilder

```cpp
protected void PointSetBuilder<>(PointSet<dimension> & mesh)
```




