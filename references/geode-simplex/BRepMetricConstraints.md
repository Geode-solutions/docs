# class BRepMetricConstraints


## Functions

### BRepMetricConstraints

```cpp
public void BRepMetricConstraints(const BRep & brep)
```


### ~BRepMetricConstraints

```cpp
public void ~BRepMetricConstraints()
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
public void set_corner_metric(const Corner3D & corner, double metric)
```


### corner_metric

```cpp
public absl::optional<double> corner_metric(const Corner3D & corner)
```


### set_line_metric

```cpp
public void set_line_metric(const Line3D & line, double metric)
```


### line_metric

```cpp
public absl::optional<double> line_metric(const Line3D & line)
```


### set_surface_metric

```cpp
public void set_surface_metric(const Surface3D & surface, double metric)
```


### surface_metric

```cpp
public absl::optional<double> surface_metric(const Surface3D & surface)
```


### set_block_metric

```cpp
public void set_block_metric(const Block3D & block, double metric)
```


### block_metric

```cpp
public absl::optional<double> block_metric(const Block3D & block)
```


### build_metric

```cpp
public const Metric3D & build_metric()
```




