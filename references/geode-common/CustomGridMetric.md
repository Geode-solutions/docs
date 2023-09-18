# class CustomGridMetric

# class CustomGridMetric

# class CustomGridMetric


```cpp
Inherits from Metric<dimension>
```



## Functions

### CustomGridMetric<dimension>

```cpp
public void CustomGridMetric<dimension>(const Grid<dimension> & grid, string_view attribute_name)
```


### ~CustomGridMetric<dimension>

```cpp
public void ~CustomGridMetric<dimension>()
```


### grid

```cpp
public const Grid<dimension> & grid()
```


### metric

```cpp
public double metric(const Point<dimension> & point)
```


### metric

```cpp
public double metric(index_t cell_index)
```


### minimal_metric

```cpp
public double minimal_metric(const Segment<dimension> & segment)
```


### minimal_metric

```cpp
public double minimal_metric(const Triangle<dimension> & triangle)
```


### average_metric

```cpp
public double average_metric()
```


### median_metric

```cpp
public double median_metric()
```




