# class TetgenMesher


## Functions

### TetgenMesher

```cpp
protected void TetgenMesher(std::unique_ptr<TetrahedralSolidBuilder3D> && mesh_builder, Span internal_points)
```

### ~TetgenMesher

```cpp
protected void ~TetgenMesher()
```


### do_tetrahedralize

```cpp
protected void do_tetrahedralize()
```


### create_input_vertices

```cpp
protected void create_input_vertices(index_t nb_vertices)
```


### set_input_point

```cpp
protected void set_input_point(index_t vertex_id, const Point3D & point, index_t info)
```


### create_input_triangles

```cpp
protected void create_input_triangles(index_t nb_tirangles)
```


### set_input_triangle

```cpp
protected void set_input_triangle(index_t triangle_id, const std::array<index_t, 3> & vertices)
```


### create_input_edges

```cpp
protected void create_input_edges(index_t nb_edges)
```


### set_input_edge

```cpp
protected void set_input_edge(index_t edge_id, index_t v0, index_t v1)
```


### assign_result

```cpp
protected vector assign_result()
```


### TetgenMesher

```cpp
protected void TetgenMesher(int && mesh_builder, Span internal_points)
```




