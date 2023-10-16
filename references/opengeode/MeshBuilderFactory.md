# class MeshBuilderFactory


```cpp
Inherits from Factory<MeshImpl, VertexSetBuilder, VertexSet &, MeshBuilderFactoryKey>
```



## Functions

### register_mesh_builder

```cpp
public void register_mesh_builder(NamedType key)
```


### create_mesh_builder

```cpp
public std::unique_ptr<MeshBuilder> create_mesh_builder(Mesh & mesh)
```


### create_mesh_builder

```cpp
public int create_mesh_builder(Mesh & mesh)
```




