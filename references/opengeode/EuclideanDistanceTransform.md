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

# class EuclideanDistanceTransform


## Functions

### EuclideanDistanceTransform

```cpp
public void EuclideanDistanceTransform<dimension>(const Grid<dimension> & grid, absl::Span<const Index> grid_cell_id, string_view distance_map_name)
```


### distance_map

```cpp
public shared_ptr distance_map()
```


### compute_squared_distance_map

```cpp
public void compute_squared_distance_map()
```

### squared_root_filter

```cpp
public void squared_root_filter()
```




