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

# class TangentialDataManager


# class TangentialDataManager


## Functions

### TangentialDataManager

```cpp
public void TangentialDataManager<dimension>()
```


### TangentialDataManager

```cpp
public void TangentialDataManager<dimension>(TangentialDataManager<dimension> && other)
```


### ~TangentialDataManager

```cpp
public void ~TangentialDataManager<dimension>()
```


### add_tangential_data

```cpp
public index_t add_tangential_data(Point<dimension> position, Vector<dimension> tangential_value, double weight)
```


### remove_tangential_data

```cpp
public void remove_tangential_data(index_t data_point_index)
```


### nb_tangential_data

```cpp
public index_t nb_tangential_data()
```


### tangential_data_position

```cpp
public const Point<dimension> & tangential_data_position(index_t data_point_index)
```


### tangential_data_direction

```cpp
public const Vector<dimension> & tangential_data_direction(index_t data_point_index)
```


### tangential_data_weight

```cpp
public double tangential_data_weight(index_t data_point_index)
```


### tangential_data_points

```cpp
public const PointSet<dimension> & tangential_data_points()
```




# class TangentialDataManager


