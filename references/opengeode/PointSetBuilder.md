# class PointSetBuilder

```cpp
Defined at /github/workspace/src/geode/mesh/builder/point_set_builder.cpp#81
```

```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<3U>
```



# class PointSetBuilder

```cpp
Defined at /github/workspace/src/geode/mesh/builder/point_set_builder.cpp#80
```

```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<2U>
```



# class PointSetBuilder

```cpp
Defined at ../../include/geode/mesh/builder/point_set_builder.h#44
```

 Interface class to represent the builder of a PointSet



```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<PointSetBuilder<dimension> > create(PointSet<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/point_set_builder.cpp#41
```

 Create the builder associated with a PointSet.

**mesh** [in] The PointSet to build/modify

### create_point

```cpp
public index_t create_point(Point<dimension> point)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/point_set_builder.cpp#49
```

 Create a new point with associated coordinates.

**point** [in] The point to create

**return** the index of the created point

### copy

```cpp
public void copy(const PointSet<dimension> & point_set)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/point_set_builder.cpp#59
```

### PointSetBuilder

```cpp
protected void PointSetBuilder<>(PointSet<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/point_set_builder.cpp#33
```



