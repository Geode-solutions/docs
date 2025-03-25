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

# class DataConstraintsManager


## Functions

### ~DataConstraintsManager

```cpp
public void ~DataConstraintsManager<dimension>()
```


### nb_data_points

```cpp
public index_t nb_data_points()
```

### data_points_mean_value

```cpp
public double data_points_mean_value()
```


### data_points_max_weight

```cpp
public double data_points_max_weight()
```


### data_point_position

```cpp
public const Point<dimension> & data_point_position(index_t data_point_index)
```

### data_point_value

```cpp
public double data_point_value(index_t data_point_index)
```

### data_point_weight

```cpp
public double data_point_weight(index_t data_point_index)
```

### DataConstraintsManager

```cpp
protected void DataConstraintsManager<dimension>()
```




