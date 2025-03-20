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


### data_point_value

```cpp
public double data_point_value(index_t data_point_index)
```


### data_value_from_uuid

```cpp
public double data_value_from_uuid(const uuid & data_id)
```




