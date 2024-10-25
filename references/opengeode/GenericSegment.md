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

# class GenericSegment


# class GenericSegment


# class GenericSegment


# class GenericSegment


# class GenericSegment


# class GenericSegment


## Functions

### GenericSegment

```cpp
public void GenericSegment<PointType, dimension>(PointType point0, PointType point1)
```


### GenericSegment

```cpp
public void GenericSegment<PointType, dimension>(const GenericSegment<PointType, dimension> & other)
```


### operator=

```cpp
public GenericSegment<PointType, dimension> & operator=(const GenericSegment<PointType, dimension> & other)
```


### GenericSegment

```cpp
public void GenericSegment<PointType, dimension>(GenericSegment<PointType, dimension> && other)
```


### operator=

```cpp
public GenericSegment<PointType, dimension> & operator=(GenericSegment<PointType, dimension> && other)
```


### direction

```cpp
public Vector<dimension> direction()
```


### normalized_direction

```cpp
public Vector<dimension> normalized_direction()
```


### barycenter

```cpp
public Point<dimension> barycenter()
```


### length

```cpp
public double length()
```


### set_point

```cpp
public void set_point(local_index_t vertex, PointType point)
```


### vertices

```cpp
public const std::array<PointType, 2> & vertices()
```


### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```


### is_degenerated

```cpp
public bool is_degenerated()
```




# class GenericSegment


