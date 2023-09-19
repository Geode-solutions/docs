# class BackgroundSolidInserter


## Records

Impl



## Functions

### BackgroundSolidInserter

```cpp
```cpp
public void BackgroundSolidInserter(BackgroundSolid & background)
```
```


### ~BackgroundSolidInserter

```cpp
```cpp
public void ~BackgroundSolidInserter()
```
```


### insert_surface

```cpp
```cpp
public void insert_surface(const TriangulatedSurface3D & mesh)
```
```


### insert_surface_triangles

```cpp
```cpp
public void insert_surface_triangles(const TriangulatedSurface3D & mesh, Span triangle_ids)
```
```


### insert_curve

```cpp
```cpp
public void insert_curve(const EdgedCurve3D & mesh)
```
```


### insert_curve_edges

```cpp
```cpp
public void insert_curve_edges(const EdgedCurve3D & mesh, Span edges_ids)
```
```


### insert_point_set

```cpp
```cpp
public void insert_point_set(const PointSet3D & mesh)
```
```


### insert_point_set_points

```cpp
```cpp
public void insert_point_set_points(const PointSet3D & mesh, Span vertex_ids)
```
```


### insert_scalar_function_isovalues

```cpp
```cpp
public void insert_scalar_function_isovalues(string_view function_name, absl::Span<const double> isovalues)
```
```



