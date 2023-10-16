# struct MeshElement


## Members

```cpp
public uuid mesh_id

```

```cpp
public index_t element_id

```



## Functions

### MeshElement

```cpp
public void MeshElement(uuid mesh_id_in, index_t element_id_in)
```


### operator==

```cpp
public bool operator==(const MeshElement & other)
```


### operator!=

```cpp
public bool operator!=(const MeshElement & other)
```


### serialize

```cpp
public void serialize(Archive & archive)
```


### string

```cpp
public basic_string string()
```




