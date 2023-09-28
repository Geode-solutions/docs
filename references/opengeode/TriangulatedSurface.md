# class TriangulatedSurface

```cpp
Defined at /github/workspace/src/geode/mesh/core/triangulated_surface.cpp#92
```

```cpp
Inherits from SurfaceMesh<3U>
```



# class TriangulatedSurface

```cpp
Defined at /github/workspace/src/geode/mesh/core/triangulated_surface.cpp#91
```

```cpp
Inherits from SurfaceMesh<2U>
```



# class TriangulatedSurface

```cpp
Defined at ../../include/geode/mesh/core/triangulated_surface.h#42
```

 Interface class for Surface of arbitrary dimension made up with triangles only.



```cpp
Inherits from SurfaceMesh<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<TriangulatedSurface<dimension> > create()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/triangulated_surface.cpp#35
```

 Create a new TriangulatedSurface using default data structure.

### create

```cpp
public std::unique_ptr<TriangulatedSurface<dimension> > create(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/triangulated_surface.cpp#44
```

 Create a new TriangulatedSurface using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/triangulated_surface.cpp#52
```

### clone

```cpp
public std::unique_ptr<TriangulatedSurface<dimension> > clone()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/triangulated_surface.cpp#59
```

### triangle

```cpp
public Triangle<dimension> triangle(index_t triangle_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/triangulated_surface.cpp#70
```

### TriangulatedSurface

```cpp
protected void TriangulatedSurface<dimension>()
```

```cpp
Defined at ../../include/geode/mesh/core/triangulated_surface.h#67
```

### TriangulatedSurface

```cpp
protected void TriangulatedSurface<dimension>(TriangulatedSurface<dimension> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/triangulated_surface.h#68
```

### operator=

```cpp
protected TriangulatedSurface<dimension> & operator=(TriangulatedSurface<dimension> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/triangulated_surface.h#69
```



