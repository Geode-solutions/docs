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

# class BackgroundBRepConformityHelpers


## Functions

### BackgroundBRepConformityHelpers

```cpp
protected void BackgroundBRepConformityHelpers(ModifiableObject background_brep, BackgroundBRepBuilder & background_builder, BRepBuilder & builder)
```


### ~BackgroundBRepConformityHelpers

```cpp
protected void ~BackgroundBRepConformityHelpers()
```


### paint_block

```cpp
protected void paint_block(const Block3D & block)
```


### paint_line

```cpp
protected void paint_line(const Block3D & block, const Line3D & line)
```


### paint_edge

```cpp
protected void paint_edge(const Block3D & block, BackgroundSolidBuilder & builder, const Component3D & component, std::array<index_t, 2> & vertices, index_t component_edge)
```


### paint_surface

```cpp
protected void paint_surface(const Block3D & block, const Surface3D & surface)
```


### paint_surface_edges

```cpp
protected void paint_surface_edges(const Block3D & block, const Surface3D & surface)
```


### paint_surface_triangles

```cpp
protected void paint_surface_triangles(const Block3D & block, const Surface3D & surface)
```


### update_block_unique_vertices

```cpp
protected void update_block_unique_vertices(const Block3D & block)
```


### detect_unconformal_elements

```cpp
protected void detect_unconformal_elements(const Block3D & block, UnconformalElements & unconformal_elements)
```


### make_line_macro_edge_conformal

```cpp
protected void make_line_macro_edge_conformal(const MeshEdge & macro_edge)
```


### make_surface_macro_edge_conformal

```cpp
protected void make_surface_macro_edge_conformal(const MeshEdge & macro_edge)
```


### make_macro_facet_conformal

```cpp
protected void make_macro_facet_conformal(const MeshPolygon & macro_facet)
```


### collapse_colocated_points

```cpp
protected void collapse_colocated_points()
```




