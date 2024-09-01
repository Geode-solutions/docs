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

# class SectionMetricConstraints


## Functions

### SectionMetricConstraints

```cpp
public void SectionMetricConstraints(const Section & brep)
```


### ~SectionMetricConstraints

```cpp
public void ~SectionMetricConstraints()
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
public void set_corner_metric(const Corner2D & corner, double metric)
```


### corner_metric

```cpp
public optional corner_metric(const Corner2D & corner)
```


### set_line_metric

```cpp
public void set_line_metric(const Line2D & line, double metric)
```


### line_metric

```cpp
public optional line_metric(const Line2D & line)
```


### set_surface_metric

```cpp
public void set_surface_metric(const Surface2D & surface, double metric)
```


### surface_metric

```cpp
public optional surface_metric(const Surface2D & surface)
```


### set_point_set_metric

```cpp
public void set_point_set_metric(const geode::PointSet2D & mesh, double metric)
```


### set_edged_curve_metric

```cpp
public void set_edged_curve_metric(const geode::EdgedCurve2D & mesh, double metric)
```


### set_triangulated_surface_metric

```cpp
public void set_triangulated_surface_metric(geode::TriangulatedSurface2D & mesh, double metric)
```


### build_metric

```cpp
public const Metric2D & build_metric()
```




