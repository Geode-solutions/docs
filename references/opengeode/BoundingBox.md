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

# class BoundingBox


# class BoundingBox


## Functions

### intersects

```cpp
public bool intersects(const Triangle<3> & triangle)
```




# class BoundingBox


 Bounding box implemented for 2D and 3D points.



## Functions

### BoundingBox

```cpp
public void BoundingBox<>()
```


### BoundingBox

```cpp
public void BoundingBox<>(Point<dimension> min, Point<dimension> max)
```


### BoundingBox

```cpp
public void BoundingBox<>(const BoundingBox<> & other)
```


### operator=

```cpp
public BoundingBox<> & operator=(const BoundingBox<> & other)
```


### BoundingBox

```cpp
public void BoundingBox<>(BoundingBox<> && other)
```


### operator=

```cpp
public BoundingBox<> & operator=(BoundingBox<> && other)
```


### ~BoundingBox

```cpp
public void ~BoundingBox<>()
```


### add_box

```cpp
public void add_box(const BoundingBox<dimension> & box)
```


### add_point

```cpp
public void add_point(const Point<dimension> & point)
```


### extends

```cpp
public void extends(double length)
```


### contains

```cpp
public bool contains(const Point<dimension> & point)
```


### intersects

```cpp
public bool intersects(const BoundingBox<dimension> & bbox)
```


### intersects

```cpp
public bool intersects(const Ray<dimension> & ray)
```


### intersects

```cpp
public bool intersects(const InfiniteLine<dimension> & line)
```


### intersects

```cpp
public bool intersects(const Segment<dimension> & segment)
```


 Returns true if the element is crossing, is inside, or is containing the bbox

### intersects

```cpp
public typename std::enable_if<T == 2 || T == 3, bool>::type intersects(const Triangle<T> & triangle)
```

 Returns true if the element is crossing, is inside (or is containing the bbox in 2D)

### intersects

```cpp
public typename std::enable_if<T == 3, bool>::type intersects(const Tetrahedron & tetra)
```


 Returns true if the element is crossing, is inside, or is containing the bbox

### signed_distance

```cpp
public double signed_distance(const Point<dimension> & point)
```


 Returns the distance between the point and the box. If the point is inside the box, the distance is negative.

### min

```cpp
public const Point<dimension> & min()
```


### max

```cpp
public const Point<dimension> & max()
```


### center

```cpp
public Point<dimension> center()
```


### diagonal

```cpp
public Vector<dimension> diagonal()
```


### smallest_length

```cpp
public std::tuple<local_index_t, double> smallest_length()
```


### largest_length

```cpp
public std::tuple<local_index_t, double> largest_length()
```


### string

```cpp
public basic_string string()
```




# class BoundingBox


## Functions

### intersects

```cpp
public bool intersects(const Triangle<2> & triangle)
```




