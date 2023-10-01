# class SectionMetricConstraints

```cpp
Defined at ../../include/geode/simplex/metric/section_metric_constraints.h#28
```

## Functions

### SectionMetricConstraints

```cpp
public void SectionMetricConstraints(const Section & brep)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#36
```

### ~SectionMetricConstraints

```cpp
public void ~SectionMetricConstraints()
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#41
```

### import_constraints

```cpp
public void import_constraints(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#43
```

### export_constraints

```cpp
public void export_constraints(string_view filename)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#49
```

### set_default_metric

```cpp
public void set_default_metric(double metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#55
```

### default_metric

```cpp
public double default_metric()
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#60
```

### set_gradation

```cpp
public void set_gradation(double gradation)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#101
```

### gradation

```cpp
public double gradation()
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#106
```

### set_corner_metric

```cpp
public void set_corner_metric(const Corner2D & corner, double metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#65
```

### corner_metric

```cpp
public optional corner_metric(const Corner2D & corner)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#71
```

### set_line_metric

```cpp
public void set_line_metric(const Line2D & line, double metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#77
```

### line_metric

```cpp
public optional line_metric(const Line2D & line)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#83
```

### set_surface_metric

```cpp
public void set_surface_metric(const Surface2D & surface, double metric)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#89
```

### surface_metric

```cpp
public optional surface_metric(const Surface2D & surface)
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#95
```

### build_metric

```cpp
public const Metric2D & build_metric()
```

```cpp
Defined at /github/workspace/src/geode/simplex/metric/section_metric_constraints.cpp#111
```



