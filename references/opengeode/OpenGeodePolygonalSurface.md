# class OpenGeodePolygonalSurface

# class OpenGeodePolygonalSurface

# class OpenGeodePolygonalSurface


```cpp
Inherits from PolygonalSurface<dimension>
```



## Records

Impl



## Functions

### OpenGeodePolygonalSurface

```cpp
public void OpenGeodePolygonalSurface<dimension>(const OpenGeodePolygonalSurface<dimension> & )
```


### operator=

```cpp
public OpenGeodePolygonalSurface<dimension> & operator=(const OpenGeodePolygonalSurface<dimension> & )
```


### OpenGeodePolygonalSurface

```cpp
public void OpenGeodePolygonalSurface<dimension>()
```


### OpenGeodePolygonalSurface

```cpp
public void OpenGeodePolygonalSurface<dimension>(OpenGeodePolygonalSurface<dimension> && other)
```


### operator=

```cpp
public OpenGeodePolygonalSurface<dimension> & operator=(OpenGeodePolygonalSurface<dimension> && other)
```


### ~OpenGeodePolygonalSurface

```cpp
public void ~OpenGeodePolygonalSurface<dimension>()
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
public void set_vertex(index_t vertex_id, Point<dimension> point, OGPolygonalSurfaceKey )
```


### set_polygon_vertex

```cpp
public void set_polygon_vertex(const PolygonVertex & polygon_vertex, index_t vertex_id, OGPolygonalSurfaceKey )
```


### set_polygon_adjacent

```cpp
public void set_polygon_adjacent(const PolygonEdge & polygon_edge, index_t adjacent_id, OGPolygonalSurfaceKey )
```


### add_polygon

```cpp
public void add_polygon(Span vertices, OGPolygonalSurfaceKey )
```


### remove_polygons

```cpp
public void remove_polygons(const std::vector<bool> & to_delete, OGPolygonalSurfaceKey )
```

### permute_polygons

```cpp
public void permute_polygons(Span permutation, OGPolygonalSurfaceKey )
```


### copy_polygons

```cpp
public void copy_polygons(const OpenGeodePolygonalSurface<dimension> & surface_mesh, OGPolygonalSurfaceKey )
```


### get_polygon_adjacent

```cpp
public absl::optional<index_t> get_polygon_adjacent(const PolygonEdge & polygon_edge)
```


### remove_polygons

```cpp
public void remove_polygons(const int & to_delete, OGPolygonalSurfaceKey )
```




