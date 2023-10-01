# class CustomGridMetric

# class CustomGridMetric

# class CustomGridMetric

```cpp
Defined at ../include/geode/common/metric/custom_grid_metric.h#20
```

```cpp
Inherits from Metric<dimension>
```



## Functions

### CustomGridMetric

```cpp
public void CustomGridMetric<dimension>(const Grid<dimension> & grid, string_view attribute_name)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/custom_grid_metric.cpp#57
```

### ~CustomGridMetric

```cpp
public void ~CustomGridMetric<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/common/metric/custom_grid_metric.cpp#64
```

### grid

```cpp
public const Grid<dimension> & grid()
```

```cpp
Defined at /github/workspace/src/geode/common/metric/custom_grid_metric.cpp#69
```

### metric

```cpp
public double metric(const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/custom_grid_metric.cpp#75
```

### metric

```cpp
public double metric(index_t cell_index)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/custom_grid_metric.cpp#82
```

### minimal_metric

```cpp
public double minimal_metric(const Segment<dimension> & segment)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/custom_grid_metric.cpp#88
```

### minimal_metric

```cpp
public double minimal_metric(const Triangle<dimension> & triangle)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/custom_grid_metric.cpp#95
```

### average_metric

```cpp
public double average_metric()
```

```cpp
Defined at /github/workspace/src/geode/common/metric/custom_grid_metric.cpp#102
```

### median_metric

```cpp
public double median_metric()
```

```cpp
Defined at /github/workspace/src/geode/common/metric/custom_grid_metric.cpp#108
```



