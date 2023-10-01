# class BRepComponentMeshesManifold

```cpp
Defined at ../include/geode/inspector/criterion/manifold/brep_meshes_manifold.h#46
```

 Class for inspecting the manifold property in the Component Meshes of a BRep.



## Functions

### BRepComponentMeshesManifold

```cpp
public void BRepComponentMeshesManifold(const BRepComponentMeshesManifold & )
```

```cpp
Defined at ../include/geode/inspector/criterion/manifold/brep_meshes_manifold.h#48
```

### operator=

```cpp
public BRepComponentMeshesManifold & operator=(const BRepComponentMeshesManifold & )
```

```cpp
Defined at ../include/geode/inspector/criterion/manifold/brep_meshes_manifold.h#48
```

### BRepComponentMeshesManifold

```cpp
public void BRepComponentMeshesManifold(const BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/brep_meshes_manifold.cpp#279
```

### BRepComponentMeshesManifold

```cpp
public void BRepComponentMeshesManifold(const BRep & brep, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/brep_meshes_manifold.cpp#285
```

### ~BRepComponentMeshesManifold

```cpp
public void ~BRepComponentMeshesManifold()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/brep_meshes_manifold.cpp#291
```

### components_non_manifold_meshes

```cpp
public std::vector<uuid> components_non_manifold_meshes()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/brep_meshes_manifold.cpp#293
```

### component_meshes_nb_non_manifold_vertices

```cpp
public absl::flat_hash_map<uuid, index_t> component_meshes_nb_non_manifold_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/brep_meshes_manifold.cpp#299
```

### component_meshes_nb_non_manifold_edges

```cpp
public absl::flat_hash_map<uuid, index_t> component_meshes_nb_non_manifold_edges()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/brep_meshes_manifold.cpp#306
```

### component_meshes_nb_non_manifold_facets

```cpp
public absl::flat_hash_map<uuid, index_t> component_meshes_nb_non_manifold_facets()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/brep_meshes_manifold.cpp#313
```

### component_meshes_non_manifold_vertices

```cpp
public absl::flat_hash_map<uuid, std::vector<index_t> > component_meshes_non_manifold_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/brep_meshes_manifold.cpp#320
```

### component_meshes_non_manifold_edges

```cpp
public absl::flat_hash_map<uuid, std::vector<std::array<index_t, 2> > > component_meshes_non_manifold_edges()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/brep_meshes_manifold.cpp#327
```

### component_meshes_non_manifold_facets

```cpp
public absl::flat_hash_map<uuid, std::vector<PolyhedronFacetVertices> > component_meshes_non_manifold_facets()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/brep_meshes_manifold.cpp#333
```

### model_non_manifold_edges

```cpp
public absl::flat_hash_map<std::array<index_t, 2>, std::vector<uuid> > model_non_manifold_edges()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/brep_meshes_manifold.cpp#340
```



