# class PointSet

```cpp
Defined at /github/workspace/src/geode/mesh/core/point_set.cpp#96
```

```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<2U>
```



# class PointSet

```cpp
Defined at ../../include/geode/mesh/core/point_set.h#46
```

 Interface class to represent a set of 2D or 3D points. A point is a vertex associated to spatial coordinates



```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<PointSet<dimension> > create()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/point_set.cpp#37
```

 Create a new PointSet using default data structure.

### create

```cpp
public std::unique_ptr<PointSet<dimension> > create(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/point_set.cpp#44
```

 Create a new PointSet using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/point_set.cpp#51
```

### clone

```cpp
public std::unique_ptr<PointSet<dimension> > clone()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/point_set.cpp#75
```

### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/point_set.cpp#85
```

 Compute the bounding box from mesh vertices

### PointSet

```cpp
protected void PointSet<dimension>()
```

```cpp
Defined at ../../include/geode/mesh/core/point_set.h#77
```

### PointSet

```cpp
protected void PointSet<dimension>(PointSet<dimension> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/point_set.h#78
```

### operator=

```cpp
protected PointSet<dimension> & operator=(PointSet<dimension> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/point_set.h#79
```



# class PointSet

```cpp
Defined at /github/workspace/src/geode/mesh/core/point_set.cpp#97
```

```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<3U>
```



