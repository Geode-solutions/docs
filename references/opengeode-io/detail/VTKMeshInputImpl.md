# class VTKMeshInputImpl

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_mesh_input.h#48
```

```cpp
Inherits from VTKInputImpl<Mesh>
```



## Functions

### VTKMeshInputImpl

```cpp
protected void VTKMeshInputImpl<Mesh>(string_view filename, Mesh & mesh, const char * type)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_mesh_input.h#51
```

### get_cell_vertices

```cpp
protected int get_cell_vertices(absl::Span<const int64_t> connectivity, absl::Span<const int64_t> offsets)
```

```cpp
Defined at ../../include/geode/io/mesh/private/vtk_mesh_input.h#57
```



