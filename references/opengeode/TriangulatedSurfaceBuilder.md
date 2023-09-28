# class TriangulatedSurfaceBuilder

```cpp
Defined at /github/workspace/src/geode/mesh/builder/triangulated_surface_builder.cpp#121
```

```cpp
Inherits from SurfaceMeshBuilder<2U>
```



# class TriangulatedSurfaceBuilder

```cpp
Defined at /github/workspace/src/geode/mesh/builder/triangulated_surface_builder.cpp#122
```

```cpp
Inherits from SurfaceMeshBuilder<3U>
```



# class TriangulatedSurfaceBuilder

```cpp
Defined at ../../include/geode/mesh/builder/triangulated_surface_builder.h#43
```

 Interface class to represent the builder of a TriangulatedSurface



```cpp
Inherits from SurfaceMeshBuilder<dimension>
```



## Functions

### create

```cpp
public int create(TriangulatedSurface<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/triangulated_surface_builder.cpp#43
```

 Create the builder associated with a TriangulatedSurface.

**mesh** [in] The TriangulatedSurface to build/modify

### create_triangle

```cpp
public index_t create_triangle(const std::array<index_t, 3> & vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/triangulated_surface_builder.cpp#64
```

 Create a new triangle from three vertices.

**vertices** [in] The three vertices defining the triangle to create

**return** the index of the created triangle

### create_triangles

```cpp
public index_t create_triangles(index_t nb)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/triangulated_surface_builder.cpp#90
```

 Create new triangles.

**nb** [in] Number of triangles to create

**return** the index of the first created triangle

### reserve_triangles

```cpp
public void reserve_triangles(index_t nb)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/triangulated_surface_builder.cpp#101
```

 Reserve storage for new triangles without creating them.

**nb** [in] Number of triangles to reserve

### copy

```cpp
public void copy(const TriangulatedSurface<dimension> & triangulated_surface)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/triangulated_surface_builder.cpp#110
```

### TriangulatedSurfaceBuilder

```cpp
protected void TriangulatedSurfaceBuilder<dimension>(TriangulatedSurface<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/triangulated_surface_builder.cpp#36
```



