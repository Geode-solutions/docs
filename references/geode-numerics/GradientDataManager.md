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

# class GradientDataManager


## Functions

### GradientDataManager

```cpp
public void GradientDataManager<dimension>()
```


### GradientDataManager

```cpp
public void GradientDataManager<dimension>(GradientDataManager<dimension> && other)
```


### ~GradientDataManager

```cpp
public void ~GradientDataManager<dimension>()
```


### add_gradient_data

```cpp
public index_t add_gradient_data(Point<dimension> position, Vector<dimension> gradient_value, double weight)
```


### remove_gradient_data

```cpp
public void remove_gradient_data(index_t data_point_index)
```


### nb_gradient_data

```cpp
public index_t nb_gradient_data()
```


### gradient_data_position

```cpp
public const Point<dimension> & gradient_data_position(index_t data_point_index)
```


### gradient_data_value

```cpp
public const Vector<dimension> & gradient_data_value(index_t data_point_index)
```


### gradient_data_weight

```cpp
public double gradient_data_weight(index_t data_point_index)
```


### gradient_data_points

```cpp
public const PointSet<dimension> & gradient_data_points()
```




# class GradientDataManager


# class GradientDataManager


