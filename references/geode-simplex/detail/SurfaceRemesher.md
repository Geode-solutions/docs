# class SurfaceRemesher

# class SurfaceRemesher

# class SurfaceRemesher


## Records

Impl



## Functions

### ~SurfaceRemesher

```cpp
```cpp
public void ~SurfaceRemesher<Data>()
```
```


### remesh

```cpp
```cpp
public RemeshedCMV remesh()
```
```


### SurfaceRemesher

```cpp
```cpp
protected void SurfaceRemesher<Data>(Data & data, const Surface<dimension> & input_surface)
```
```


### background_surface

```cpp
```cpp
protected const Surface<dimension> & background_surface()
```
```


### background_mesh

```cpp
```cpp
protected const TriangulatedSurface<dimension> & background_mesh()
```
```


### background_builder

```cpp
```cpp
protected TriangulatedSurfaceBuilder<dimension> & background_builder()
```
```


### background_modifier

```cpp
```cpp
protected TriangulatedSurfaceEpsilonModifier<dimension> & background_modifier()
```
```


### remeshed

```cpp
```cpp
protected const SurfaceMesh<dimension> & remeshed()
```
```


### remeshed_builder

```cpp
```cpp
protected SurfaceMeshBuilder<dimension> & remeshed_builder()
```
```


### metric

```cpp
```cpp
protected const Metric<dimension> & metric()
```
```


### lock_vertices

```cpp
```cpp
protected const int & lock_vertices()
```
```


### transfer_remeshed

```cpp
```cpp
protected int transfer_remeshed(const RemeshedSurface<dimension> & remeshed)
```
```


### transfer_remeshed

```cpp
```cpp
protected int transfer_remeshed(const RemainingSurface<dimension> & remaining, const RemeshedSurface<dimension> & remeshed, absl::Span<const index_t> remaining_mapping)
```
```


### compute_remaining_adjacencies

```cpp
```cpp
protected void compute_remaining_adjacencies()
```
```


### fill_remaining

```cpp
```cpp
protected int fill_remaining(RemainingSurface<dimension> & remaining, absl::Span<const index_t> remaining_mapping)
```
```


### transfer_remeshed_polygons

```cpp
```cpp
protected void transfer_remeshed_polygons(const SurfaceMesh<dimension> & mesh, absl::Span<const index_t> vertex_mapping)
```
```


### add_remeshed_point

```cpp
```cpp
protected index_t add_remeshed_point(index_t vertex)
```
```


### is_locked

```cpp
```cpp
protected _Bool is_locked(index_t vertex)
```
```


### update_vertices

```cpp
```cpp
protected void update_vertices(absl::Span<const VertexMultiMapping> mappings)
```
```




