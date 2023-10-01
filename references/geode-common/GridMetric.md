# class GridMetric

# class GridMetric

# class GridMetric

```cpp
Defined at ../include/geode/common/metric/grid_metric.h#28
```

 Grid metric implementation



```cpp
Inherits from Metric<dimension>
```



## Functions

### GridMetric

```cpp
public void GridMetric<dimension>(const Grid<dimension> & grid, double default_metric)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#242
```

### ~GridMetric

```cpp
public void ~GridMetric<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#249
```

### grid

```cpp
public const Grid<dimension> & grid()
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#254
```

### metric

```cpp
public double metric(const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#260
```

### metric

```cpp
public double metric(index_t cell_index)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#267
```

### minimal_metric

```cpp
public double minimal_metric(const Segment<dimension> & segment)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#273
```

### minimal_metric

```cpp
public double minimal_metric(const Triangle<dimension> & triangle)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#280
```

### average_metric

```cpp
public double average_metric()
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#287
```

### median_metric

```cpp
public double median_metric()
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#293
```

### paint_point

```cpp
public void paint_point(const Point<dimension> & point, double metric)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#306
```

### paint_segment

```cpp
public void paint_segment(const Segment<dimension> & segment, double metric)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#299
```

### paint_triangle

```cpp
public void paint_triangle(const Triangle<dimension> & triangle, double metric)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#313
```

### paint_mesh

```cpp
public void paint_mesh(const PointSet<dimension> & mesh, double metric)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#320
```

### paint_mesh

```cpp
public void paint_mesh(const EdgedCurve<dimension> & mesh, double metric)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#327
```

### paint_mesh

```cpp
public void paint_mesh(const TriangulatedSurface<dimension> & mesh, double metric)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#334
```

### optimize

```cpp
public void optimize(double gradation)
```

```cpp
Defined at /github/workspace/src/geode/common/metric/grid_metric.cpp#341
```



