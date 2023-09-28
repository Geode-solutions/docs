# class VertexMerger

# class VertexMerger

# class VertexMerger

# class VertexMerger

# class VertexMerger

# class VertexMerger

```cpp
Defined at ../../include/geode/mesh/helpers/detail/vertex_merger.h#36
```

## Records

VertexOrigin



## Functions

### vertex_in_merged

```cpp
public index_t vertex_in_merged(index_t mesh, index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/vertex_merger.cpp#190
```

### vertex_origins

```cpp
public const VertexOrigins & vertex_origins(index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/vertex_merger.cpp#197
```

### VertexMerger

```cpp
protected void VertexMerger<Mesh>(absl::Span<const std::reference_wrapper<const Mesh> > meshes, double epsilon)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/vertex_merger.cpp#177
```

### ~VertexMerger

```cpp
protected void ~VertexMerger<Mesh>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/vertex_merger.cpp#185
```

### meshes

```cpp
protected absl::Span<const std::reference_wrapper<const Mesh> > meshes()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/vertex_merger.cpp#204
```

### mesh

```cpp
protected const Mesh & mesh()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/vertex_merger.cpp#211
```

### steal_mesh

```cpp
protected std::unique_ptr<Mesh> steal_mesh()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/vertex_merger.cpp#217
```

### builder

```cpp
protected Builder & builder()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/vertex_merger.cpp#223
```

### create_points

```cpp
protected void create_points()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/detail/vertex_merger.cpp#229
```



