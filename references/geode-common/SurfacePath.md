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
public _Bool opposite_side
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
public _Bool operator==(const SurfacePath & rhs)
```


### are_same_path

```cpp
public _Bool are_same_path(const TriangulatedSurface<dimension> & surface, const SurfacePath & other)
```


### is_vertex

```cpp
public _Bool is_vertex()
```




