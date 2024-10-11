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
protected index_t find_or_create_edge(const std::array<index_t, 2> & edge_vertices, const std::array<Point<dimension>, 2> & edge_points)
```


### find_or_create_corner

```cpp
protected index_t find_or_create_corner(index_t corner_vertex, const Point<dimension> & corner_point)
```




# class CornersLinesBuilder


# class CornersLinesBuilder


