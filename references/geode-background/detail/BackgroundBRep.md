# class BackgroundBRep


```cpp
```cpp
Inherits from BRep
```
```



## Functions

### BackgroundBRep

```cpp
```cpp
public void BackgroundBRep(BRep && brep)
```
```


### release_brep

```cpp
```cpp
public BRep release_brep()
```
```


### component_vertices

```cpp
```cpp
public const std::vector<MeshVertex> & component_vertices(const Block3D & block, index_t vertex_id)
```
```


### is_vertex_part_of_component_vertices

```cpp
```cpp
public _Bool is_vertex_part_of_component_vertices(const Block3D & block, index_t vertex_id, const uuid & id)
```
```


### is_vertex_part_of_component_vertices

```cpp
```cpp
public _Bool is_vertex_part_of_component_vertices(index_t unique_vertex_id, const uuid & id)
```
```



