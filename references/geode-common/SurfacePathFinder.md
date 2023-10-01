# class SurfacePathFinder

```cpp
Defined at ../include/geode/common/cutter/surface/surface_path_finder.h#90
```

 The objective of this class is to find paths inside TrianguledSurface< dimension >. This class may be derived for custom path findings.



## Functions

### SurfacePathFinder

```cpp
public void SurfacePathFinder<dimension>(const SurfacePathFinder<dimension> & )
```

```cpp
Defined at ../include/geode/common/cutter/surface/surface_path_finder.h#92
```

### operator=

```cpp
public SurfacePathFinder<dimension> & operator=(const SurfacePathFinder<dimension> & )
```

```cpp
Defined at ../include/geode/common/cutter/surface/surface_path_finder.h#92
```

### SurfacePathFinder

```cpp
public void SurfacePathFinder<dimension>(SurfacePathFinder<dimension> && )
```

```cpp
Defined at ../include/geode/common/cutter/surface/surface_path_finder.h#92
```

### operator=

```cpp
public SurfacePathFinder<dimension> & operator=(SurfacePathFinder<dimension> && )
```

```cpp
Defined at ../include/geode/common/cutter/surface/surface_path_finder.h#92
```

### ~SurfacePathFinder

```cpp
public void ~SurfacePathFinder<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_path_finder.cpp#22
```

### SurfacePathFinder

```cpp
protected void SurfacePathFinder<dimension>(const TriangulatedSurface<dimension> & surface)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_path_finder.cpp#15
```

### adjacent_opposite_vertex

```cpp
protected PolygonVertex adjacent_opposite_vertex(const PolygonEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_path_finder.cpp#27
```

### edge_segment

```cpp
protected Segment<dimension> edge_segment(const PolygonEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_path_finder.cpp#39
```

### surface

```cpp
protected const TriangulatedSurface<dimension> & surface()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/surface/surface_path_finder.cpp#47
```



# class SurfacePathFinder

# class SurfacePathFinder

