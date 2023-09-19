# class WireframeBuilderFromOneMesh


```cpp
```cpp
Inherits from CornersLinesBuilder<Model>
```
```



## Functions

### ~WireframeBuilderFromOneMesh

```cpp
```cpp
public void ~WireframeBuilderFromOneMesh<Model, Mesh>()
```
```


### build_wireframe_step

```cpp
```cpp
public void build_wireframe_step()
```
```


### is_corner

```cpp
```cpp
public _Bool is_corner(index_t vertex)
```
```


### mappings

```cpp
```cpp
public IndexToModelMeshElementsMapping mappings()
```
```


### WireframeBuilderFromOneMesh

```cpp
```cpp
protected void WireframeBuilderFromOneMesh<Model, Mesh>(Model & model, const Mesh & one_mesh)
```
```


### add_corner_vertices

```cpp
```cpp
protected void add_corner_vertices(Span additional_corner_vertices)
```
```


### corner_vertices

```cpp
```cpp
protected const std::vector<index_t> & corner_vertices()
```
```


### add_line_edges

```cpp
```cpp
protected void add_line_edges(Span additional_line_edges)
```
```


### line_edges

```cpp
```cpp
protected const std::vector<index_t> & line_edges()
```
```


### update_corner_line_mappings

```cpp
```cpp
protected void update_corner_line_mappings()
```
```


### build_surfaces

```cpp
```cpp
protected void build_surfaces(const SurfaceMesh<dimension> & whole_surface, const absl::flat_hash_map<index_t, index_t> & whole_surface_to_one_mesh_vertices, Span whole_surface_to_one_mesh_polygons)
```
```

### build_surfaces

```cpp
```cpp
protected void build_surfaces(const SurfaceMesh<dimension> & whole_surface, const int & whole_surface_to_one_mesh_vertices, Span whole_surface_to_one_mesh_polygons)
```
```




# class WireframeBuilderFromOneMesh

# class WireframeBuilderFromOneMesh
