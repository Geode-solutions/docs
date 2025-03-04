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

# class GenericTetrahedron


# class GenericTetrahedron


## Functions

### GenericTetrahedron

```cpp
public void GenericTetrahedron<PointType>(PointType point0, PointType point1, PointType point2, PointType point3)
```


### GenericTetrahedron

```cpp
public void GenericTetrahedron<PointType>(const GenericTetrahedron<PointType> & other)
```


### operator=

```cpp
public GenericTetrahedron<PointType> & operator=(const GenericTetrahedron<PointType> & other)
```


### GenericTetrahedron

```cpp
public void GenericTetrahedron<PointType>(GenericTetrahedron<PointType> && other)
```


### operator=

```cpp
public GenericTetrahedron<PointType> & operator=(GenericTetrahedron<PointType> && other)
```


### barycenter

```cpp
public Point barycenter()
```


### set_point

```cpp
public void set_point(local_index_t vertex, PointType point)
```


### vertices

```cpp
public const std::array<PointType, 4> & vertices()
```


### bounding_box

```cpp
public BoundingBox bounding_box()
```


### is_degenerated

```cpp
public bool is_degenerated()
```


### string

```cpp
public basic_string string()
```




# class GenericTetrahedron


