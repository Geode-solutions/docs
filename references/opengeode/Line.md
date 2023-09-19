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
public const EdgedCurve<dimension> & mesh()
```


### mesh_type

```cpp
public const MeshImpl & mesh_type()
```


### modifiable_mesh

```cpp
public EdgedCurve<dimension> & modifiable_mesh(LinesKey )
```


### Line

```cpp
public void Line<dimension>(LinesKey )
```


### Line

```cpp
public void Line<dimension>(const MeshImpl & impl, LinesKey )
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<EdgedCurve<dimension> > mesh, LinesKey )
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<EdgedCurve<dimension> > mesh, LinesBuilderKey )
```


### set_line_name

```cpp
public void set_line_name(string_view name, LinesBuilderKey )
```


### modifiable_mesh

```cpp
public EdgedCurve<dimension> & modifiable_mesh(LinesBuilderKey )
```


### set_mesh

```cpp
public void set_mesh(int mesh, LinesKey )
```

### set_mesh

```cpp
public void set_mesh(int mesh, LinesBuilderKey )
```



# class Line


```cpp
Inherits from Component<2U>
```



