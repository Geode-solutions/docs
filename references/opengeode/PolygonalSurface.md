# class PolygonalSurface

```cpp
Defined at /github/workspace/src/geode/mesh/core/polygonal_surface.cpp#64
```

```cpp
Inherits from SurfaceMesh<2U>
```



# class PolygonalSurface

```cpp
Defined at /github/workspace/src/geode/mesh/core/polygonal_surface.cpp#65
```

```cpp
Inherits from SurfaceMesh<3U>
```



# class PolygonalSurface

```cpp
Defined at ../../include/geode/mesh/core/polygonal_surface.h#44
```

 Interface class for Surface made up with polygons (triangles, quads, ...) of arbitrary dimension.



```cpp
Inherits from SurfaceMesh<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<PolygonalSurface<dimension> > create()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/polygonal_surface.cpp#31
```

 Create a new PolygonalSurface using default data structure.

### create

```cpp
public std::unique_ptr<PolygonalSurface<dimension> > create(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/polygonal_surface.cpp#40
```

 Create a new PolygonalSurface using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/polygonal_surface.cpp#48
```

### clone

```cpp
public std::unique_ptr<PolygonalSurface<dimension> > clone()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/polygonal_surface.cpp#54
```

### PolygonalSurface

```cpp
protected void PolygonalSurface<dimension>()
```

```cpp
Defined at ../../include/geode/mesh/core/polygonal_surface.h#67
```

### PolygonalSurface

```cpp
protected void PolygonalSurface<dimension>(PolygonalSurface<dimension> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/polygonal_surface.h#68
```

### operator=

```cpp
protected PolygonalSurface<dimension> & operator=(PolygonalSurface<dimension> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/polygonal_surface.h#69
```



