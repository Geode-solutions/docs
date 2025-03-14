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

# class NNSearch


# class NNSearch


 Given a list of points, this class returns neighboring points.



## Records

ColocatedInfo



## Functions

### NNSearch

```cpp
public void NNSearch<dimension>(const NNSearch<dimension> & )
```


### operator=

```cpp
public NNSearch<dimension> & operator=(const NNSearch<dimension> & )
```


### NNSearch

```cpp
public void NNSearch<dimension>(std::vector<Point<dimension> > points)
```


### NNSearch

```cpp
public void NNSearch<dimension>(NNSearch<dimension> && other)
```


### ~NNSearch

```cpp
public void ~NNSearch<dimension>()
```


### nb_points

```cpp
public index_t nb_points()
```


### point

```cpp
public const Point<dimension> & point(index_t index)
```


### closest_neighbor

```cpp
public index_t closest_neighbor(const Point<dimension> & point)
```


 Get the closest neighbor from the given point

**point** [in] The requested point

**return** the index of the closest point

### radius_neighbors

```cpp
public vector radius_neighbors(const Point<dimension> & point, double threshold_distance)
```


 Get the neighbors closer than a given distance from the given point or within a sphere

**point** [in] The center of the sphere

**threshold_distance** [in] The radius of the sphere

**return** the list of points inside this distance

### frame_neighbors

```cpp
public vector frame_neighbors(const Point<dimension> & point, const Frame<dimension> & epsilons_frame)
```


 Get the neighbors within an ellipse described by its frame, centered on the given point

**point** [in] The center of the ellipse

**epsilons_frame** [in] The frame describing the ellipse

**return** the list of points inside this distance

### neighbors

```cpp
public vector neighbors(const Point<dimension> & point, index_t nb_neighbors)
```


 Get a number of close neighbors from the given point

**point** [in] The requested point

**nb_neighbors** [in] The number of neighbors to return

**return** the list of points, it can be smaller than the requested number of neighbors if there is less neighbors than points in the tree

### colocated_index_mapping

```cpp
public ColocatedInfo colocated_index_mapping(double epsilon)
```


 Compute a colocation mapping from the list of points

**epsilon** [in] The approximation allowed to test if two points are identical

**return** The information related to this colocated operation

### colocated_index_mapping

```cpp
public ColocatedInfo colocated_index_mapping(const Frame<dimension> & epsilon)
```




# class NNSearch


