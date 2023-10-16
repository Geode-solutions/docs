# class TriangulatedSurface


```cpp
Inherits from SurfaceMesh<3U>
```



# class TriangulatedSurface


```cpp
Inherits from SurfaceMesh<2U>
```



# class TriangulatedSurface


 Interface class for Surface of arbitrary dimension made up with triangles only.



```cpp
Inherits from SurfaceMesh<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<TriangulatedSurface<dimension> > create()
```


 Create a new TriangulatedSurface using default data structure.

### create

```cpp
public std::unique_ptr<TriangulatedSurface<dimension> > create(const MeshImpl & impl)
```


 Create a new TriangulatedSurface using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```


### clone

```cpp
public std::unique_ptr<TriangulatedSurface<dimension> > clone()
```


### triangle

```cpp
public Triangle<dimension> triangle(index_t triangle_id)
```


### TriangulatedSurface

```cpp
protected void TriangulatedSurface<dimension>()
```


### TriangulatedSurface

```cpp
protected void TriangulatedSurface<dimension>(TriangulatedSurface<dimension> && other)
```


### operator=

```cpp
protected TriangulatedSurface<dimension> & operator=(TriangulatedSurface<dimension> && other)
```




