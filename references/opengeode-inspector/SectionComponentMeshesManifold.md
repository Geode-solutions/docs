# class SectionComponentMeshesManifold


 Class for inspecting the manifold property in the Component Meshes of a Section.



## Functions

### SectionComponentMeshesManifold

```cpp
public void SectionComponentMeshesManifold(const SectionComponentMeshesManifold & )
```


### operator=

```cpp
public SectionComponentMeshesManifold & operator=(const SectionComponentMeshesManifold & )
```


### SectionComponentMeshesManifold

```cpp
public void SectionComponentMeshesManifold(const Section & section)
```


### SectionComponentMeshesManifold

```cpp
public void SectionComponentMeshesManifold(const Section & section, _Bool verbose)
```


### ~SectionComponentMeshesManifold

```cpp
public void ~SectionComponentMeshesManifold()
```


### components_non_manifold_meshes

```cpp
public std::vector<uuid> components_non_manifold_meshes()
```


### component_meshes_nb_non_manifold_vertices

```cpp
public absl::flat_hash_map<uuid, index_t> component_meshes_nb_non_manifold_vertices()
```


### component_meshes_nb_non_manifold_edges

```cpp
public absl::flat_hash_map<uuid, index_t> component_meshes_nb_non_manifold_edges()
```


### component_meshes_non_manifold_vertices

```cpp
public absl::flat_hash_map<uuid, std::vector<index_t> > component_meshes_non_manifold_vertices()
```


### component_meshes_non_manifold_edges

```cpp
public absl::flat_hash_map<uuid, std::vector<std::array<index_t, 2> > > component_meshes_non_manifold_edges()
```




