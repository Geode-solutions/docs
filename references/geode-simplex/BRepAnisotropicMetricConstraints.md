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
public void set_default_metric_values(array metric)
```


### default_metric

```cpp
public array default_metric()
```


### set_gradations

```cpp
public void set_gradations(array gradation)
```


### gradations

```cpp
public array gradations()
```


### set_corner_metric

```cpp
public void set_corner_metric(const Corner3D & corner, array metric)
```


### corner_metric

```cpp
public optional corner_metric(const Corner3D & corner)
```


### set_line_metric

```cpp
public void set_line_metric(const Line3D & line, array metric)
```


### line_metric

```cpp
public optional line_metric(const Line3D & line)
```


### set_surface_metric

```cpp
public void set_surface_metric(const Surface3D & surface, array metric)
```


### surface_metric

```cpp
public optional surface_metric(const Surface3D & surface)
```


### set_block_metric

```cpp
public void set_block_metric(const Block3D & block, array metric)
```


### block_metric

```cpp
public optional block_metric(const Block3D & block)
```


### set_point_set_metric

```cpp
public void set_point_set_metric(const geode::PointSet3D & mesh, array metric)
```


### set_edged_curve_metric

```cpp
public void set_edged_curve_metric(const geode::EdgedCurve3D & mesh, array metric)
```


### set_triangulated_surface_metric

```cpp
public void set_triangulated_surface_metric(geode::TriangulatedSurface3D & mesh, array metric)
```


### build_metric

```cpp
public const Metric3D & build_metric()
```




