# struct ComponentMeshElement


 Identify an element in a model component



## Members

```cpp
public ComponentID component_id

```

```cpp
public index_t element_id

```



## Functions

### ComponentMeshElement

```cpp
public void ComponentMeshElement()
```


### ComponentMeshElement

```cpp
public void ComponentMeshElement(ComponentID component_id_in, index_t element_id_in)
```


### mesh_element

```cpp
public MeshElement mesh_element()
```


### operator==

```cpp
public bool operator==(const ComponentMeshElement & other)
```


### serialize

```cpp
public void serialize(Archive & archive)
```


### string

```cpp
public basic_string string()
```




