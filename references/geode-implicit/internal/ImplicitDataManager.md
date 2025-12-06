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

# class ImplicitDataManager


```cpp
Inherits from DataPointsManager<2U>
```



# class ImplicitDataManager


```cpp
Inherits from DataPointsManager<3U>
```



# class ImplicitDataManager


```cpp
Inherits from DataPointsManager<dimension>
```



## Functions

### ImplicitDataManager

```cpp
public void ImplicitDataManager<>()
```


### ImplicitDataManager

```cpp
public void ImplicitDataManager<>(ImplicitDataManager<dimension> && other)
```


### ~ImplicitDataManager

```cpp
public void ~ImplicitDataManager<>()
```


### add_data_point

```cpp
public index_t add_data_point(const Point<dimension> & position, const uuid & data_id, double weight)
```


### set_data_value

```cpp
public void set_data_value(const uuid & data_id, double value)
```


### nb_data_values

```cpp
public index_t nb_data_values()
```


### data_point_value

```cpp
public double data_point_value(index_t data_point_index)
```


### data_value_from_uuid

```cpp
public optional data_value_from_uuid(const uuid & data_id)
```


### min_distance_between_data_points

```cpp
public optional min_distance_between_data_points(const uuid & first_data_id, const uuid & second_data_id)
```




