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

# class BRepCornersTopology


## Functions

### BRepCornersTopology

```cpp
public void BRepCornersTopology(const BRep & brep)
```


### brep_corner_topology_is_valid

```cpp
public bool brep_corner_topology_is_valid(index_t unique_vertex_index)
```


 Checks if the brep unique vertices are valid corners, i.e. corners that verify: Each unique_vertex can only be associated to one corner. Each corner can only be internal to one object (surface or block). Each corner is a boundary of every line it is associated to.

### corner_is_meshed

```cpp
public bool corner_is_meshed(const Corner3D & corner)
```


### corner_vertices_are_associated_to_unique_vertices

```cpp
public bool corner_vertices_are_associated_to_unique_vertices(const Corner3D & corner)
```


### unique_vertex_has_multiple_corners

```cpp
public std::optional<std::string> unique_vertex_has_multiple_corners(index_t unique_vertex_index)
```


### corner_is_not_internal_nor_boundary

```cpp
public std::optional<std::string> corner_is_not_internal_nor_boundary(index_t unique_vertex_index)
```


### corner_is_part_of_line_but_not_boundary

```cpp
public std::optional<std::string> corner_is_part_of_line_but_not_boundary(index_t unique_vertex_index)
```


### inspect_corners_topology

```cpp
public BRepCornersTopologyInspectionResult inspect_corners_topology()
```




