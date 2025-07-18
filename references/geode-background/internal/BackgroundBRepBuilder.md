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

# class BackgroundBRepBuilder


## Functions

### BackgroundBRepBuilder

```cpp
public void BackgroundBRepBuilder(BackgroundBRep & background_brep)
```


### ~BackgroundBRepBuilder

```cpp
public void ~BackgroundBRepBuilder()
```


### background_solid_builder

```cpp
public unique_ptr background_solid_builder(const Block3D & block)
```


### add_macro_vertex_info

```cpp
public void add_macro_vertex_info(const MeshVertex & macro_vertex, index_t unique_vertex_id)
```


### add_macro_edge_info

```cpp
public void add_macro_edge_info(const MeshEdge & macro_edge, const Line3D & line, index_t edge)
```


### add_macro_edge_info

```cpp
public void add_macro_edge_info(const MeshEdge & macro_edge, const Surface3D & surface, const PolygonEdge & edge)
```


### add_macro_facet_info

```cpp
public void add_macro_facet_info(const MeshPolygon & macro_facet, const Surface3D & surface, index_t triangle)
```


### update_information

```cpp
public void update_information(const BRepCollapsePolygonEdgeInfo & info)
```


### update_information

```cpp
public void update_information(const BRepSplitPolygonEdgeInfo & info)
```


### update_information

```cpp
public void update_information(const BRepSplitTetrahedronInfo & info)
```


### update_information

```cpp
public void update_information(const BRepSplitTriangleInfo & info)
```


### update_vertex

```cpp
public void update_vertex(const VertexMultiMapping & mapping)
```




