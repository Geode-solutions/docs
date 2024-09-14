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
Inherits from DataConstraintsManager<2U>
```



# class ImplicitDataManager


```cpp
Inherits from DataConstraintsManager<3U>
```



# class ImplicitDataManager


```cpp
Inherits from DataConstraintsManager<dimension>
```



## Functions

### ImplicitDataManager

```cpp
public void ImplicitDataManager<dimension>()
```


### ImplicitDataManager

```cpp
public void ImplicitDataManager<dimension>(ImplicitDataManager<dimension> && other)
```


### ~ImplicitDataManager

```cpp
public void ~ImplicitDataManager<dimension>()
```


### add_data_mesh_points

```cpp
public void add_data_mesh_points(const uuid & data_id, const BoundingBox<dimension> & voi_box, const Mesh & data_mesh, double weight)
```


### set_data_value

```cpp
public void set_data_value(const uuid & data_id, double value)
```


### nb_data_points

```cpp
public index_t nb_data_points()
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


### data_value_from_uuid

```cpp
public double data_value_from_uuid(const uuid & data_id)
```




