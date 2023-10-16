# class Line


```cpp
Inherits from Component<3U>
```



# class Line


 Geometric component describing a Line. This component is described by a mesh.



```cpp
Inherits from Component<dimension>
```



## Functions

### Line

```cpp
public void Line<dimension>(const Line<dimension> & )
```


### operator=

```cpp
public Line<dimension> & operator=(const Line<dimension> & )
```


### Line

```cpp
public void Line<dimension>(Line<dimension> && other)
```


### ~Line

```cpp
public void ~Line<dimension>()
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


### mesh_type

```cpp
public const MeshImpl & mesh_type()
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(LinesKey key)
```


### Line

```cpp
public void Line<dimension>(LinesKey key)
```


### Line

```cpp
public void Line<dimension>(const MeshImpl & impl, LinesKey key)
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, LinesKey key)
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, LinesBuilderKey key)
```


### set_line_name

```cpp
public void set_line_name(string_view name, LinesBuilderKey key)
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(LinesBuilderKey key)
```


### set_mesh

```cpp
public void set_mesh(int mesh, LinesKey key)
```

### set_mesh

```cpp
public void set_mesh(int mesh, LinesBuilderKey key)
```



# class Line


```cpp
Inherits from Component<2U>
```



