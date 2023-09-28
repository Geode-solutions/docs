# class PointsImpl

```cpp
Defined at ../../include/geode/mesh/core/private/points_impl.h#47
```

 This class implements the mesh points storage. Pre-v13: this class was used in the Mesh::Impl classes Post-v13: the inheritance in the Mesh::Impl is kept for backward file serialization, and it is now used in the CRS implementation.



## Functions

### get_point

```cpp
public const Point<dimension> & get_point(index_t vertex_id)
```

```cpp
Defined at ../../include/geode/mesh/core/private/points_impl.h#52
```

### set_point

```cpp
public void set_point(index_t vertex_id, Point<dimension> point)
```

```cpp
Defined at ../../include/geode/mesh/core/private/points_impl.h#57
```

### nb_points

```cpp
public index_t nb_points()
```

```cpp
Defined at ../../include/geode/mesh/core/private/points_impl.h#62
```

### attribute_name

```cpp
public string_view attribute_name()
```

```cpp
Defined at ../../include/geode/mesh/core/private/points_impl.h#67
```

### initialize_crs

```cpp
public void initialize_crs(Mesh & mesh)
```

```cpp
Defined at ../../include/geode/mesh/core/private/points_impl.h#73
```

### PointsImpl

```cpp
protected void PointsImpl<dimension>()
```

```cpp
Defined at ../../include/geode/mesh/core/private/points_impl.h#113
```

### PointsImpl

```cpp
protected void PointsImpl<dimension>(Mesh & mesh)
```

```cpp
Defined at ../../include/geode/mesh/core/private/points_impl.h#116
```

### PointsImpl

```cpp
protected void PointsImpl<dimension>(AttributeManager & manager)
```

```cpp
Defined at ../../include/geode/mesh/core/private/points_impl.h#122
```

### PointsImpl

```cpp
protected void PointsImpl<dimension>(AttributeManager & manager, string_view attribute_name)
```

```cpp
Defined at ../../include/geode/mesh/core/private/points_impl.h#127
```



