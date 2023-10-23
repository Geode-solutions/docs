# class SolidMeshFacetManifold

# class SolidMeshFacetManifold

Class for inspecting the manifold property of a SolidMesh

## Functions

### SolidMeshFacetManifold

```cpp
public void SolidMeshFacetManifold<dimension>(const SolidMeshFacetManifold<dimension> & )
```

### operator=

```cpp
public SolidMeshFacetManifold<dimension> & operator=(const SolidMeshFacetManifold<dimension> & )
```

### SolidMeshFacetManifold

```cpp
public void SolidMeshFacetManifold<dimension>(const SolidMesh<dimension> & mesh)
```

### SolidMeshFacetManifold

```cpp
public void SolidMeshFacetManifold<dimension>(const SolidMesh<dimension> & mesh, bool verbose)
```

### ~SolidMeshFacetManifold

```cpp
public void ~SolidMeshFacetManifold<dimension>()
```

### mesh_facets_are_manifold

```cpp
public bool mesh_facets_are_manifold()
```

### nb_non_manifold_facets

```cpp
public index_t nb_non_manifold_facets()
```

### non_manifold_facets

```cpp
public std::vector<PolyhedronFacetVertices> non_manifold_facets()
```
