# struct ComponentMeshVertex


 Identify a vertex in a geometric component



## Members

```cpp
public ComponentID component_id
```

```cpp
public index_t vertex
```



## Functions

### ComponentMeshVertex

```cpp
public void ComponentMeshVertex(ComponentID component_id_in, index_t vertex_id_in)
```


### ~ComponentMeshVertex

```cpp
public void ~ComponentMeshVertex()
```


### mesh_vertex

```cpp
public MeshVertex mesh_vertex()
```


### operator==

```cpp
public _Bool operator==(const ComponentMeshVertex & other)
```


### serialize

```cpp
public void serialize(Archive & archive)
```


### string

```cpp
public basic_string string()
```




