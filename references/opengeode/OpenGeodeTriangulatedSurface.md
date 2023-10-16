# class OpenGeodeTriangulatedSurface

# class OpenGeodeTriangulatedSurface


```cpp
Inherits from TriangulatedSurface<dimension>
```



## Records

Impl



## Functions

### OpenGeodeTriangulatedSurface

```cpp
public void OpenGeodeTriangulatedSurface<dimension>(const OpenGeodeTriangulatedSurface<dimension> & )
```


### operator=

```cpp
public OpenGeodeTriangulatedSurface<dimension> & operator=(const OpenGeodeTriangulatedSurface<dimension> & )
```


### OpenGeodeTriangulatedSurface

```cpp
public void OpenGeodeTriangulatedSurface<dimension>()
```


### OpenGeodeTriangulatedSurface

```cpp
public void OpenGeodeTriangulatedSurface<dimension>(OpenGeodeTriangulatedSurface<dimension> && other)
```


### operator=

```cpp
public OpenGeodeTriangulatedSurface<dimension> & operator=(OpenGeodeTriangulatedSurface<dimension> && other)
```


### ~OpenGeodeTriangulatedSurface

```cpp
public void ~OpenGeodeTriangulatedSurface<dimension>()
```


### impl_name_static

```cpp
public NamedType impl_name_static()
```


### impl_name

```cpp
public NamedType impl_name()
```


### type_name

```cpp
public NamedType type_name()
```


### native_extension_static

```cpp
public string_view native_extension_static()
```


### native_extension

```cpp
public string_view native_extension()
```


### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGTriangulatedSurfaceKey )
```


### set_polygon_vertex

```cpp
public void set_polygon_vertex(const PolygonVertex & polygon_vertex, index_t vertex_id, OGTriangulatedSurfaceKey )
```


### set_polygon_adjacent

```cpp
public void set_polygon_adjacent(const PolygonEdge & polygon_edge, index_t adjacent_id, OGTriangulatedSurfaceKey )
```


### add_triangle

```cpp
public void add_triangle(const std::array<index_t, 3> & vertices, OGTriangulatedSurfaceKey )
```


### get_polygon_adjacent

```cpp
public absl::optional<index_t> get_polygon_adjacent(const PolygonEdge & polygon_edge)
```




# class OpenGeodeTriangulatedSurface

