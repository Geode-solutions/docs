# class BRepComponentMeshesAdjacency

```cpp
Defined at ../include/geode/inspector/criterion/adjacency/brep_meshes_adjacency.h#46
```

 Class for inspecting the adjacency of the surface edges and solid facets in the Component Meshes of a BRep.



## Functions

### BRepComponentMeshesAdjacency

```cpp
public void BRepComponentMeshesAdjacency(const BRepComponentMeshesAdjacency & )
```

```cpp
Defined at ../include/geode/inspector/criterion/adjacency/brep_meshes_adjacency.h#48
```

### operator=

```cpp
public BRepComponentMeshesAdjacency & operator=(const BRepComponentMeshesAdjacency & )
```

```cpp
Defined at ../include/geode/inspector/criterion/adjacency/brep_meshes_adjacency.h#48
```

### BRepComponentMeshesAdjacency

```cpp
public void BRepComponentMeshesAdjacency(const BRep & model)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/brep_meshes_adjacency.cpp#106
```

### BRepComponentMeshesAdjacency

```cpp
public void BRepComponentMeshesAdjacency(const BRep & model, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/brep_meshes_adjacency.cpp#112
```

### ~BRepComponentMeshesAdjacency

```cpp
public void ~BRepComponentMeshesAdjacency()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/brep_meshes_adjacency.cpp#118
```

### components_with_wrong_adjacencies

```cpp
public vector components_with_wrong_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/brep_meshes_adjacency.cpp#120
```

### surfaces_nb_edges_with_wrong_adjacencies

```cpp
public flat_hash_map surfaces_nb_edges_with_wrong_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/brep_meshes_adjacency.cpp#126
```

### surfaces_edges_with_wrong_adjacencies

```cpp
public flat_hash_map surfaces_edges_with_wrong_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/brep_meshes_adjacency.cpp#133
```

### blocks_nb_facets_with_wrong_adjacencies

```cpp
public flat_hash_map blocks_nb_facets_with_wrong_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/brep_meshes_adjacency.cpp#140
```

### blocks_facets_with_wrong_adjacencies

```cpp
public flat_hash_map blocks_facets_with_wrong_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/brep_meshes_adjacency.cpp#147
```



