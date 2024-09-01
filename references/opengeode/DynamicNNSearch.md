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

# class DynamicNNSearch


 Given a list of points, this class returns neighboring points.



## Functions

### DynamicNNSearch

```cpp
public void DynamicNNSearch<dimension>(const DynamicNNSearch<dimension> & )
```


### operator=

```cpp
public DynamicNNSearch<dimension> & operator=(const DynamicNNSearch<dimension> & )
```


### DynamicNNSearch

```cpp
public void DynamicNNSearch<dimension>(std::vector<Point<dimension> > points)
```


### DynamicNNSearch

```cpp
public void DynamicNNSearch<dimension>(DynamicNNSearch<dimension> && other)
```


### ~DynamicNNSearch

```cpp
public void ~DynamicNNSearch<dimension>()
```


### nb_points

```cpp
public index_t nb_points()
```


### point

```cpp
public const Point<dimension> & point(index_t index)
```


### add_point

```cpp
public void add_point(const Point<dimension> & point)
```


### radius_neighbors

```cpp
public vector radius_neighbors(const Point<dimension> & point, double threshold_distance)
```


 Get the neighbors closer than a given distance from the given point or within a sphere

**point** [in] The center of the sphere

**threshold_distance** [in] The radius of the sphere

**return** the list of points inside this distance



# class DynamicNNSearch


# class DynamicNNSearch


