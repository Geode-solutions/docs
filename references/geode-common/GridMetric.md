<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class GridMetric


```cpp
Inherits from IsotropicMetric<2U>
```



# class GridMetric


```cpp
Inherits from IsotropicMetric<3U>
```



# class GridMetric


 Grid metric implementation



```cpp
Inherits from IsotropicMetric<dimension>
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
public double metric(const Point<dimension> & point, const Vector<dimension> & )
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


### global_average_metric

```cpp
public std::array<double, dimension> global_average_metric()
```


### global_minimal_metric

```cpp
public std::array<double, dimension> global_minimal_metric()
```


### median_metric

```cpp
public double median_metric()
```


### coordinate_system

```cpp
public CoordinateSystem<dimension> coordinate_system(const Point<dimension> & point)
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




