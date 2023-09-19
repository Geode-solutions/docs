# class MetricConstraintsImpl


## Members

```cpp
```cpp
protected const Model & model_
```
```

```cpp
```cpp
protected BoundingBox<dimension> bbox_
```
```

```cpp
```cpp
protected double default_metric_
```
```

```cpp
```cpp
protected double gradation_
```
```

```cpp
```cpp
protected flat_hash_map corners_
```
```

```cpp
```cpp
protected flat_hash_map lines_
```
```

```cpp
```cpp
protected flat_hash_map surfaces_
```
```

```cpp
```cpp
protected flat_hash_map blocks_
```
```

```cpp
```cpp
protected std::unique_ptr<Metric<dimension> > metric_
```
```

```cpp
```cpp
protected std::unique_ptr<LightRegularGrid<dimension> > grid_
```
```



## Functions

### MetricConstraintsImpl

```cpp
```cpp
public void MetricConstraintsImpl<Model>(const Model & model)
```
```


### ~MetricConstraintsImpl

```cpp
```cpp
public void ~MetricConstraintsImpl<Model>()
```
```


### import_constraints

```cpp
```cpp
public void import_constraints(string_view filename)
```
```


### export_constraints

```cpp
```cpp
public void export_constraints(string_view filename)
```
```


### set_default_metric

```cpp
```cpp
public void set_default_metric(double metric)
```
```


### default_metric

```cpp
```cpp
public double default_metric()
```
```


### set_corner_metric

```cpp
```cpp
public void set_corner_metric(const uuid & corner, double metric)
```
```


### corner_metric

```cpp
```cpp
public optional corner_metric(const uuid & corner)
```
```


### set_line_metric

```cpp
```cpp
public void set_line_metric(const uuid & line, double metric)
```
```


### line_metric

```cpp
```cpp
public optional line_metric(const uuid & line)
```
```


### set_surface_metric

```cpp
```cpp
public void set_surface_metric(const uuid & surface, double metric)
```
```


### surface_metric

```cpp
```cpp
public optional surface_metric(const uuid & surface)
```
```


### set_block_metric

```cpp
```cpp
public void set_block_metric(const uuid & block, double metric)
```
```


### block_metric

```cpp
```cpp
public optional block_metric(const uuid & block)
```
```


### set_gradation

```cpp
```cpp
public void set_gradation(double gradation)
```
```


### gradation

```cpp
```cpp
public double gradation()
```
```


### build_metric

```cpp
```cpp
public const Metric<dimension> & build_metric()
```
```




