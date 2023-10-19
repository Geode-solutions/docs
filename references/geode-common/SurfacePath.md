# struct SurfacePath


## Members

```cpp
public PolygonEdge edge

```

```cpp
public Position position

```

```cpp
public index_t vertex_id

```

```cpp
public bool opposite_side

```



## Functions

### SurfacePath

```cpp
public void SurfacePath(const TriangulatedSurface<dimension> & surface, PolygonEdge edge_in, Position position_in)
```


### SurfacePath

```cpp
public void SurfacePath(index_t vertex_in)
```


### SurfacePath

```cpp
public void SurfacePath()
```


### operator==

```cpp
public bool operator==(const SurfacePath & rhs)
```


### are_same_path

```cpp
public bool are_same_path(const TriangulatedSurface<dimension> & surface, const SurfacePath & other)
```


### is_vertex

```cpp
public bool is_vertex()
```




