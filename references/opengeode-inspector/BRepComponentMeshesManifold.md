# class BRepComponentMeshesManifold


 Class for inspecting the manifold property in the Component Meshes of a BRep.



## Functions

### BRepComponentMeshesManifold

```cpp
public void BRepComponentMeshesManifold(const BRepComponentMeshesManifold & )
```


### operator=

```cpp
public BRepComponentMeshesManifold & operator=(const BRepComponentMeshesManifold & )
```


### BRepComponentMeshesManifold

```cpp
public void BRepComponentMeshesManifold(const BRep & brep)
```


### BRepComponentMeshesManifold

```cpp
public void BRepComponentMeshesManifold(const BRep & brep, _Bool verbose)
```


### ~BRepComponentMeshesManifold

```cpp
public void ~BRepComponentMeshesManifold()
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


### component_meshes_nb_non_manifold_facets

```cpp
public absl::flat_hash_map<uuid, index_t> component_meshes_nb_non_manifold_facets()
```


### component_meshes_non_manifold_vertices

```cpp
public absl::flat_hash_map<uuid, std::vector<index_t> > component_meshes_non_manifold_vertices()
```


### component_meshes_non_manifold_edges

```cpp
public absl::flat_hash_map<uuid, std::vector<std::array<index_t, 2> > > component_meshes_non_manifold_edges()
```


### component_meshes_non_manifold_facets

```cpp
public absl::flat_hash_map<uuid, std::vector<PolyhedronFacetVertices> > component_meshes_non_manifold_facets()
```


### model_non_manifold_edges

```cpp
public absl::flat_hash_map<std::array<index_t, 2>, std::vector<uuid> > model_non_manifold_edges()
```




