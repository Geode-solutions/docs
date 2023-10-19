# class BRepSurfaceRelaxer


## Functions

### BRepSurfaceRelaxer

```cpp
public void BRepSurfaceRelaxer(const BRep & model, BRepGeometricModifier & modifier, const Surface3D & surface, const SurfaceRelaxerOptions3D & options)
```


### ~BRepSurfaceRelaxer

```cpp
public void ~BRepSurfaceRelaxer()
```


### vertex_plane

```cpp
public absl::optional<Plane> vertex_plane(index_t vertex)
```


### vertex_normal

```cpp
public absl::optional<std::pair<Vector3D, index_t> > vertex_normal(index_t vertex, index_t p0, index_t p1)
```




