# class SurfaceRemesher

# class SurfaceRemesher

# class SurfaceRemesher

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/remesher.h#37
```

## Records

Impl



## Functions

### ~SurfaceRemesher

```cpp
public void ~SurfaceRemesher<Data>()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#442
```

### remesh

```cpp
public RemeshedCMV remesh()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#447
```

### SurfaceRemesher

```cpp
protected void SurfaceRemesher<Data>(Data & data, const Surface<dimension> & input_surface)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#435
```

### background_surface

```cpp
protected const Surface<dimension> & background_surface()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#453
```

### background_mesh

```cpp
protected const TriangulatedSurface<dimension> & background_mesh()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#460
```

### background_builder

```cpp
protected TriangulatedSurfaceBuilder<dimension> & background_builder()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#467
```

### background_modifier

```cpp
protected TriangulatedSurfaceEpsilonModifier<dimension> & background_modifier()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#474
```

### remeshed

```cpp
protected const SurfaceMesh<dimension> & remeshed()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#481
```

### remeshed_builder

```cpp
protected SurfaceMeshBuilder<dimension> & remeshed_builder()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#488
```

### metric

```cpp
protected const Metric<dimension> & metric()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#495
```

### lock_vertices

```cpp
protected const int & lock_vertices()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#502
```

### transfer_remeshed

```cpp
protected int transfer_remeshed(const RemeshedSurface<dimension> & remeshed)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#516
```

### transfer_remeshed

```cpp
protected int transfer_remeshed(const RemainingSurface<dimension> & remaining, const RemeshedSurface<dimension> & remeshed, absl::Span<const index_t> remaining_mapping)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#523
```

### compute_remaining_adjacencies

```cpp
protected void compute_remaining_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#533
```

### fill_remaining

```cpp
protected int fill_remaining(RemainingSurface<dimension> & remaining, absl::Span<const index_t> remaining_mapping)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#539
```

### transfer_remeshed_polygons

```cpp
protected void transfer_remeshed_polygons(const SurfaceMesh<dimension> & mesh, absl::Span<const index_t> vertex_mapping)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#547
```

### add_remeshed_point

```cpp
protected index_t add_remeshed_point(index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#555
```

### is_locked

```cpp
protected bool is_locked(index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#561
```

### update_vertices

```cpp
protected void update_vertices(absl::Span<const VertexMultiMapping> mappings)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesher.cpp#509
```



