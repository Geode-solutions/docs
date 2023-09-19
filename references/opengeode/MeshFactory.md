# class MeshFactory


```cpp
Inherits from Factory<MeshImpl, VertexSet>
```



## Functions

### register_mesh

```cpp
public void register_mesh(NamedType type, NamedType key)
```


 Register a mesh implementation to a given mesh type

### register_default_mesh

```cpp
public void register_default_mesh(NamedType type, NamedType key)
```


 Register the default mesh implementation to a given mesh type. This implementation will be used when no specific implementation is required.

### type

```cpp
public const MeshType & type(const MeshImpl & key)
```


### default_impl

```cpp
public const MeshImpl & default_impl(const MeshType & type)
```


### create_mesh

```cpp
public std::unique_ptr<Mesh> create_mesh(const MeshImpl & key)
```


### create_default_mesh

```cpp
public std::unique_ptr<Mesh> create_default_mesh(const MeshType & type)
```


### create_mesh

```cpp
public int create_mesh(const MeshImpl & key)
```


### create_default_mesh

```cpp
public int create_default_mesh(const MeshType & type)
```




