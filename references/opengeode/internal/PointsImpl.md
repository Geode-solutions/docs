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

# class PointsImpl


 This class implements the mesh points storage. Pre-v13: this class was used in the Mesh::Impl classes Post-v13: the inheritance in the Mesh::Impl is kept for backward file serialization, and it is now used in the CRS implementation.



## Functions

### get_point

```cpp
public const Point<dimension> & get_point(index_t vertex_id)
```


### set_point

```cpp
public void set_point(index_t vertex_id, Point<dimension> point)
```


### nb_points

```cpp
public index_t nb_points()
```


### attribute_name

```cpp
public basic_string_view attribute_name()
```


### initialize_crs

```cpp
public void initialize_crs(Mesh & mesh)
```


### PointsImpl

```cpp
protected void PointsImpl<dimension>()
```


### PointsImpl

```cpp
protected void PointsImpl<dimension>(Mesh & mesh)
```


### PointsImpl

```cpp
protected void PointsImpl<dimension>(AttributeManager & manager)
```


### PointsImpl

```cpp
protected void PointsImpl<dimension>(AttributeManager & manager, basic_string_view attribute_name)
```




