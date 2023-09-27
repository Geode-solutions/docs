# class PropagateAlongPlane


```cpp
Inherits from SurfacePathFinder<3>
```



## Functions

### PropagateAlongPlane

```cpp
public void PropagateAlongPlane(const FrontalRemesher3D & remesher, const Plane & plane)
```


### along_plane

```cpp
public optional along_plane(const std::vector<OrientedPolygonEdge> & initial_edges, double target)
```


### find_first_path

```cpp
protected vector find_first_path(const std::vector<OrientedPolygonEdge> & initial_edges)
```


### stop_propagation

```cpp
protected _Bool stop_propagation(const SurfacePath & path, const Point3D & point, double target)
```


### next_intersection

```cpp
protected SurfacePath next_intersection(const PolygonEdge & adjacent_edge)
```


### oriented_edge_segment

```cpp
protected Segment oriented_edge_segment(const OrientedPolygonEdge & edge)
```


### along_plane

```cpp
public int along_plane(const int & initial_edges, double target)
```

### find_first_path

```cpp
protected int find_first_path(const int & initial_edges)
```



