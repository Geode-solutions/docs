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

# class SectionLinesTopology


 Class for inspecting the topology of a Section model lines through their unique vertices



## Functions

### SectionLinesTopology

```cpp
public void SectionLinesTopology(const Section & section)
```


### section_lines_topology_is_valid

```cpp
public bool section_lines_topology_is_valid(index_t unique_vertex_index)
```


 Checks if the section unique vertices are parts of valid lines, i.e. verify: Each line is either internal or boundary. Each internal line is internal to only one object and is not boundary. If the vertex is part of only one line, the vertex is part of no more than 2 surfaces, and the line is either internal to a surface (and the vertex is in one and only one surface) or a boundary of all the surfaces the vertex is in. If the vertex is part of multiple lines, it is also a corner.

### line_is_meshed

```cpp
public bool line_is_meshed(const Line2D & line)
```


### line_vertices_are_associated_to_unique_vertices

```cpp
public bool line_vertices_are_associated_to_unique_vertices(const Line2D & line)
```


### vertex_is_part_of_not_internal_nor_boundary_line

```cpp
public optional vertex_is_part_of_not_internal_nor_boundary_line(const index_t unique_vertex_index)
```


### vertex_is_part_of_invalid_embedded_line

```cpp
public optional vertex_is_part_of_invalid_embedded_line(const index_t unique_vertex_index)
```


### vertex_is_part_of_invalid_single_line

```cpp
public optional vertex_is_part_of_invalid_single_line(index_t unique_vertex_index)
```


### vertex_has_lines_but_is_not_a_corner

```cpp
public optional vertex_has_lines_but_is_not_a_corner(index_t unique_vertex_index)
```


### inspect_lines_topology

```cpp
public SectionLinesTopologyInspectionResult inspect_lines_topology()
```




