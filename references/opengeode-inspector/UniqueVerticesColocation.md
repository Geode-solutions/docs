# class UniqueVerticesColocation

# class UniqueVerticesColocation

# class UniqueVerticesColocation


 Class for inspecting the colocation of unique vertices in a Model (BRep or Section)



## Functions

### UniqueVerticesColocation

```cpp
public void UniqueVerticesColocation<dimension, Model>(const UniqueVerticesColocation<dimension, Model> & )
```


### operator=

```cpp
public UniqueVerticesColocation<dimension, Model> & operator=(const UniqueVerticesColocation<dimension, Model> & )
```


### UniqueVerticesColocation

```cpp
public void UniqueVerticesColocation<dimension, Model>(const Model & model)
```


### UniqueVerticesColocation

```cpp
public void UniqueVerticesColocation<dimension, Model>(const Model & model, _Bool verbose)
```


### ~UniqueVerticesColocation

```cpp
public void ~UniqueVerticesColocation<dimension, Model>()
```


### model_has_unique_vertices_linked_to_different_points

```cpp
public _Bool model_has_unique_vertices_linked_to_different_points()
```


### model_has_colocated_unique_vertices

```cpp
public _Bool model_has_colocated_unique_vertices()
```


### nb_colocated_unique_vertices

```cpp
public index_t nb_colocated_unique_vertices()
```


### nb_unique_vertices_linked_to_different_points

```cpp
public index_t nb_unique_vertices_linked_to_different_points()
```


### colocated_unique_vertices_groups

```cpp
public std::vector<std::vector<index_t> > colocated_unique_vertices_groups()
```


### unique_vertices_linked_to_different_points

```cpp
public vector unique_vertices_linked_to_different_points()
```




