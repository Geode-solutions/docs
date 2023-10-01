# class SolidMeshFacetManifold

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/solid_facet_manifold.cpp#182
```

# class SolidMeshFacetManifold

```cpp
Defined at ../include/geode/inspector/criterion/manifold/solid_facet_manifold.h#40
```

 Class for inspecting the manifold property of a SolidMesh



## Functions

### SolidMeshFacetManifold

```cpp
public void SolidMeshFacetManifold<dimension>(const SolidMeshFacetManifold<dimension> & )
```

```cpp
Defined at ../include/geode/inspector/criterion/manifold/solid_facet_manifold.h#42
```

### operator=

```cpp
public SolidMeshFacetManifold<dimension> & operator=(const SolidMeshFacetManifold<dimension> & )
```

```cpp
Defined at ../include/geode/inspector/criterion/manifold/solid_facet_manifold.h#42
```

### SolidMeshFacetManifold

```cpp
public void SolidMeshFacetManifold<dimension>(const SolidMesh<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/solid_facet_manifold.cpp#144
```

### SolidMeshFacetManifold

```cpp
public void SolidMeshFacetManifold<dimension>(const SolidMesh<dimension> & mesh, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/solid_facet_manifold.cpp#151
```

### ~SolidMeshFacetManifold

```cpp
public void ~SolidMeshFacetManifold<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/solid_facet_manifold.cpp#158
```

### mesh_facets_are_manifold

```cpp
public bool mesh_facets_are_manifold()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/solid_facet_manifold.cpp#163
```

### nb_non_manifold_facets

```cpp
public index_t nb_non_manifold_facets()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/solid_facet_manifold.cpp#169
```

### non_manifold_facets

```cpp
public std::vector<PolyhedronFacetVertices> non_manifold_facets()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/solid_facet_manifold.cpp#175
```



