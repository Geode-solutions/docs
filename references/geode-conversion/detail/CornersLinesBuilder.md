# class CornersLinesBuilder


## Records

Impl



## Functions

### ~CornersLinesBuilder

```cpp
```cpp
public void ~CornersLinesBuilder<Model>()
```
```


### wireframe

```cpp
```cpp
public const EdgedCurve<dimension> & wireframe()
```
```


### build

```cpp
```cpp
public void build()
```
```


### build_wireframe_step

```cpp
```cpp
public void build_wireframe_step()
```
```

### build_corners_step

```cpp
```cpp
public void build_corners_step()
```
```


### build_lines_step

```cpp
```cpp
public void build_lines_step()
```
```


### add_corner

```cpp
```cpp
public void add_corner(index_t vertex)
```
```


### wireframe_edge_id

```cpp
```cpp
public absl::optional<index_t> wireframe_edge_id(const std::array<index_t, 2> & edge_vertices)
```
```


### vertex_id

```cpp
```cpp
public index_t vertex_id(index_t vertex)
```
```


### line_uuid

```cpp
```cpp
public const uuid & line_uuid(index_t edge)
```
```


### corner_uuid

```cpp
```cpp
public absl::optional<uuid> corner_uuid(index_t vertex)
```
```


### line_edge_id

```cpp
```cpp
public index_t line_edge_id(index_t edge)
```
```


### line_vertex_id

```cpp
```cpp
public index_t line_vertex_id(index_t vertex, const uuid & output_line_uuid)
```
```


### CornersLinesBuilder

```cpp
```cpp
protected void CornersLinesBuilder<Model>(Model & model)
```
```


### find_or_create_edge

```cpp
```cpp
protected index_t find_or_create_edge(const std::array<index_t, 2> & edge_vertices, const std::array<Point<dimension>, 2> & edge_points)
```
```


### find_or_create_corner

```cpp
```cpp
protected index_t find_or_create_corner(index_t corner_vertex, const Point<dimension> & corner_point)
```
```




# class CornersLinesBuilder

# class CornersLinesBuilder

