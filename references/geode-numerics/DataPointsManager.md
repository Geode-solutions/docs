# class DataPointsManager

# class DataPointsManager

```cpp
Defined at ../../include/geode/numerics/scalar_function/data_points_manager.h#20
```

```cpp
Inherits from DataConstraintsManager<dimension>
```



## Records

Impl



## Functions

### DataPointsManager

```cpp
public void DataPointsManager<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#162
```

### DataPointsManager

```cpp
public void DataPointsManager<dimension>(DataPointsManager<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#167
```

### ~DataPointsManager

```cpp
public void ~DataPointsManager<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#174
```

### load_data_points

```cpp
public void load_data_points(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#179
```

### add_data_point

```cpp
public index_t add_data_point(Point<dimension> position, double value, double weight)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#186
```

### remove_data_point

```cpp
public void remove_data_point(index_t data_point_index)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#193
```

### change_data_point_value

```cpp
public void change_data_point_value(index_t data_point_index, double new_value)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#200
```

### change_data_point_weight

```cpp
public void change_data_point_weight(index_t data_point_index, double new_weight)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#207
```

### nb_data_points

```cpp
public index_t nb_data_points()
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#214
```

### data_points_mean_value

```cpp
public double data_points_mean_value()
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#220
```

### data_point_position

```cpp
public const Point<dimension> & data_point_position(index_t data_point_index)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#226
```

### data_point_value

```cpp
public double data_point_value(index_t data_point_index)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#234
```

### data_point_weight

```cpp
public double data_point_weight(index_t data_point_index)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#241
```

### save_data_points_manager

```cpp
public void save_data_points_manager(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/numerics/scalar_function/data_points_manager.cpp#248
```



# class DataPointsManager

