# class GridMetricImpl

```cpp
Defined at ../include/geode/common/metric/private/grid_metric_impl.h#17
```

## Functions

### GridMetricImpl

```cpp
public void GridMetricImpl<dimension>(const Grid<dimension> & grid, string_view attribute_name)
```

```cpp
Defined at ../include/geode/common/metric/private/grid_metric_impl.h#23
```

### GridMetricImpl

```cpp
protected void GridMetricImpl<dimension>(const Grid<dimension> & grid)
```

```cpp
Defined at ../include/geode/common/metric/private/grid_metric_impl.h#34
```

### grid

```cpp
protected const Grid<dimension> & grid()
```

```cpp
Defined at ../include/geode/common/metric/private/grid_metric_impl.h#39
```

### index_metric

```cpp
protected double index_metric(const Index & index)
```

```cpp
Defined at ../include/geode/common/metric/private/grid_metric_impl.h#44
```

### index_metric

```cpp
protected double index_metric(index_t index)
```

```cpp
Defined at ../include/geode/common/metric/private/grid_metric_impl.h#50
```

### paint_cell

```cpp
protected void paint_cell(const Index & index, double metric)
```

```cpp
Defined at ../include/geode/common/metric/private/grid_metric_impl.h#55
```

### replace_default

```cpp
protected void replace_default(double default_metric)
```

```cpp
Defined at ../include/geode/common/metric/private/grid_metric_impl.h#63
```

### average_metric

```cpp
public double average_metric()
```

```cpp
Defined at ../include/geode/common/metric/private/grid_metric_impl.h#77
```

### median_metric

```cpp
public double median_metric()
```

```cpp
Defined at ../include/geode/common/metric/private/grid_metric_impl.h#98
```

### minimal_metric

```cpp
public double minimal_metric(const Segment<dimension> & segment)
```

```cpp
Defined at ../include/geode/common/metric/private/grid_metric_impl.h#120
```

### minimal_metric

```cpp
public double minimal_metric(const Triangle<dimension> & triangle)
```

```cpp
Defined at ../include/geode/common/metric/private/grid_metric_impl.h#130
```



