# class SectionComponentMeshesAdjacency


 Class for inspecting the adjacency of the surface edges in the Component Meshes of a Section.



## Functions

### SectionComponentMeshesAdjacency

```cpp
public void SectionComponentMeshesAdjacency(const SectionComponentMeshesAdjacency & )
```


### operator=

```cpp
public SectionComponentMeshesAdjacency & operator=(const SectionComponentMeshesAdjacency & )
```


### SectionComponentMeshesAdjacency

```cpp
public void SectionComponentMeshesAdjacency(const Section & model)
```


### SectionComponentMeshesAdjacency

```cpp
public void SectionComponentMeshesAdjacency(const Section & model, _Bool verbose)
```


### ~SectionComponentMeshesAdjacency

```cpp
public void ~SectionComponentMeshesAdjacency()
```


### components_with_wrong_adjacencies

```cpp
public std::vector<uuid> components_with_wrong_adjacencies()
```


### surfaces_nb_edges_with_wrong_adjacencies

```cpp
public flat_hash_map surfaces_nb_edges_with_wrong_adjacencies()
```


### surfaces_edges_with_wrong_adjacencies

```cpp
public absl::flat_hash_map<uuid, std::vector<PolygonEdge> > surfaces_edges_with_wrong_adjacencies()
```




