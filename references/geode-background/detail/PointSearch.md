# class PointSearch

# class PointSearch

# class PointSearch


## Records

Impl



## Functions

### ~PointSearch

```cpp
```cpp
public void ~PointSearch<dimension>()
```
```


### vertex_search

```cpp
```cpp
public const NNSearch<dimension> & vertex_search()
```
```


### element_search

```cpp
```cpp
public const NNSearch<dimension> & element_search()
```
```


### mesh_points

```cpp
```cpp
public int mesh_points(const Mesh & mesh)
```
```


### mesh_element_barycenters

```cpp
```cpp
public int mesh_element_barycenters(const Mesh & mesh)
```
```


### build_vertex_tree

```cpp
```cpp
public void build_vertex_tree(int points, PointSearchKey )
```
```


### PointSearch

```cpp
```cpp
protected void PointSearch<dimension>(int points, int element_barycenters)
```
```


### PointSearch

```cpp
```cpp
protected void PointSearch<dimension>(PointSearch<dimension> && other)
```
```


### mesh_points

```cpp
```cpp
public std::vector<Point<Mesh::dim> > mesh_points(const Mesh & mesh)
```
```


### mesh_element_barycenters

```cpp
```cpp
public std::vector<Point<Mesh::dim> > mesh_element_barycenters(const Mesh & mesh)
```
```


### build_vertex_tree

```cpp
```cpp
public void build_vertex_tree(std::vector<Point<dimension> > points, PointSearchKey )
```
```

### PointSearch

```cpp
```cpp
protected void PointSearch<dimension>(std::vector<Point<dimension> > points, std::vector<Point<dimension> > element_barycenters)
```
```


