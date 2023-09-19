# class ComponentMeshesAdjacency


# class ComponentMeshesAdjacency


# class ComponentMeshesAdjacency


 Class for inspecting the adjacency of edges in the Component Meshes of a Model (BRep or Section).



## Functions

### ComponentMeshesAdjacency

```cpp
public void ComponentMeshesAdjacency<dimension, Model>(const ComponentMeshesAdjacency<dimension, Model> & )
```


### operator=

```cpp
public ComponentMeshesAdjacency<dimension, Model> & operator=(const ComponentMeshesAdjacency<dimension, Model> & )
```


### surfaces_with_wrong_adjacencies

```cpp
public vector surfaces_with_wrong_adjacencies()
```


### surfaces_nb_edges_with_wrong_adjacencies

```cpp
public flat_hash_map surfaces_nb_edges_with_wrong_adjacencies()
```


### surfaces_edges_with_wrong_adjacencies

```cpp
public flat_hash_map surfaces_edges_with_wrong_adjacencies()
```


### ComponentMeshesAdjacency

```cpp
protected void ComponentMeshesAdjacency<dimension, Model>(const Model & model, _Bool verbose)
```


### model

```cpp
protected const Model & model()
```


### verbose

```cpp
protected _Bool verbose()
```




