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

# namespace detail



## Records

* [ModelerMetric](ModelerMetric.md)


## Functions

### build_solid

```cpp
int build_solid(const BoundingBox3D & bbox, const Metric3D & metric)
```


### compute_grid

```cpp
LightRegularGrid<dimension> compute_grid(const BoundingBox<dimension> & bbox, double cell_size, bool adapt_bbox_to_cell_size)
```


### smallest_acceptable_or_median_distance

```cpp
double smallest_acceptable_or_median_distance(const BoundingBox<dimension> & bbox, const NNSearch<dimension> & points_search)
```


### build_surface

```cpp
int build_surface(const BoundingBox2D & bbox, const Metric2D & metric)
```




