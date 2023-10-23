# class VTKMeshInputImpl

```cpp
Inherits from VTKInputImpl<Mesh>
```

## Functions

### VTKMeshInputImpl

```cpp
protected void VTKMeshInputImpl<Mesh>(string_view filename, Mesh & mesh, const char * type)
```

### get_cell_vertices

```cpp
protected int get_cell_vertices(absl::Span<const int64_t> connectivity, absl::Span<const int64_t> offsets)
```
