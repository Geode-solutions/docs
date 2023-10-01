# class SectionComponentMeshesAdjacency

```cpp
Defined at ../include/geode/inspector/criterion/adjacency/section_meshes_adjacency.h#45
```

 Class for inspecting the adjacency of the surface edges in the Component Meshes of a Section.



## Functions

### SectionComponentMeshesAdjacency

```cpp
public void SectionComponentMeshesAdjacency(const SectionComponentMeshesAdjacency & )
```

```cpp
Defined at ../include/geode/inspector/criterion/adjacency/section_meshes_adjacency.h#47
```

### operator=

```cpp
public SectionComponentMeshesAdjacency & operator=(const SectionComponentMeshesAdjacency & )
```

```cpp
Defined at ../include/geode/inspector/criterion/adjacency/section_meshes_adjacency.h#47
```

### SectionComponentMeshesAdjacency

```cpp
public void SectionComponentMeshesAdjacency(const Section & model)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/section_meshes_adjacency.cpp#47
```

### SectionComponentMeshesAdjacency

```cpp
public void SectionComponentMeshesAdjacency(const Section & model, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/section_meshes_adjacency.cpp#53
```

### ~SectionComponentMeshesAdjacency

```cpp
public void ~SectionComponentMeshesAdjacency()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/section_meshes_adjacency.cpp#59
```

### components_with_wrong_adjacencies

```cpp
public std::vector<uuid> components_with_wrong_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/section_meshes_adjacency.cpp#61
```

### surfaces_nb_edges_with_wrong_adjacencies

```cpp
public flat_hash_map surfaces_nb_edges_with_wrong_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/section_meshes_adjacency.cpp#68
```

### surfaces_edges_with_wrong_adjacencies

```cpp
public absl::flat_hash_map<uuid, std::vector<PolygonEdge> > surfaces_edges_with_wrong_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/adjacency/section_meshes_adjacency.cpp#74
```



