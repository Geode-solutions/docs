# class SolidMeshDegeneration

# class SolidMeshDegeneration

Class for inspecting the degeneration of a SolidMesh

## Functions

### SolidMeshDegeneration

```cpp
public void SolidMeshDegeneration<dimension>(const SolidMeshDegeneration<dimension> & )
```

### operator=

```cpp
public SolidMeshDegeneration<dimension> & operator=(const SolidMeshDegeneration<dimension> & )
```

### SolidMeshDegeneration

```cpp
public void SolidMeshDegeneration<dimension>(const SolidMesh<dimension> & mesh)
```

### SolidMeshDegeneration

```cpp
public void SolidMeshDegeneration<dimension>(const SolidMesh<dimension> & mesh, bool verbose)
```

### ~SolidMeshDegeneration

```cpp
public void ~SolidMeshDegeneration<dimension>()
```

### is_mesh_degenerated

```cpp
public bool is_mesh_degenerated()
```

### nb_degenerated_edges

```cpp
public index_t nb_degenerated_edges()
```

### nb_degenerated_polyhedra

```cpp
public index_t nb_degenerated_polyhedra()
```

### degenerated_edges

```cpp
public vector degenerated_edges()
```

### degenerated_polyhedra

```cpp
public vector degenerated_polyhedra()
```
