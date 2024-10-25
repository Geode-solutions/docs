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

# class GenericTriangle


# class GenericTriangle


# class GenericTriangle


## Functions

### GenericTriangle

```cpp
public void GenericTriangle<PointType, dimension>(PointType point0, PointType point1, PointType point2)
```


### GenericTriangle

```cpp
public void GenericTriangle<PointType, dimension>(const GenericTriangle<PointType, dimension> & other)
```


### operator=

```cpp
public GenericTriangle<PointType, dimension> & operator=(const GenericTriangle<PointType, dimension> & other)
```


### GenericTriangle

```cpp
public void GenericTriangle<PointType, dimension>(GenericTriangle<PointType, dimension> && other)
```


### operator=

```cpp
public GenericTriangle<PointType, dimension> & operator=(GenericTriangle<PointType, dimension> && other)
```


### barycenter

```cpp
public Point<dimension> barycenter()
```


### normal

```cpp
public typename std::enable_if<T == 3, optional<Vector3D> >::type normal()
```


### plane

```cpp
public typename std::enable_if<T == 3, optional<Plane> >::type plane()
```


### owner_plane

```cpp
public typename std::enable_if<T == 3, optional<OwnerPlane> >::type owner_plane()
```


### pivot

```cpp
public typename std::enable_if<T == 3, optional<local_index_t> >::type pivot()
```


### pivot_and_normal

```cpp
public typename std::enable_if<T == 3, optional<std::pair<local_index_t, Vector3D> > >::type pivot_and_normal()
```


### set_point

```cpp
public void set_point(local_index_t vertex, PointType point)
```


### vertices

```cpp
public const std::array<PointType, 3> & vertices()
```


### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```


### longest_edge_index

```cpp
public local_index_t longest_edge_index()
```


### minimum_height

```cpp
public double minimum_height()
```


### is_degenerated

```cpp
public bool is_degenerated()
```




# class GenericTriangle


# class GenericTriangle


