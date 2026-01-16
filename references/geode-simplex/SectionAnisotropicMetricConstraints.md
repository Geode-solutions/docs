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

# class SectionAnisotropicMetricConstraints


## Functions

### SectionAnisotropicMetricConstraints

```cpp
public void SectionAnisotropicMetricConstraints(const Section & section, const Frame2D & frame)
```


### SectionAnisotropicMetricConstraints

```cpp
public void SectionAnisotropicMetricConstraints(SectionAnisotropicMetricConstraints && other)
```


### operator=

```cpp
public SectionAnisotropicMetricConstraints & operator=(SectionAnisotropicMetricConstraints && other)
```


### ~SectionAnisotropicMetricConstraints

```cpp
public void ~SectionAnisotropicMetricConstraints()
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
public void set_corner_metric(const Corner2D & corner, array metric)
```


### corner_metric

```cpp
public optional corner_metric(const Corner2D & corner)
```


### set_line_metric

```cpp
public void set_line_metric(const Line2D & line, array metric)
```


### line_metric

```cpp
public optional line_metric(const Line2D & line)
```


### set_surface_metric

```cpp
public void set_surface_metric(const Surface2D & surface, array metric)
```


### surface_metric

```cpp
public optional surface_metric(const Surface2D & surface)
```


### set_point_set_metric

```cpp
public void set_point_set_metric(const geode::PointSet2D & mesh, array metric)
```


### set_edged_curve_metric

```cpp
public void set_edged_curve_metric(const geode::EdgedCurve2D & mesh, array metric)
```


### set_triangulated_surface_metric

```cpp
public void set_triangulated_surface_metric(geode::TriangulatedSurface2D & mesh, array metric)
```


### build_metric

```cpp
public const Metric2D & build_metric()
```




