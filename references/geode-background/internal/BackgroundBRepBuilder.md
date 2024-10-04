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


```cpp
Inherits from BRepBuilder
```



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
public std::unique_ptr<BackgroundSolidBuilder> background_solid_builder(const uuid & block_id)
```


### copy

```cpp
public void copy(const BackgroundBRep & source)
```


### convert_blocks_to_background_solid

```cpp
public void convert_blocks_to_background_solid()
```


### convert_blocks_to_tetrahedral_solid

```cpp
public void convert_blocks_to_tetrahedral_solid()
```


### add_macro_vertex_info

```cpp
public void add_macro_vertex_info(const MeshVertex & macro_vertex, index_t unique_vertex_id)
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




