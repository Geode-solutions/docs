# class SectionComponentMeshesManifold

```cpp
Defined at ../include/geode/inspector/criterion/manifold/section_meshes_manifold.h#44
```

 Class for inspecting the manifold property in the Component Meshes of a Section.



## Functions

### SectionComponentMeshesManifold

```cpp
public void SectionComponentMeshesManifold(const SectionComponentMeshesManifold & )
```

```cpp
Defined at ../include/geode/inspector/criterion/manifold/section_meshes_manifold.h#46
```

### operator=

```cpp
public SectionComponentMeshesManifold & operator=(const SectionComponentMeshesManifold & )
```

```cpp
Defined at ../include/geode/inspector/criterion/manifold/section_meshes_manifold.h#46
```

### SectionComponentMeshesManifold

```cpp
public void SectionComponentMeshesManifold(const Section & section)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/section_meshes_manifold.cpp#45
```

### SectionComponentMeshesManifold

```cpp
public void SectionComponentMeshesManifold(const Section & section, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/section_meshes_manifold.cpp#51
```

### ~SectionComponentMeshesManifold

```cpp
public void ~SectionComponentMeshesManifold()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/section_meshes_manifold.cpp#57
```

### components_non_manifold_meshes

```cpp
public std::vector<uuid> components_non_manifold_meshes()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/section_meshes_manifold.cpp#59
```

### component_meshes_nb_non_manifold_vertices

```cpp
public flat_hash_map component_meshes_nb_non_manifold_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/section_meshes_manifold.cpp#65
```

### component_meshes_nb_non_manifold_edges

```cpp
public flat_hash_map component_meshes_nb_non_manifold_edges()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/section_meshes_manifold.cpp#71
```

### component_meshes_non_manifold_vertices

```cpp
public absl::flat_hash_map<uuid, std::vector<index_t> > component_meshes_non_manifold_vertices()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/section_meshes_manifold.cpp#78
```

### component_meshes_non_manifold_edges

```cpp
public flat_hash_map component_meshes_non_manifold_edges()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/manifold/section_meshes_manifold.cpp#85
```



