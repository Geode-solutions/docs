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

# class BRepIsotropicMetricConstraints


## Functions

### BRepIsotropicMetricConstraints

```cpp
public void BRepIsotropicMetricConstraints(const BRep & brep)
```


### BRepIsotropicMetricConstraints

```cpp
public void BRepIsotropicMetricConstraints(BRepIsotropicMetricConstraints && other)
```


### operator=

```cpp
public BRepIsotropicMetricConstraints & operator=(BRepIsotropicMetricConstraints && other)
```


### ~BRepIsotropicMetricConstraints

```cpp
public void ~BRepIsotropicMetricConstraints()
```


### import_constraints

```cpp
public void import_constraints(basic_string_view filename)
```


### export_constraints

```cpp
public void export_constraints(basic_string_view filename)
```


### set_default_metric

```cpp
public void set_default_metric(double metric)
```


### default_metric

```cpp
public double default_metric()
```


### set_gradation

```cpp
public void set_gradation(double gradation)
```


### gradation

```cpp
public double gradation()
```


### set_corner_metric

```cpp
public void set_corner_metric(const Corner3D & corner, double metric)
```


### corner_metric

```cpp
public optional corner_metric(const Corner3D & corner)
```


### set_line_metric

```cpp
public void set_line_metric(const Line3D & line, double metric)
```


### line_metric

```cpp
public optional line_metric(const Line3D & line)
```


### set_surface_metric

```cpp
public void set_surface_metric(const Surface3D & surface, double metric)
```


### surface_metric

```cpp
public optional surface_metric(const Surface3D & surface)
```


### set_block_metric

```cpp
public void set_block_metric(const Block3D & block, double metric)
```


### block_metric

```cpp
public optional block_metric(const Block3D & block)
```


### set_point_set_metric

```cpp
public void set_point_set_metric(const geode::PointSet3D & mesh, double metric)
```


### set_edged_curve_metric

```cpp
public void set_edged_curve_metric(const geode::EdgedCurve3D & mesh, double metric)
```


### set_triangulated_surface_metric

```cpp
public void set_triangulated_surface_metric(geode::TriangulatedSurface3D & mesh, double metric)
```


### build_metric

```cpp
public const Metric3D & build_metric()
```




