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

# class BRepBlocksTopology


 Class for inspecting the topology of a BRep model blocks through their unique vertices



## Functions

### BRepBlocksTopology

```cpp
public void BRepBlocksTopology(const BRep & brep)
```


### brep_blocks_topology_is_valid

```cpp
public bool brep_blocks_topology_is_valid(index_t unique_vertex_index)
```


### block_is_meshed

```cpp
public bool block_is_meshed(const Block3D & block)
```


### block_vertices_are_associated_to_unique_vertices

```cpp
public bool block_vertices_are_associated_to_unique_vertices(const Block3D & block)
```


### unique_vertex_is_part_of_two_blocks_and_no_boundary_surface

```cpp
public std::optional<std::string> unique_vertex_is_part_of_two_blocks_and_no_boundary_surface(index_t unique_vertex_index)
```


### unique_vertex_block_cmvs_count_is_incorrect

```cpp
public std::optional<std::string> unique_vertex_block_cmvs_count_is_incorrect(index_t unique_vertex_index)
```


### vertex_is_part_of_surface_with_wrong_relationships_to_block

```cpp
public std::optional<std::string> vertex_is_part_of_surface_with_wrong_relationships_to_block(index_t unique_vertex_index, absl::Span<const uuid> not_boundaries_surfaces, absl::Span<const uuid> dangling_surface)
```


### vertex_is_part_of_invalid_single_surface

```cpp
public std::optional<std::string> vertex_is_part_of_invalid_single_surface(index_t unique_vertex_index, absl::Span<const uuid> not_boundaries_surfaces)
```


### vertex_is_part_of_invalid_multiple_surfaces

```cpp
public std::optional<std::string> vertex_is_part_of_invalid_multiple_surfaces(index_t unique_vertex_index)
```


### inspect_blocks

```cpp
public BRepBlocksTopologyInspectionResult inspect_blocks()
```




