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

# class BRepAnisotropicMetricConstraints


## Functions

### BRepAnisotropicMetricConstraints

```cpp
public void BRepAnisotropicMetricConstraints(const BRep & brep, const Frame3D & frame)
```


### BRepAnisotropicMetricConstraints

```cpp
public void BRepAnisotropicMetricConstraints(BRepAnisotropicMetricConstraints && other)
```


### operator=

```cpp
public BRepAnisotropicMetricConstraints & operator=(BRepAnisotropicMetricConstraints && other)
```


### ~BRepAnisotropicMetricConstraints

```cpp
public void ~BRepAnisotropicMetricConstraints()
```


### set_default_metric_values

```cpp
public void set_default_metric_values(std::array<double, 3> metric)
```


### default_metric

```cpp
public std::array<double, 3> default_metric()
```


### set_gradations

```cpp
public void set_gradations(std::array<double, 3> gradation)
```


### gradations

```cpp
public std::array<double, 3> gradations()
```


### set_corner_metric

```cpp
public void set_corner_metric(const Corner3D & corner, std::array<double, 3> metric)
```


### corner_metric

```cpp
public std::optional<std::array<double, 3>> corner_metric(const Corner3D & corner)
```


### set_line_metric

```cpp
public void set_line_metric(const Line3D & line, std::array<double, 3> metric)
```


### line_metric

```cpp
public std::optional<std::array<double, 3>> line_metric(const Line3D & line)
```


### set_surface_metric

```cpp
public void set_surface_metric(const Surface3D & surface, std::array<double, 3> metric)
```


### surface_metric

```cpp
public std::optional<std::array<double, 3>> surface_metric(const Surface3D & surface)
```


### set_block_metric

```cpp
public void set_block_metric(const Block3D & block, std::array<double, 3> metric)
```


### block_metric

```cpp
public std::optional<std::array<double, 3>> block_metric(const Block3D & block)
```


### set_point_set_metric

```cpp
public void set_point_set_metric(const geode::PointSet3D & mesh, std::array<double, 3> metric)
```


### set_edged_curve_metric

```cpp
public void set_edged_curve_metric(const geode::EdgedCurve3D & mesh, std::array<double, 3> metric)
```


### set_triangulated_surface_metric

```cpp
public void set_triangulated_surface_metric(geode::TriangulatedSurface3D & mesh, std::array<double, 3> metric)
```


### build_metric

```cpp
public const Metric3D & build_metric()
```




