# class Metric


 Interface class for metric computation



## Functions

### ~Metric<dimension>

```cpp
public void ~Metric<dimension>()
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


### average_metric

```cpp
public double average_metric()
```

### median_metric

```cpp
public double median_metric()
```



