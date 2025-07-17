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

# class BRepLinesTopology


 Class for inspecting the topology of a BRep model lines through their unique vertices



## Functions

### BRepLinesTopology

```cpp
public void BRepLinesTopology(const BRep & brep)
```


### brep_lines_topology_is_valid

```cpp
public bool brep_lines_topology_is_valid(index_t unique_vertex_index)
```


 Checks if the brep unique vertices are parts of valid lines, i.e. verify: Each line is either internal or boundary. If a line is internal to an object, it cannot be incident to it. If the vertex is part of only one line, the line is either internal to a surface, internal to a block, or a boundary of multiple surfaces. If the vertex is part of multiple lines, it is also a corner.

### line_is_meshed

```cpp
public bool line_is_meshed(const Line3D & line)
```


### line_vertices_are_associated_to_unique_vertices

```cpp
public bool line_vertices_are_associated_to_unique_vertices(const Line3D & line)
```


### vertex_is_part_of_line_with_wrong_relationships_to_surface

```cpp
public std::optional<std::string> vertex_is_part_of_line_with_wrong_relationships_to_surface(index_t unique_vertex_index)
```


### vertex_is_part_of_invalid_embedded_line

```cpp
public std::optional<std::string> vertex_is_part_of_invalid_embedded_line(index_t unique_vertex_index)
```


### vertex_is_part_of_invalid_single_line

```cpp
public std::optional<std::string> vertex_is_part_of_invalid_single_line(index_t unique_vertex_index)
```


### vertex_has_lines_but_is_not_a_corner

```cpp
public std::optional<std::string> vertex_has_lines_but_is_not_a_corner(index_t unique_vertex_index)
```


### line_edge_has_wrong_component_edges_around

```cpp
public std::optional<std::string> line_edge_has_wrong_component_edges_around(const Line3D & line, const index_t edge_index)
```


### inspect_lines_topology

```cpp
public BRepLinesTopologyInspectionResult inspect_lines_topology()
```




