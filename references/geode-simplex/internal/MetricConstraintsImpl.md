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

# class MetricConstraintsImpl


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
protected std::vector<std::pair<std::reference_wrapper<const PointSet<dimension> >, double> > point_sets_

```

```cpp
protected std::vector<std::pair<std::reference_wrapper<const EdgedCurve<dimension> >, double> > edged_curves_

```

```cpp
protected std::vector<std::pair<std::reference_wrapper<const TriangulatedSurface<dimension> >, double> > triangulated_surfaces_

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


### ~MetricConstraintsImpl

```cpp
public void ~MetricConstraintsImpl<Model>()
```


### set_default_metric

```cpp
public void set_default_metric(double metric)
```


### default_metric

```cpp
public double default_metric()
```


### set_corner_metric

```cpp
public void set_corner_metric(const uuid & corner, double metric)
```


### corner_metric

```cpp
public optional corner_metric(const uuid & corner)
```


### set_line_metric

```cpp
public void set_line_metric(const uuid & line, double metric)
```


### line_metric

```cpp
public optional line_metric(const uuid & line)
```


### set_surface_metric

```cpp
public void set_surface_metric(const uuid & surface, double metric)
```


### surface_metric

```cpp
public optional surface_metric(const uuid & surface)
```


### set_block_metric

```cpp
public void set_block_metric(const uuid & block, double metric)
```


### block_metric

```cpp
public optional block_metric(const uuid & block)
```


### add_point_set_metric

```cpp
public void add_point_set_metric(const PointSet<dimension> & mesh, double metric)
```


### add_edged_curve_metric

```cpp
public void add_edged_curve_metric(const EdgedCurve<dimension> & mesh, double metric)
```


### add_triangulated_surface_metric

```cpp
public void add_triangulated_surface_metric(const TriangulatedSurface<dimension> & mesh, double metric)
```


### set_gradation

```cpp
public void set_gradation(double gradation)
```


### gradation

```cpp
public double gradation()
```


### build_metric

```cpp
public const Metric<dimension> & build_metric()
```




