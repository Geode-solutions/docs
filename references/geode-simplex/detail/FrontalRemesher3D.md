# class FrontalRemesher3D


```cpp
```cpp
Inherits from FrontalRemesher<3>
```
```



## Functions

### FrontalRemesher3D

```cpp
```cpp
public void FrontalRemesher3D(const TriangulatedSurface3D & background_mesh, TriangulatedSurfaceBuilder3D & background_builder, TriangulatedSurfaceEpsilonModifier3D & background_modifier, const Metric3D & metric, Span lock_vertices)
```
```


### compute_intersection

```cpp
```cpp
public Point compute_intersection(const Plane & plane, const SurfacePath & path)
```
```


### propagate_along_path

```cpp
```cpp
public absl::optional<geode::detail::PropagateAlongSurfaceMacroEdge<3>::Cuts> propagate_along_path(const MacroEdge & macro_edge, index_t begin, index_t end)
```
```


### find_cuts

```cpp
```cpp
public int find_cuts(index_t begin, index_t end, absl::Span<const SurfacePath> path_splits)
```
```


### refined_cuts

```cpp
```cpp
public int refined_cuts(index_t begin, index_t end, absl::Span<const GeometricSurfacePath<3> > cuts, double threshold)
```
```


### apex_path

```cpp
```cpp
public int apex_path(const MacroEdge & macro_edge, const Plane & plane)
```
```


### compute_new_apex

```cpp
```cpp
public absl::optional<Apex> compute_new_apex(const MacroEdge & macro_edge, const Point3D & origin)
```
```




