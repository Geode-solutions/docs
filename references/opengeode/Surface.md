# class Surface


```cpp
Inherits from Component<3U>
```



# class Surface


```cpp
Inherits from Component<2U>
```



# class Surface


 Geometric component describing a Surface. This component is described by a mesh.



```cpp
Inherits from Component<dimension>
```



## Functions

### Surface

```cpp
public void Surface<dimension>(const Surface<dimension> & )
```


### operator=

```cpp
public Surface<dimension> & operator=(const Surface<dimension> & )
```


### Surface

```cpp
public void Surface<dimension>(Surface<dimension> && other)
```


### ~Surface

```cpp
public void ~Surface<dimension>()
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


### Surface

```cpp
public void Surface<dimension>(SurfacesKey )
```


### Surface

```cpp
public void Surface<dimension>(const MeshImpl & impl, SurfacesKey )
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(SurfacesKey )
```


### mesh_type

```cpp
public const MeshImpl & mesh_type()
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<SurfaceMesh<dimension> > mesh, SurfacesKey )
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<SurfaceMesh<dimension> > mesh, SurfacesBuilderKey )
```


### set_surface_name

```cpp
public void set_surface_name(string_view name, SurfacesBuilderKey )
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(SurfacesBuilderKey )
```


### set_mesh

```cpp
public void set_mesh(int mesh, SurfacesKey )
```

### set_mesh

```cpp
public void set_mesh(int mesh, SurfacesBuilderKey )
```



