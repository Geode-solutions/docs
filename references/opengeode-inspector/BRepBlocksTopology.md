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


### unique_vertex_is_part_of_two_blocks_and_no_boundary_surface

```cpp
public std::optional<std::string> unique_vertex_is_part_of_two_blocks_and_no_boundary_surface(index_t unique_vertex_index)
```


### unique_vertex_block_cmvs_count_is_incorrect

```cpp
public std::optional<std::string> unique_vertex_block_cmvs_count_is_incorrect(index_t unique_vertex_index)
```


### inspect_blocks

```cpp
public BRepBlocksTopologyInspectionResult inspect_blocks()
```




