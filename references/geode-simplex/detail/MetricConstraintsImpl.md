# class MetricConstraintsImpl

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#104
```

## Members

```cpp
protected const Model & model_

```

```cpp
protected BoundingBox<dimension> bbox_

```

```cpp
protected double default_metric_

```

```cpp
protected double gradation_

```

```cpp
protected flat_hash_map corners_

```

```cpp
protected flat_hash_map lines_

```

```cpp
protected flat_hash_map surfaces_

```

```cpp
protected flat_hash_map blocks_

```

```cpp
protected std::unique_ptr<Metric<dimension> > metric_

```

```cpp
protected std::unique_ptr<LightRegularGrid<dimension> > grid_

```



## Functions

### MetricConstraintsImpl

```cpp
public void MetricConstraintsImpl<Model>(const Model & model)
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#109
```

### ~MetricConstraintsImpl

```cpp
public void ~MetricConstraintsImpl<Model>()
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#114
```

### import_constraints

```cpp
public void import_constraints(string_view filename)
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#116
```

### export_constraints

```cpp
public void export_constraints(string_view filename)
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#149
```

### set_default_metric

```cpp
public void set_default_metric(double metric)
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#177
```

### default_metric

```cpp
public double default_metric()
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#183
```

### set_corner_metric

```cpp
public void set_corner_metric(const uuid & corner, double metric)
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#188
```

### corner_metric

```cpp
public optional corner_metric(const uuid & corner)
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#194
```

### set_line_metric

```cpp
public void set_line_metric(const uuid & line, double metric)
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#199
```

### line_metric

```cpp
public optional line_metric(const uuid & line)
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#205
```

### set_surface_metric

```cpp
public void set_surface_metric(const uuid & surface, double metric)
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#210
```

### surface_metric

```cpp
public optional surface_metric(const uuid & surface)
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#216
```

### set_block_metric

```cpp
public void set_block_metric(const uuid & block, double metric)
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#221
```

### block_metric

```cpp
public optional block_metric(const uuid & block)
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#227
```

### set_gradation

```cpp
public void set_gradation(double gradation)
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#232
```

### gradation

```cpp
public double gradation()
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#238
```

### build_metric

```cpp
public const Metric<dimension> & build_metric()
```

```cpp
Defined at ../../include/geode/simplex/metric/private/metric_constraints_impl.h#243
```



