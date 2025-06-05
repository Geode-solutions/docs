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

# class GenericPolygon


# class GenericPolygon


## Functions

### GenericPolygon

```cpp
public void GenericPolygon<PointType, dimension>(std::vector<PointType> vertices)
```


### GenericPolygon

```cpp
public void GenericPolygon<PointType, dimension>(const GenericPolygon<PointType, dimension> & other)
```


### operator=

```cpp
public GenericPolygon<PointType, dimension> & operator=(const GenericPolygon<PointType, dimension> & other)
```


### GenericPolygon

```cpp
public void GenericPolygon<PointType, dimension>(GenericPolygon<PointType, dimension> && other)
```


### operator=

```cpp
public GenericPolygon<PointType, dimension> & operator=(GenericPolygon<PointType, dimension> && other)
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


### nb_vertices

```cpp
public index_t nb_vertices()
```


### set_point

```cpp
public void set_point(index_t vertex, PointType point)
```


### vertices

```cpp
public const std::vector<PointType> & vertices()
```


### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```


### triangulate

```cpp
public std::vector<std::array<index_t, 3> > triangulate()
```


### minimum_height

```cpp
public double minimum_height()
```


### is_degenerated

```cpp
public bool is_degenerated()
```


### string

```cpp
public basic_string string()
```




# class GenericPolygon


# class GenericPolygon


# class GenericPolygon


