# class MeshStorage


## Functions

### MeshStorage

```cpp
public void MeshStorage<Mesh>()
```


### set_mesh

```cpp
public void set_mesh(uuid new_mesh_uuid, std::unique_ptr<Mesh> mesh)
```


### mesh

```cpp
public const Mesh & mesh()
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh()
```


### mesh_type

```cpp
public const MeshImpl & mesh_type()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




