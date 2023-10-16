# class PolygonalSurface


```cpp
Inherits from SurfaceMesh<2U>
```



# class PolygonalSurface


```cpp
Inherits from SurfaceMesh<3U>
```



# class PolygonalSurface


 Interface class for Surface made up with polygons (triangles, quads, ...) of arbitrary dimension.



```cpp
Inherits from SurfaceMesh<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<PolygonalSurface<dimension> > create()
```


 Create a new PolygonalSurface using default data structure.

### create

```cpp
public std::unique_ptr<PolygonalSurface<dimension> > create(const MeshImpl & impl)
```


 Create a new PolygonalSurface using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```


### clone

```cpp
public std::unique_ptr<PolygonalSurface<dimension> > clone()
```


### PolygonalSurface

```cpp
protected void PolygonalSurface<dimension>()
```


### PolygonalSurface

```cpp
protected void PolygonalSurface<dimension>(PolygonalSurface<dimension> && other)
```


### operator=

```cpp
protected PolygonalSurface<dimension> & operator=(PolygonalSurface<dimension> && other)
```




