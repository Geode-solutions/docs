# class LinesBuilder


## Functions

### load_lines

```cpp
public void load_lines(string_view directory)
```


### line_mesh_builder

```cpp
public std::unique_ptr<EdgedCurveBuilder<dimension> > line_mesh_builder(const uuid & id)
```


 Get a pointer to the builder of a Line mesh

**id** [in] Unique index of the Line

### set_line_name

```cpp
public void set_line_name(const uuid & id, string_view name)
```


### LinesBuilder

```cpp
protected void LinesBuilder<dimension>(Lines<dimension> & lines)
```


### create_line

```cpp
protected const uuid & create_line()
```


### create_line

```cpp
protected const uuid & create_line(const MeshImpl & impl)
```


### create_line

```cpp
protected void create_line(uuid line_id)
```


### create_line

```cpp
protected void create_line(uuid line_id, const MeshImpl & impl)
```


### delete_line

```cpp
protected void delete_line(const Line<dimension> & line)
```


### set_line_mesh

```cpp
protected void set_line_mesh(const uuid & id, std::unique_ptr<EdgedCurve<dimension> > mesh)
```


### modifiable_line_mesh

```cpp
protected EdgedCurve<dimension> & modifiable_line_mesh(const uuid & id)
```




# class LinesBuilder


# class LinesBuilder


