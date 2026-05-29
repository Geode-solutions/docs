<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class CornersLinesBuilder


## Functions

### ~CornersLinesBuilder

```cpp
public void ~CornersLinesBuilder<Model>()
```


### wireframe

```cpp
public const EdgedCurve<dimension> & wireframe()
```


### build

```cpp
public void build()
```


### build_wireframe_step

```cpp
public void build_wireframe_step()
```

### build_corners_step

```cpp
public void build_corners_step()
```


### build_lines_step

```cpp
public void build_lines_step()
```


### add_corner

```cpp
public void add_corner(index_t vertex)
```


### wireframe_edge_id

```cpp
public optional wireframe_edge_id(const std::array<index_t, 2> & edge_vertices)
```


### wireframe_vertex_id

```cpp
public optional wireframe_vertex_id(index_t support_mesh_vertex_id)
```


### support_mesh_vertex_id

```cpp
public index_t support_mesh_vertex_id(index_t wireframe_vertex_id)
```


### line_uuid

```cpp
public const uuid & line_uuid(index_t wireframe_edge_id)
```


### corner_uuid

```cpp
public optional corner_uuid(index_t wireframe_vertex_id)
```


### line_edge_id

```cpp
public index_t line_edge_id(index_t wireframe_edge_id)
```


### line_vertex_id

```cpp
public index_t line_vertex_id(index_t wireframe_vertex_id, const uuid & output_line_uuid)
```


### CornersLinesBuilder

```cpp
protected void CornersLinesBuilder<Model>(Model & model)
```


### find_or_create_edge

```cpp
protected tuple find_or_create_edge(const std::array<index_t, 2> & edge_vertices, const std::array<Point<dimension>, 2> & edge_points)
```


### find_or_create_corner

```cpp
protected tuple find_or_create_corner(index_t corner_vertex, const Point<dimension> & corner_point)
```


### find_or_create_vertex

```cpp
protected tuple find_or_create_vertex(index_t unique_vertex, const Point<dimension> & point)
```


### declare_corner

```cpp
protected void declare_corner(index_t wireframe_vertex_id, const uuid & corner_uuid)
```


### undeclare_corner

```cpp
protected void undeclare_corner(index_t wireframe_vertex_id)
```


### declare_line_edge

```cpp
protected void declare_line_edge(index_t wireframe_edge_id, const uuid & line_uuid, index_t line_edge_id)
```


### remove_line_edges

```cpp
protected void remove_line_edges(const uuid & line_uuid)
```




# class CornersLinesBuilder


# class CornersLinesBuilder


