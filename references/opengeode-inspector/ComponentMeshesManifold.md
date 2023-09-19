# class ComponentMeshesManifold


# class ComponentMeshesManifold


 Class for inspecting the manifold property in the Component Meshes of a Model (BRep or Section).



## Functions

### ComponentMeshesManifold

```cpp
public void ComponentMeshesManifold<dimension, Model>(const ComponentMeshesManifold<dimension, Model> & )
```


### operator=

```cpp
public ComponentMeshesManifold<dimension, Model> & operator=(const ComponentMeshesManifold<dimension, Model> & )
```


### surfaces_non_manifold_meshes

```cpp
public vector surfaces_non_manifold_meshes()
```


### surfaces_meshes_nb_non_manifold_vertices

```cpp
public flat_hash_map surfaces_meshes_nb_non_manifold_vertices()
```


### surfaces_meshes_nb_non_manifold_edges

```cpp
public flat_hash_map surfaces_meshes_nb_non_manifold_edges()
```


### surfaces_meshes_non_manifold_vertices

```cpp
public flat_hash_map surfaces_meshes_non_manifold_vertices()
```


### surfaces_meshes_non_manifold_edges

```cpp
public flat_hash_map surfaces_meshes_non_manifold_edges()
```


### ComponentMeshesManifold

```cpp
protected void ComponentMeshesManifold<dimension, Model>(const Model & model, _Bool verbose)
```


### model

```cpp
protected const Model & model()
```


### verbose

```cpp
protected _Bool verbose()
```




# class ComponentMeshesManifold


