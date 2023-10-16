# class Corner


```cpp
Inherits from Component<3U>
```



# class Corner


```cpp
Inherits from Component<2U>
```



# class Corner


 Geometric component describing a Point. This component is described by a mesh.



```cpp
Inherits from Component<dimension>
```



## Functions

### Corner

```cpp
public void Corner<dimension>(const Corner<dimension> & )
```


### operator=

```cpp
public Corner<dimension> & operator=(const Corner<dimension> & )
```


### Corner

```cpp
public void Corner<dimension>(Corner<dimension> && other)
```


### ~Corner

```cpp
public void ~Corner<dimension>()
```


### component_type_static

```cpp
public NamedType component_type_static()
```


### component_type

```cpp
public NamedType component_type()
```


### component_id

```cpp
public ComponentID component_id()
```


### mesh

```cpp
public const Mesh & mesh()
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(CornersKey key)
```


### mesh_type

```cpp
public const MeshImpl & mesh_type()
```


### Corner

```cpp
public void Corner<dimension>(CornersKey key)
```


### Corner

```cpp
public void Corner<dimension>(const MeshImpl & impl, CornersKey key)
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, CornersKey key)
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, CornersBuilderKey key)
```


### set_corner_name

```cpp
public void set_corner_name(string_view name, CornersBuilderKey key)
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(CornersBuilderKey key)
```




