# class ComponentMeshesColocation


# class ComponentMeshesColocation


 Class for inspecting the colocation of points in the Component Meshes of a Model (BRep or Section).



## Functions

### ComponentMeshesColocation

```cpp
public void ComponentMeshesColocation<dimension, Model>(const ComponentMeshesColocation<dimension, Model> & )
```


### operator=

```cpp
public ComponentMeshesColocation<dimension, Model> & operator=(const ComponentMeshesColocation<dimension, Model> & )
```


### ComponentMeshesColocation

```cpp
public void ComponentMeshesColocation<dimension, Model>(const Model & model)
```


### ComponentMeshesColocation

```cpp
public void ComponentMeshesColocation<dimension, Model>(const Model & model, _Bool verbose)
```


### ~ComponentMeshesColocation

```cpp
public void ~ComponentMeshesColocation<dimension, Model>()
```


### components_with_colocated_points

```cpp
public std::vector<uuid> components_with_colocated_points()
```


### components_nb_colocated_points

```cpp
public flat_hash_map components_nb_colocated_points()
```


### components_colocated_points_groups

```cpp
public absl::flat_hash_map<uuid, std::vector<std::vector<index_t> > > components_colocated_points_groups()
```




# class ComponentMeshesColocation


