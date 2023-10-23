# class SurfaceMeshAdjacency

# class SurfaceMeshAdjacency

# class SurfaceMeshAdjacency

Class for inspecting the adjacency on the edges of a SurfaceMesh

## Functions

### SurfaceMeshAdjacency

```cpp
public void SurfaceMeshAdjacency<dimension>(const SurfaceMeshAdjacency<dimension> & )
```

### operator=

```cpp
public SurfaceMeshAdjacency<dimension> & operator=(const SurfaceMeshAdjacency<dimension> & )
```

### SurfaceMeshAdjacency

```cpp
public void SurfaceMeshAdjacency<dimension>(const SurfaceMesh<dimension> & mesh)
```

### SurfaceMeshAdjacency

```cpp
public void SurfaceMeshAdjacency<dimension>(const SurfaceMesh<dimension> & mesh, bool verbose)
```

### ~SurfaceMeshAdjacency

```cpp
public void ~SurfaceMeshAdjacency<dimension>()
```

### mesh_has_wrong_adjacencies

```cpp
public bool mesh_has_wrong_adjacencies()
```

### nb_edges_with_wrong_adjacency

```cpp
public index_t nb_edges_with_wrong_adjacency()
```

### polygon_edges_with_wrong_adjacency

```cpp
public vector polygon_edges_with_wrong_adjacency()
```
