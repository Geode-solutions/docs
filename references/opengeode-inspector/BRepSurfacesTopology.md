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

# class BRepSurfacesTopology


 Class for inspecting the topology of a BRep model surfaces through their unique vertices



## Functions

### BRepSurfacesTopology

```cpp
public void BRepSurfacesTopology(const BRep & brep)
```


### brep_surfaces_topology_is_valid

```cpp
public bool brep_surfaces_topology_is_valid(index_t unique_vertex_index)
```


 Checks if the brep unique vertices are parts of valid surfaces, i.e. verify: Each surface is either internal or boundary. Each internal surface is internal to only one object and is not boundary. If the vertex is part of only one surface, the vertex is part of no more than 2 blocks, and the surface is either internal to a block (and the vertex is in one and only one block) or a boundary of all the blocks the vertex is in. If the vertex is part of multiple surfaces, it is either part of only one line (and no corner, and the line is boundary to all the surfaces) or multiple lines (and all the lines are either internal or boundary to at least 2 of the surfaces the vertex is in).

### surface_is_meshed

```cpp
public bool surface_is_meshed(const Surface3D & surface)
```


### surface_vertices_are_associated_to_unique_vertices

```cpp
public bool surface_vertices_are_associated_to_unique_vertices(const Surface3D & surface)
```


### vertex_is_part_of_not_internal_nor_boundary_surface

```cpp
public std::optional<std::string> vertex_is_part_of_not_internal_nor_boundary_surface(index_t unique_vertex_index)
```


### vertex_is_part_of_invalid_embedded_surface

```cpp
public std::optional<std::string> vertex_is_part_of_invalid_embedded_surface(index_t unique_vertex_index)
```


### vertex_is_part_of_invalid_single_surface

```cpp
public std::optional<std::string> vertex_is_part_of_invalid_single_surface(index_t unique_vertex_index)
```


### vertex_is_part_of_invalid_multiple_surfaces

```cpp
public std::optional<std::string> vertex_is_part_of_invalid_multiple_surfaces(index_t unique_vertex_index)
```


### vertex_is_part_of_line_and_not_on_surface_border

```cpp
public std::optional<std::string> vertex_is_part_of_line_and_not_on_surface_border(index_t unique_vertex_index)
```


### inspect_surfaces_topology

```cpp
public BRepSurfacesTopologyInspectionResult inspect_surfaces_topology()
```




