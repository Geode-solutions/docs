# class ImplicitDataManager

```cpp
Defined at ../include/geode/implicit/modeler/implicit_data_manager.h#25
```

```cpp
Inherits from DataConstraintsManager<dimension>
```



## Records

Impl



## Functions

### ImplicitDataManager

```cpp
public void ImplicitDataManager<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_data_manager.cpp#108
```

### ImplicitDataManager

```cpp
public void ImplicitDataManager<dimension>(ImplicitDataManager<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_data_manager.cpp#113
```

### ~ImplicitDataManager

```cpp
public void ~ImplicitDataManager<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_data_manager.cpp#120
```

### add_data_pointset

```cpp
public void add_data_pointset(const uuid & data_id, const PointSet<dimension> & pointset, double weight)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_data_manager.cpp#125
```

### set_data_value

```cpp
public void set_data_value(const uuid & data_id, double value)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_data_manager.cpp#134
```

### nb_data_points

```cpp
public index_t nb_data_points()
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_data_manager.cpp#141
```

### data_point_position

```cpp
public const Point<dimension> & data_point_position(index_t data_point_index)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_data_manager.cpp#147
```

### data_point_value

```cpp
public double data_point_value(index_t data_point_index)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_data_manager.cpp#155
```

### data_point_weight

```cpp
public double data_point_weight(index_t data_point_index)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_data_manager.cpp#162
```

### data_value_from_uuid

```cpp
public double data_value_from_uuid(const uuid & data_id)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_data_manager.cpp#169
```



# class ImplicitDataManager

# class ImplicitDataManager

