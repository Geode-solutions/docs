# class PropagateAlongLine2D


```cpp
```cpp
Inherits from SurfacePathFinder<2>
```
```



## Functions

### PropagateAlongLine2D

```cpp
```cpp
public void PropagateAlongLine2D(const FrontalRemesher2D & remesher, const InfiniteLine2D & line)
```
```


### along_line

```cpp
```cpp
public optional along_line(const std::vector<OrientedPolygonEdge> & initial_edges, double target)
```
```


### find_first_path

```cpp
```cpp
protected vector find_first_path(const std::vector<OrientedPolygonEdge> & initial_edges)
```
```


### stop_propagation

```cpp
```cpp
protected _Bool stop_propagation(const SurfacePath & path, const Point2D & point, double target)
```
```


### oriented_edge_segment

```cpp
```cpp
protected Segment oriented_edge_segment(const OrientedPolygonEdge & edge)
```
```


### next_intersection

```cpp
```cpp
protected SurfacePath next_intersection(const PolygonEdge & adjacent_edge)
```
```




