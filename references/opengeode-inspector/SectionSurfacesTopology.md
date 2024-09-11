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

# class SectionSurfacesTopology


 Class for inspecting the topology of a Section model surfaces through its unique vertices



## Functions

### SectionSurfacesTopology

```cpp
public void SectionSurfacesTopology(const Section & section)
```


### section_vertex_surfaces_topology_is_valid

```cpp
public bool section_vertex_surfaces_topology_is_valid(index_t unique_vertex_index)
```


 Checks if the section unique vertices are parts of valid surfaces, i.e. verify: If a unique vertex is part of two surfaces, it is part of a least one line which is boundary of the two blocks.

### vertex_is_part_of_invalid_embedded_surface

```cpp
public optional vertex_is_part_of_invalid_embedded_surface(index_t unique_vertex_index)
```


### vertex_is_part_of_line_and_not_on_surface_border

```cpp
public optional vertex_is_part_of_line_and_not_on_surface_border(index_t unique_vertex_index)
```


### inspect_surfaces

```cpp
public SectionSurfacesTopologyInspectionResult inspect_surfaces()
```




