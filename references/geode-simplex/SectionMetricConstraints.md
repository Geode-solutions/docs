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
public void import_constraints(string_view filename)
```


### export_constraints

```cpp
public void export_constraints(string_view filename)
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


### build_metric

```cpp
public const Metric2D & build_metric()
```




