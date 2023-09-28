# class SurfaceMeshMerger

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/surface_merger.cpp#322
```

```cpp
Inherits from VertexMerger<SurfaceMesh<2U> >
```



# class SurfaceMeshMerger

```cpp
Defined at ../../include/geode/mesh/helpers/detail/surface_merger.h#44
```

```cpp
Inherits from VertexMerger<SurfaceMesh<dimension> >
```



## Records

PolygonOrigin



## Functions

### SurfaceMeshMerger

```cpp
public void SurfaceMeshMerger<dimension>(absl::Span<const std::reference_wrapper<const SurfaceMesh<dimension> > > surfaces, double epsilon)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/surface_merger.cpp#286
```

### ~SurfaceMeshMerger

```cpp
public void ~SurfaceMeshMerger<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/surface_merger.cpp#296
```

### merge

```cpp
public int merge()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/surface_merger.cpp#301
```

### polygon_in_merged

```cpp
public index_t polygon_in_merged(index_t surface, index_t polygon)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/surface_merger.cpp#308
```

### polygon_origins

```cpp
public const int & polygon_origins(index_t polygon)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/surface_merger.cpp#315
```



# class SurfaceMeshMerger

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/surface_merger.cpp#323
```

```cpp
Inherits from VertexMerger<SurfaceMesh<3U> >
```



