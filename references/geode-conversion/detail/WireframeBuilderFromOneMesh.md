# class WireframeBuilderFromOneMesh

```cpp
Defined at ../include/geode/conversion/model/detail/wireframe_builder_from_one_mesh.h#26
```

```cpp
Inherits from CornersLinesBuilder<Model>
```



## Functions

### ~WireframeBuilderFromOneMesh

```cpp
public void ~WireframeBuilderFromOneMesh<Model, Mesh>()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/wireframe_builder_from_one_mesh.cpp#440
```

### build_wireframe_step

```cpp
public void build_wireframe_step()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/wireframe_builder_from_one_mesh.cpp#474
```

### is_corner

```cpp
public bool is_corner(index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/wireframe_builder_from_one_mesh.cpp#480
```

### mappings

```cpp
public IndexToModelMeshElementsMapping mappings()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/wireframe_builder_from_one_mesh.cpp#506
```

### WireframeBuilderFromOneMesh

```cpp
protected void WireframeBuilderFromOneMesh<Model, Mesh>(Model & model, const Mesh & one_mesh)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/wireframe_builder_from_one_mesh.cpp#433
```

### add_corner_vertices

```cpp
protected void add_corner_vertices(Span additional_corner_vertices)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/wireframe_builder_from_one_mesh.cpp#446
```

### corner_vertices

```cpp
protected const std::vector<index_t> & corner_vertices()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/wireframe_builder_from_one_mesh.cpp#453
```

### add_line_edges

```cpp
protected void add_line_edges(Span additional_line_edges)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/wireframe_builder_from_one_mesh.cpp#460
```

### line_edges

```cpp
protected const std::vector<index_t> & line_edges()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/wireframe_builder_from_one_mesh.cpp#467
```

### update_corner_line_mappings

```cpp
protected void update_corner_line_mappings()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/wireframe_builder_from_one_mesh.cpp#487
```

### build_surfaces

```cpp
protected void build_surfaces(const SurfaceMesh<dimension> & whole_surface, const absl::flat_hash_map<index_t, index_t> & whole_surface_to_one_mesh_vertices, Span whole_surface_to_one_mesh_polygons)
```

### build_surfaces

```cpp
protected void build_surfaces(const SurfaceMesh<dimension> & whole_surface, const int & whole_surface_to_one_mesh_vertices, Span whole_surface_to_one_mesh_polygons)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/wireframe_builder_from_one_mesh.cpp#494
```



# class WireframeBuilderFromOneMesh

# class WireframeBuilderFromOneMesh

