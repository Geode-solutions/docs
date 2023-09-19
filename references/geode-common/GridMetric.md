# class GridMetric

# class GridMetric

# class GridMetric


 Grid metric implementation



```cpp
Inherits from Metric<dimension>
```



## Functions

### GridMetric

```cpp
public void GridMetric<dimension>(const Grid<dimension> & grid, double default_metric)
```


### ~GridMetric

```cpp
public void ~GridMetric<dimension>()
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


### paint_point

```cpp
public void paint_point(const Point<dimension> & point, double metric)
```


### paint_segment

```cpp
public void paint_segment(const Segment<dimension> & segment, double metric)
```


### paint_triangle

```cpp
public void paint_triangle(const Triangle<dimension> & triangle, double metric)
```


### paint_mesh

```cpp
public void paint_mesh(const PointSet<dimension> & mesh, double metric)
```


### paint_mesh

```cpp
public void paint_mesh(const EdgedCurve<dimension> & mesh, double metric)
```


### paint_mesh

```cpp
public void paint_mesh(const TriangulatedSurface<dimension> & mesh, double metric)
```


### optimize

```cpp
public void optimize(double gradation)
```




