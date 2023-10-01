# class SolidPatcher

```cpp
Defined at ../include/geode/common/cutter/solid/private/solid_patcher.h#28
```

## Functions

### SolidPatcher

```cpp
public void SolidPatcher()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#330
```

### ~SolidPatcher

```cpp
public void ~SolidPatcher()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#332
```

### patch

```cpp
public const TriangulatedSurface3D & patch()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#336
```

### solid_patch

```cpp
public const SolidPatch & solid_patch(index_t patch_vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#341
```

### front_edge

```cpp
public optional front_edge(Span patch_edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#346
```

### is_vertex_in_patch

```cpp
public bool is_vertex_in_patch(index_t solid_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#352
```

### is_facet_in_patch

```cpp
public bool is_facet_in_patch(const std::array<index_t, 3> & patch_vertices)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#357
```

### patch_vertex_id

```cpp
public optional patch_vertex_id(index_t solid_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#363
```

### initialize_front_edge

```cpp
public array initialize_front_edge(const PatchFrontEdge & edge, const std::array<index_t, 2> & solid_edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#369
```

### skip

```cpp
public bool skip(Span patch_edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#376
```

### find_or_create_patch_vertex_from_vertex

```cpp
public index_t find_or_create_patch_vertex_from_vertex(index_t solid_vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#382
```

### find_or_create_patch_vertex_from_edge

```cpp
public index_t find_or_create_patch_vertex_from_edge(const TetrahedralSolid3D & solid, index_t solid_edge)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#388
```

### find_or_create_patch_vertex

```cpp
public index_t find_or_create_patch_vertex(const TetrahedralSolid3D & solid, const SolidPatch & patch)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#395
```

### create_patch_triangle

```cpp
public index_t create_patch_triangle(array edge_vertices, index_t third_vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#401
```

### set_patch_triangle_info

```cpp
public void set_patch_triangle_info(std::pair<PolygonEdge, PolygonEdge> & triangle_info, const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#407
```

### move_front_forward

```cpp
public void move_front_forward(index_t fv0, index_t fv1, index_t solid_vertex, index_t opp_front_vertex, const TetrahedralSolid3D & solid)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/solid_patcher.cpp#414
```



