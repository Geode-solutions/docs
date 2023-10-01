# struct SurfacePath

```cpp
Defined at ../include/geode/common/cutter/surface/surface_path_finder.h#16
```

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

```cpp
Defined at ../include/geode/common/cutter/surface/surface_path_finder.h#19
```

### SurfacePath

```cpp
public void SurfacePath(index_t vertex_in)
```

```cpp
Defined at ../include/geode/common/cutter/surface/surface_path_finder.h#34
```

### SurfacePath

```cpp
public void SurfacePath()
```

```cpp
Defined at ../include/geode/common/cutter/surface/surface_path_finder.h#36
```

### operator==

```cpp
public bool operator==(const SurfacePath & rhs)
```

```cpp
Defined at ../include/geode/common/cutter/surface/surface_path_finder.h#38
```

### are_same_path

```cpp
public bool are_same_path(const TriangulatedSurface<dimension> & surface, const SurfacePath & other)
```

```cpp
Defined at ../include/geode/common/cutter/surface/surface_path_finder.h#48
```

### is_vertex

```cpp
public bool is_vertex()
```

```cpp
Defined at ../include/geode/common/cutter/surface/surface_path_finder.h#62
```



