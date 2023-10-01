# class TetgenMesher

```cpp
Defined at ../../include/geode/simplex/private/solid/private/tetgen_mesher.h#23
```

## Functions

### TetgenMesher

```cpp
protected void TetgenMesher(std::unique_ptr<TetrahedralSolidBuilder3D> && mesh_builder, Span internal_points)
```

### ~TetgenMesher

```cpp
protected void ~TetgenMesher()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/private/tetgen_mesher.cpp#326
```

### do_tetrahedralize

```cpp
protected void do_tetrahedralize()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/private/tetgen_mesher.cpp#328
```

### create_input_vertices

```cpp
protected void create_input_vertices(index_t nb_vertices)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/private/tetgen_mesher.cpp#333
```

### set_input_point

```cpp
protected void set_input_point(index_t vertex_id, const Point3D & point, index_t info)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/private/tetgen_mesher.cpp#338
```

### create_input_triangles

```cpp
protected void create_input_triangles(index_t nb_tirangles)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/private/tetgen_mesher.cpp#344
```

### set_input_triangle

```cpp
protected void set_input_triangle(index_t triangle_id, const std::array<index_t, 3> & vertices)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/private/tetgen_mesher.cpp#349
```

### create_input_edges

```cpp
protected void create_input_edges(index_t nb_edges)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/private/tetgen_mesher.cpp#355
```

### set_input_edge

```cpp
protected void set_input_edge(index_t edge_id, index_t v0, index_t v1)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/private/tetgen_mesher.cpp#360
```

### assign_result

```cpp
protected vector assign_result()
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/private/tetgen_mesher.cpp#366
```

### TetgenMesher

```cpp
protected void TetgenMesher(int && mesh_builder, Span internal_points)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/solid/private/tetgen_mesher.cpp#319
```



