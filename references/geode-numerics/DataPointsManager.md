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

# class DataPointsManager


```cpp
Inherits from DataConstraintsManager<3U>
```



# class DataPointsManager


```cpp
Inherits from DataConstraintsManager<dimension>
```



## Functions

### DataPointsManager

```cpp
public void DataPointsManager<dimension>()
```


### DataPointsManager

```cpp
public void DataPointsManager<dimension>(DataPointsManager<dimension> && other)
```


### ~DataPointsManager

```cpp
public void ~DataPointsManager<dimension>()
```


### load_data_points

```cpp
public void load_data_points(basic_string_view filename)
```


### add_data_point

```cpp
public index_t add_data_point(Point<dimension> position, double value, double weight)
```


### remove_data_point

```cpp
public void remove_data_point(index_t data_point_index)
```


### change_data_point_value

```cpp
public void change_data_point_value(index_t data_point_index, double new_value)
```


### change_data_point_weight

```cpp
public void change_data_point_weight(index_t data_point_index, double new_weight)
```


### nb_data_points

```cpp
public index_t nb_data_points()
```


### data_points_mean_value

```cpp
public double data_points_mean_value()
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


### data_bounding_box

```cpp
public BoundingBox<dimension> data_bounding_box()
```


### data_points

```cpp
public const PointSet<dimension> & data_points()
```




# class DataPointsManager


```cpp
Inherits from DataConstraintsManager<2U>
```



