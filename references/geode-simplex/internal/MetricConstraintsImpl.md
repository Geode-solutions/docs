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
public static const auto dimension

```

```cpp
public static const auto MIN_ANGLE

```

```cpp
public static const auto METRIC_PRESERVATION_FACTOR

```



## Functions

### MetricConstraintsImpl

```cpp
public void MetricConstraintsImpl<Model>(MetricConstraintsImpl<Model> && )
```


### MetricConstraintsImpl

```cpp
public void MetricConstraintsImpl<Model>(const MetricConstraintsImpl<Model> & )
```


### operator=

```cpp
public MetricConstraintsImpl<Model> & operator=(const MetricConstraintsImpl<Model> & )
```


### operator=

```cpp
public MetricConstraintsImpl<Model> & operator=(MetricConstraintsImpl<Model> && )
```


### MetricConstraintsImpl

```cpp
public void MetricConstraintsImpl<Model>(const Model & model)
```


### ~MetricConstraintsImpl

```cpp
public void ~MetricConstraintsImpl<Model>()
```


### model

```cpp
public const Model & model()
```


### grid

```cpp
public const LightRegularGrid<dimension> & grid()
```


### user_blocks

```cpp
public const absl::flat_hash_map<uuid, double> & user_blocks()
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
public std::optional<double> corner_metric(const uuid & corner)
```


### set_line_metric

```cpp
public void set_line_metric(const uuid & line, double metric)
```


### line_metric

```cpp
public std::optional<double> line_metric(const uuid & line)
```


### set_surface_metric

```cpp
public void set_surface_metric(const uuid & surface, double metric)
```


### surface_metric

```cpp
public std::optional<double> surface_metric(const uuid & surface)
```


### set_block_metric

```cpp
public void set_block_metric(const uuid & block, double metric)
```


### block_metric

```cpp
public std::optional<double> block_metric(const uuid & block)
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


### generate_grid_metric

```cpp
public std::unique_ptr<GridMetric<dimension>> generate_grid_metric()
```




