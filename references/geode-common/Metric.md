# class Metric

```cpp
Defined at ../include/geode/common/metric/metric.h#23
```

 Interface class for metric computation



## Functions

### ~Metric

```cpp
public void ~Metric<dimension>()
```

```cpp
Defined at ../include/geode/common/metric/metric.h#26
```

### metric

```cpp
public double metric(const Point<dimension> & point)
```

### minimal_metric

```cpp
public double minimal_metric(const Segment<dimension> & segment)
```

### minimal_metric

```cpp
public double minimal_metric(const Triangle<dimension> & triangle)
```

### minimal_metric

```cpp
public typename std::enable_if<T == 3, double>::type minimal_metric(const Tetrahedron & tetrahedron)
```

```cpp
Defined at ../include/geode/common/metric/metric.h#37
```

### average_metric

```cpp
public double average_metric()
```

### median_metric

```cpp
public double median_metric()
```



