# class BRepComponentMeshesAdjacency

Class for inspecting the adjacency of the surface edges and solid facets in the Component Meshes of a BRep.

## Functions

### BRepComponentMeshesAdjacency

```cpp
public void BRepComponentMeshesAdjacency(const BRepComponentMeshesAdjacency & )
```

### operator=

```cpp
public BRepComponentMeshesAdjacency & operator=(const BRepComponentMeshesAdjacency & )
```

### BRepComponentMeshesAdjacency

```cpp
public void BRepComponentMeshesAdjacency(const BRep & model)
```

### BRepComponentMeshesAdjacency

```cpp
public void BRepComponentMeshesAdjacency(const BRep & model, bool verbose)
```

### ~BRepComponentMeshesAdjacency

```cpp
public void ~BRepComponentMeshesAdjacency()
```

### components_with_wrong_adjacencies

```cpp
public vector components_with_wrong_adjacencies()
```

### surfaces_nb_edges_with_wrong_adjacencies

```cpp
public flat_hash_map surfaces_nb_edges_with_wrong_adjacencies()
```

### surfaces_edges_with_wrong_adjacencies

```cpp
public flat_hash_map surfaces_edges_with_wrong_adjacencies()
```

### blocks_nb_facets_with_wrong_adjacencies

```cpp
public flat_hash_map blocks_nb_facets_with_wrong_adjacencies()
```

### blocks_facets_with_wrong_adjacencies

```cpp
public flat_hash_map blocks_facets_with_wrong_adjacencies()
```
