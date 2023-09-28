# class NNSearch

```cpp
Defined at /github/workspace/src/geode/geometry/nn_search.cpp#238
```

# class NNSearch

```cpp
Defined at ../../include/geode/geometry/nn_search.h#37
```

 Given a list of points, this class returns neighboring points.



## Records

ColocatedInfo



## Functions

### NNSearch

```cpp
public void NNSearch<dimension>(const NNSearch<dimension> & )
```

```cpp
Defined at ../../include/geode/geometry/nn_search.h#39
```

### operator=

```cpp
public NNSearch<dimension> & operator=(const NNSearch<dimension> & )
```

```cpp
Defined at ../../include/geode/geometry/nn_search.h#39
```

### NNSearch

```cpp
public void NNSearch<dimension>(std::vector<Point<dimension> > points)
```

```cpp
Defined at /github/workspace/src/geode/geometry/nn_search.cpp#136
```

### NNSearch

```cpp
public void NNSearch<dimension>(NNSearch<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/geometry/nn_search.cpp#142
```

### ~NNSearch

```cpp
public void ~NNSearch<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/geometry/nn_search.cpp#148
```

### nb_points

```cpp
public index_t nb_points()
```

```cpp
Defined at /github/workspace/src/geode/geometry/nn_search.cpp#160
```

### point

```cpp
public const Point<dimension> & point(index_t index)
```

```cpp
Defined at /github/workspace/src/geode/geometry/nn_search.cpp#153
```

### closest_neighbor

```cpp
public index_t closest_neighbor(const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/geometry/nn_search.cpp#166
```

 Get the closest neighbor from the given point

**point** [in] The requested point

**return** the index of the closest point

### radius_neighbors

```cpp
public vector radius_neighbors(const Point<dimension> & point, double threshold_distance)
```

```cpp
Defined at /github/workspace/src/geode/geometry/nn_search.cpp#173
```

 Get the neighbors closer than a given distance from the given point or within a sphere

**point** [in] The center of the sphere

**threshold_distance** [in] The radius of the sphere

**return** the list of points inside this distance

### neighbors

```cpp
public vector neighbors(const Point<dimension> & point, index_t nb_neighbors)
```

```cpp
Defined at /github/workspace/src/geode/geometry/nn_search.cpp#180
```

 Get a number ol close neighbors from the given point

**point** [in] The requested point

**nb_neighbors** [in] The number of neighbors to return

**return** the list of points, it can be smaller than the requested number of neighbors if there is less neighbors than points in the tree

### colocated_index_mapping

```cpp
public ColocatedInfo colocated_index_mapping(double epsilon)
```

```cpp
Defined at /github/workspace/src/geode/geometry/nn_search.cpp#187
```

 Compute a colocation mapping from the list of points

**epsilon** [in] The approximation allowed to test if two points are identical

**return** The information related to this colocated operation



# class NNSearch

```cpp
Defined at /github/workspace/src/geode/geometry/nn_search.cpp#237
```

