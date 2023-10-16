# class CornersBuilder


## Functions

### load_corners

```cpp
public void load_corners(string_view directory)
```


### corner_mesh_builder

```cpp
public std::unique_ptr<PointSetBuilder<dimension> > corner_mesh_builder(const uuid & id)
```


 Get a pointer to the builder of a Corner mesh

**id** [in] Unique index of the Corner

### set_corner_name

```cpp
public void set_corner_name(const uuid & id, string_view name)
```


### CornersBuilder

```cpp
protected void CornersBuilder<dimension>(Corners<dimension> & corners)
```


### create_corner

```cpp
protected const uuid & create_corner()
```


### create_corner

```cpp
protected const uuid & create_corner(const MeshImpl & impl)
```


### create_corner

```cpp
protected void create_corner(uuid corner_id)
```


### create_corner

```cpp
protected void create_corner(uuid corner_id, const MeshImpl & impl)
```


### delete_corner

```cpp
protected void delete_corner(const Corner<dimension> & corner)
```


### set_corner_mesh

```cpp
protected void set_corner_mesh(const uuid & id, std::unique_ptr<PointSet<dimension> > mesh)
```


### modifiable_corner_mesh

```cpp
protected PointSet<dimension> & modifiable_corner_mesh(const uuid & id)
```




# class CornersBuilder


# class CornersBuilder


