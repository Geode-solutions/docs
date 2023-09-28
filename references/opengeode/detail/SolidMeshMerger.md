# class SolidMeshMerger

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/solid_merger.cpp#296
```

```cpp
Inherits from VertexMerger<SolidMesh<3U> >
```



# class SolidMeshMerger

```cpp
Defined at ../../include/geode/mesh/helpers/detail/solid_merger.h#44
```

```cpp
Inherits from VertexMerger<SolidMesh<dimension> >
```



## Records

PolyhedronOrigin



## Functions

### SolidMeshMerger

```cpp
public void SolidMeshMerger<dimension>(absl::Span<const std::reference_wrapper<const SolidMesh<dimension> > > solids, double epsilon)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/solid_merger.cpp#260
```

### ~SolidMeshMerger

```cpp
public void ~SolidMeshMerger<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/solid_merger.cpp#270
```

### merge

```cpp
public std::unique_ptr<SolidMesh<dimension> > merge()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/solid_merger.cpp#275
```

### polyhedron_in_merged

```cpp
public index_t polyhedron_in_merged(index_t solid, index_t polyhedron)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/solid_merger.cpp#282
```

### polyhedron_origins

```cpp
public const PolyhedronOrigins & polyhedron_origins(index_t polyhedron)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/solid_merger.cpp#289
```



