# class RemeshAlgo

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/remesh_algo.h#28
```

## Records

Impl



## Functions

### RemeshAlgo

```cpp
protected void RemeshAlgo<dimension>(const Metric<dimension> & metric, absl::Span<const index_t> lock_vertices)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesh_algo.cpp#81
```

### ~RemeshAlgo

```cpp
protected void ~RemeshAlgo<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesh_algo.cpp#88
```

### common_output

```cpp
protected RemeshedSurface<dimension> common_output()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesh_algo.cpp#93
```

### remeshed

```cpp
protected const TriangulatedSurface<dimension> & remeshed()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesh_algo.cpp#99
```

### remeshed_builder

```cpp
protected TriangulatedSurfaceBuilder<dimension> & remeshed_builder()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesh_algo.cpp#106
```

### lock_vertices

```cpp
protected absl::Span<const index_t> lock_vertices()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesh_algo.cpp#113
```

### set_mapping

```cpp
protected void set_mapping(std::vector<VertexOrigin> && mapping)
```

### add_mapping

```cpp
protected void add_mapping(index_t background_vertex, bool is_locked)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesh_algo.cpp#127
```

### metric

```cpp
protected const Metric<dimension> & metric()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesh_algo.cpp#134
```

### set_mapping

```cpp
public void set_mapping(int && mapping)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/remesh_algo.cpp#120
```



# class RemeshAlgo

# class RemeshAlgo

