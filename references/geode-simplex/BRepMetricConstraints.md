# class BRepMetricConstraints

```cpp
Defined at ../../include/geode/simplex/metric/brep_metric_constraints.h#30
```

## Functions

### BRepMetricConstraints

```cpp
public void BRepMetricConstraints(const BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#42
```

### ~BRepMetricConstraints

```cpp
public void ~BRepMetricConstraints()
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#47
```

### import_constraints

```cpp
public void import_constraints(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#49
```

### export_constraints

```cpp
public void export_constraints(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#54
```

### set_default_metric

```cpp
public void set_default_metric(double metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#59
```

### default_metric

```cpp
public double default_metric()
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#64
```

### set_gradation

```cpp
public void set_gradation(double gradation)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#117
```

### gradation

```cpp
public double gradation()
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#122
```

### set_corner_metric

```cpp
public void set_corner_metric(const Corner3D & corner, double metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#69
```

### corner_metric

```cpp
public absl::optional<double> corner_metric(const Corner3D & corner)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#75
```

### set_line_metric

```cpp
public void set_line_metric(const Line3D & line, double metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#81
```

### line_metric

```cpp
public absl::optional<double> line_metric(const Line3D & line)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#87
```

### set_surface_metric

```cpp
public void set_surface_metric(const Surface3D & surface, double metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#93
```

### surface_metric

```cpp
public absl::optional<double> surface_metric(const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#99
```

### set_block_metric

```cpp
public void set_block_metric(const Block3D & block, double metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#105
```

### block_metric

```cpp
public absl::optional<double> block_metric(const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#111
```

### build_metric

```cpp
public const Metric3D & build_metric()
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/brep_metric_constraints.cpp#127
```



