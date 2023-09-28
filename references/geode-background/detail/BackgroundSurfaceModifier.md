# class BackgroundSurfaceModifier

```cpp
Defined at ../include/geode/background/surface/private/background_surface_modifier.h#26
```

```cpp
Inherits from BackgroundSurfaceBuilder
```



## Functions

### BackgroundSurfaceModifier

```cpp
public void BackgroundSurfaceModifier(BackgroundSurface & mesh)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/background_surface_modifier.cpp#76
```

### ~BackgroundSurfaceModifier

```cpp
public void ~BackgroundSurfaceModifier()
```

```cpp
Defined at /github/workspace/src/geode/background/surface/background_surface_modifier.cpp#84
```

### split_triangle

```cpp
public int split_triangle(index_t triangle_id, const Point2D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/background_surface_modifier.cpp#88
```

### split_edge

```cpp
public int split_edge(const PolygonEdge & edge, const Point2D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/background_surface_modifier.cpp#95
```

### collapse_edge

```cpp
public int collapse_edge(index_t edge_id, const Point2D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/surface/background_surface_modifier.cpp#102
```

### clean_background_surface

```cpp
public void clean_background_surface()
```

```cpp
Defined at /github/workspace/src/geode/background/surface/background_surface_modifier.cpp#109
```



